const today = new Date();
var time = today.getDay();
if(time === 1){
    time = "Monday"
}else if(time === 2){
    time = "Tuesday"
}else if(time === 3){
    time = "Wednesday"
}else if(time === 4){
    time = "Thursday"
}else if(time === 5){
    time = "Friday"
}else if(time === 6){
    time = "Saturday"
}else if(time === 7){
    time = "Sunday"
}

document.getElementById("date").innerHTML = time;

var Hours = "";
if(today.getHours() > 12){
    Hours = today.getHours() - 12 + "PM";
}

var currentTime = Hours + " : " + today.getMinutes() + " : " + today.getSeconds();
document.getElementById("time").innerHTML = currentTime;

function copyClipboard(){
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
}

function httpCookie(){
    var Text = document.getElementById("http").value.toString();
    Text = Text.split("; ");
    var arrayText = Text.map(cookie => cookie.split(","));
    var value = arrayText.map(v => v[0].split("=")[1]);
    console.log(value);
    document.getElementById("httpvalue").innerHTML = value;
}

function Json(){
    const isValidJSON = obj => {
        try {
          JSON.parse(obj);
          return true;
        } catch (e) {
          return false;
        }
    };
    var returnJSON = isValidJSON(document.getElementById("json").value);
    if(returnJSON === true){
        returnJSON = "TRUE";
    }else{
        returnJSON = "FALSE";
    }
    document.getElementById("jsonvalue").innerHTML = returnJSON;
}

function JsonReturn(){
    var jsontext = document.getElementById("jsonReturn").value;
    var blob = new Blob([jsontext], {type: "json"});
    saveAs(blob, "hello world.json");
}
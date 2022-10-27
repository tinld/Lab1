function checkUsername(){
    var nameRegex = /^[a-zA-Z\-]+$/;
    var username = document.getElementById("username").value.match(nameRegex);
    if(username == null){
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        document.frm.firstName.focus();
        return false;
    }
    
}
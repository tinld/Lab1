import React from "react";


const user = {
    firstName: 'Elon',
    lastName: 'Musk',
    age: 49
}

function Exercise4_5(){
    return(
        <div>
            <h1>first name: {user.firstName}</h1>
            <h1>last name: {user.lastName}</h1>
            <h1>age: {user.age}</h1>
        </div>
    );
}

export default Exercise4_5;
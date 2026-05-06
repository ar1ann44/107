import { useState } from "react";
import { IconMail, IconMailOff } from '@tabler/icons-react';

function About() {
// const [state, setState] = useState(initialValue);
    const [firstName, setFirstName] = useState("Ariana");
    const [isEmailVsisible, setIsEmailVisible] = useState(false);


function showEmail(){
    console.log("show email");
    // modify the value of isEmailVisible, should be true
    setIsEmailVisible(true);
}

function hideEmail(){
    console.log("hide email");
    // modify the value of isEmailVisible, should be false
    setIsEmailVisible(false);
}

    return (
        <div>
            <h1>About Page</h1>
            <p> Hello my name is: {firstName} </p>

            {
                // ternary operator
                // condition ? true : false
                //10 > 30 ? <p>results are true</p> : <p>results was false</p>

                isEmailVsisible 
                ? <p>osuna.jenifer@uabc.edu.mx</p> 
                : <p className="text-primary">click the button to see my email address</p>

            }

            <button className="btn btn-dark me-2 rounded-pill " onClick={hideEmail}>
                <IconMailOff className="me-2" />
                Hide my email
            </button>

            <button className="btn btn-dark rounded-pill" onClick={showEmail}>
                <IconMail className="me-2"/>
                Show my email
            </button>

            <div className="my-4 ">
                <img width={800} src="https://images.unsplash.com/photo-1698230846727-99a24a391db5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" atl= "my about picture"/>

            </div>

        </div>
    )
}

export default About;
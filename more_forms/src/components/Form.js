import React, { useState } from 'react';


const Form = (props) => {
    const [ firstname, setFirstname] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpw, setConfirmpw] = useState("");
    const [confirmError, setConfirmError] = useState("");
    
    const firstNameChange = (e) => {
        e.preventDefault();
        setFirstname(e.target.value);
        if(firstname === undefined || firstname.length < 2) {
            setFirstError("First Name must be at least 2 characters");
        } else {
            setFirstError("");
        }
    }

    const lastNameChange = (e) => {
        e.preventDefault();
        setLastname(e.target.value);
        if(lastname === undefined || lastname.length < 2) {
            setLastError("Last Name must be at least 2 characters");
        } else {
            setLastError("");
        }
    }

    const emailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        if(email === undefined || email.length < 2) {
            setEmailError("Email must be at least 2 characters");
        } else {
            setEmailError("");
        }
    }

    const passwordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
        console.log(password);
        console.log(password.length);
        if(password === undefined || password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const confirmChange = (e) => {
        e.preventDefault();
        setConfirmpw(e.target.value);
        console.log(password)
        console.log(confirmpw);
        if(confirmpw !== password) {
            setConfirmError("Password must match ");
        } else {
            setConfirmError("");
        }
        
    }

    return(
        <form>
            <div>
                <label>First Name: </label>
                <input type="text"  value={ firstname } onChange={ firstNameChange } />
                { firstError }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text"  value={ lastname } onChange={ lastNameChange } />
                { lastError }
            </div>
            <div>
                <label>Email: </label>
                <input type="text"  value={ email } onChange={ emailChange } />
                { emailError }
            </div>
            <div>
                <label>Password: </label>
                <input type="password"  value={ password } onChange={ passwordChange } />
                { passwordError }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password"  value={ confirmpw } onChange={ confirmChange } />
                { confirmError }
            </div>
        </form>

    );
};
export default Form;
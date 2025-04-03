import React from "react";

function Signup() {
    return(
        <main>
            <div className="login">
    <h1>LOGIN</h1>
    <form action="/login" method="POST">
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="First Name" required/>
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last Name" required/>
        </div>
        <div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Email" required/>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" required/>
        </div>
        <br/><br/>
    </form>
    <button>Submit</button>
    </div>
        </main>
    );
};

export default Signup;
import React from "react";


function Login({user, setUser}) {

    const handleForm = (e) => {
        e.preventDefault();
        console.log(handleForm, "Submission is on!");
        console.log(e.target.title.value);
        console.log(e.target.author.value);
        console.log(e.target.publisher.value);
        console.log(e.target.genre.value);
        console.log(e.target.pages.value);
        console.log(e.target.rating.value);
        console.log(e.target.synopsis.value);
    }

    return(
        <main>
            <div className="login">
    <h1>LOGIN</h1>
    <form action="/login" method="POST" onSubmit={handleForm}>
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


export default Login;
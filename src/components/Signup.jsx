import React from "react";
import { useNavigate } from "react-router-dom";

function Signup({ user, setUser }) {
  const navigate = useNavigate();
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

    localStorage.setItem("user", JSON.stringify());

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const url =
      "https://course-project-codesquad-comics-server.onrender.com/signup";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("user", JSON.stringify());
        navigate("/admin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <div className="SignUp">
        <h1>Sign Up</h1>
        <form action="/SignUp" method="POST" onSubmit={handleForm}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <br />
          <br />
        </form>
        <button>Submit</button>
      </div>
    </main>
  );
}

export default Signup;

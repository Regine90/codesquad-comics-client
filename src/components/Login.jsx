import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ user, setUser }) {
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

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const url =
      "https://course-project-codesquad-comics-server.onrender.com/login/local";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        localStorage.setItem("user", JSON.stringify());
        navigate("/admin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <div className="login">
        <h1>LOGIN</h1>
        <form action="/login" method="POST" onSubmit={handleForm}>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
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
        <div className="form-button">
        <button>Submit</button>
        </div>
      </div>
    </main>
  );
}

export default Login;

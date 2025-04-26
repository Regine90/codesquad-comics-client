import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header({ user, setUser }) {
  const navigate = useNavigate();
  const handleLogout = () => {

    const url =
      "https://course-project-codesquad-comics-server.onrender.com/logout";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Result:", result)
        localStorage.removeItem("user");
        setUser({});
        navigate("/");
      })
      .catch((error) => {
        console.log("Logging out Error!", error)
      navigate("/admin");
  });
  };

  return (
    <header>
      <div className="header-color">
        <Link to="/">
          <img
            src="/images/CodeSquad-Comics-logo.png"
            width="300px"
            alt="CodeSquad logo"
          />
        </Link>
        <nav className="navbar-move">
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          {user && user.username ? (
            <>
            <link to="/admin">Admin</link>
            <br />
            <a href="#" onClick={handleLogout}>Logout</a>
            </>
          ) : (
          <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

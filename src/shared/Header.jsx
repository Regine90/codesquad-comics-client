import React from "react";

function Header({user, setUser}) {
  return (
    <header>
        <div className="header-color">
        <a href="#"><img src="/images/CodeSquad-Comics-logo.png" 
        width="300px" 
        alt="CodeSquad logo"/></a>
        <nav className="navbar-move">
        <a href="#">Home</a>
        <br/>
        <a href="#">About</a>
        <br/>
        <a href="#">Login</a>
        </nav>
        </div>
    </header>
  );
};


export default Header;
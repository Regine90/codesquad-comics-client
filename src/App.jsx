import { useState } from "react";
import "./App.css";
import Header from "./shared/Header";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";
import Footer from "./shared/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <div>
        <div className="page-wrapper">
          <Header user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
          <Footer />
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

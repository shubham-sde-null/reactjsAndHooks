import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { DiReact } from "react-icons/di";
import { CiShare1 } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
function NavBar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function changeTitle() {
      setWindowSize(window.innerWidth);
      //   console.log("the width is changing:", window.innerWidth);
    }
    window.addEventListener("resize", changeTitle);
  });

  return (
    <div className="navbar">
      <a href="#shubham" className="navbarLogo">
        <DiReact /> React<sup className="author"> By Shubham Pawar</sup>
      </a>
      <a href="#whatIsReact" className="whatIsReact">
        What is React?
      </a>
      <a href="#home">
        {windowSize < 600 ? "Why React JS?" : "Why React JS For FrontEnd?"}{" "}
      </a>
      <a href="#hooks">React Hooks</a>
      <a href="#hooks" className="navbarGit">
        {windowSize < 600 ? (
          <>
            <AiFillGithub />
            {/* <CiShare1 /> */}
          </>
        ) : (
          <>
            {" "}
            Github
            <CiShare1 />
          </>
        )}
      </a>
    </div>
  );
}

export default NavBar;

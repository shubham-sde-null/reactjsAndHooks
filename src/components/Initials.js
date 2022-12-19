import React from "react";
import "./Initials.css";
import shubham from "../assests/shubhammain.png";
function Initials() {
  return (
    <section id="shubham">
      <div className="container initials">
        <img src={shubham} alt="" />{" "}
        <p id="start">
          Hello, I am Shubham Pawar.This page is an overview of getting the
          basic knowledge of react js and its hooks. On this page, you will see
          all the react js hooks and their use cases.
        </p>
      </div>
    </section>
  );
}

export default Initials;

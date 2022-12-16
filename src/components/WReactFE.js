import React from "react";
import "./WReactFE.css";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Reasons from "./Reasons";
import reasons from "../context/CompleteData.js";
// console.log("the data is", reasons);
function WReactFE() {
  return (
    <section id="whyReact">
      <div className="container reactFront">
        <h1>Why React JS For FrontEnd?</h1>
        <p>
          ReactJS is a multi-purpose, open-source library that is mainly used in
          front-end development, focusing on building user interfaces. It
          developed a new way of rendering websites, evolving the responsive
          nature of web pages.
        </p>
        <h2>
          Some Of The Major Reason Why We Use React JS For FrontEnd Development:
        </h2>
        <Reasons reasons={reasons[0]} />
        <Reasons reasons={reasons[1]} />
        <Reasons reasons={reasons[2]} />
        <Reasons reasons={reasons[3]} />
        <Reasons reasons={reasons[4]} />
        <Reasons reasons={reasons[5]} />
        <Reasons reasons={reasons[6]} />
        <Reasons reasons={reasons[7]} />
        {/* <p>
          React JS is a{" "}
          <span style={{ color: "#f39c12", fontWeight: "500" }}>
            JavaScript
          </span>
          &nbsp;
          <span style={{ color: "#ff3838", fontWeight: "500" }}>
            library
          </span>{" "}
          used in web development to build interactive elements on websites.
        </p> */}
      </div>
    </section>
  );
}

export default WReactFE;

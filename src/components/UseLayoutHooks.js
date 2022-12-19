import React from "react";
import "./UseLayoutHooks.css";
import useLayout1 from "../assests/uselayout1.mp4";
function UseLayoutHooks() {
  return (
    <div className="useLayoutHooks">
      {" "}
      <h2 id="useLayout">UseLayout() Hook</h2>
      <p>
        The useLayout() hook is similar to the useEffect() hook, the only
        difference is it gets executed before the page gets rendered, whereas
        useEffect executes after the page gets rendered.
        <br />
        If we use both useLayout and useEffect hooks together then useLayout
        gets executed first.
        <br />
        We use useLayout hook when we want to show something while our data is
        loading on the page, like showing some loading design or loading page.
      </p>
      <p>
        <span className="syntax">Syntax:</span> The useLayout hook takes two
        argument first is the function and the second one is dependency array.
      </p>
      <p
        style={{
          color: "#fed330",
          fontSize: "1.1rem",
          fontWeight: "500",
          // border: "0.5px solid white",
          // width: "fit-content",
          // borderRadius: "0.7rem",
          // padding: "0 1rem",
        }}
      >
        useLayout(function, dependency array)
      </p>
      <p className="example">
        <span
          style={{
            textDecoration: "white underline",
            textUnderlineOffset: "3px",
          }}
        >
          Example:&nbsp;
        </span>
        Here in this example, I am going to show how the useLayout hook gets
        executed before the page gets rendered and the useEffect hook gets
        executed after the page gets rendered.
      </p>
      <div className="videoCont">
        <video
          src={useLayout1}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            In this example, I have used one input tag and stored its reference
            of it in an inputRef variable. I am going to change the value of the
            input tag using the useEffect hook. The main purpose of this example
            is, I wanted to show that the useLayout hooks run before the page
            gets rendered and prints the initial value, and useEffect updates
            the old value and prints the new value, earlier value was "SHUBHAM"
            now it became "PAWAR".
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseLayoutHooks;

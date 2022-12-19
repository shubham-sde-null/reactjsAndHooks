import React from "react";
import "./UseRefHooks.css";
import useRef1 from "../assests/useref1.mp4";

function UseRefHooks() {
  return (
    <div className="useRefHooks">
      {" "}
      <h2 id="useRef">UseRef() Hook</h2>
      <p>
        The useRef() hook allows to directly create a refrence to the DOM
        element in the functional component.
        <br />
        The useRef Hook allows you to persist values between renders.
        <br />
        It can be used to store a mutable value that does not cause a re-render
        when updated.
      </p>
      <p>
        <span className="syntax">Syntax:</span> The useRef returns a mutable
        reference object. This object has a property called ".current".
      </p>
      <p className="syntaxFormat">const refContainer=useRef(initialValue)</p>
      {/* <p className="example">
        <span
          style={{
            textDecoration: "white underline",
            textUnderlineOffset: "3px",
          }}
        >
          Example:&nbsp;
        </span>
        Here I am going to show an example where I am going to click on a
        button, which will increase the count value, and at the same time, it
        will hide the text and by clicking the button again, it will show the
        text again. This example will be done using both useState and useReducer
        hook.
      </p> */}
      <div className="videoCont">
        <video
          src={useRef1}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here in this example I have stored the reference of the dom element
            input tag in the inputRef variable. Now I am using the current
            property provided by useRef to bring the input field in focus once I
            clicked on the change name button.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseRefHooks;

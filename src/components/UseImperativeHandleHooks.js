import React from "react";
import "./UseImperativeHandleHooks.css";
import useImperative1 from "../assests/useimperative1.mp4";
import useImperative2 from "../assests/useimperative2.mp4";
function UseImperativeHandleHooks() {
  return (
    <div className="useImperativeHandleHooks">
      {" "}
      <h2 id="useImperativeHandle">UseImperativeHandle() Hook</h2>
      <p>
        Both useImperativeHandle() and useRef() hook allows to pass the ref
        object but the latter one doesn’t allow to customize the instances that
        are also passed with the ref object. useImperativeHandle hooks is
        different from the useRef hook in majorly two ways −
        <br />
        It allows handling and customizing the returned value explicitly.
        <br />
        It allows you to replace the native instances of the ref object with the
        user-defined ones.
      </p>
      <p>
        <span className="syntax">Syntax:</span> The UseImperativeHandle hook
        takes three arguments, the first one is the ref passed from a parent,
        the second one is the function, and the third one is the dependency
        array.
      </p>
      <p className="syntaxFormat">
        useImperativeHandle(ref, function, [dependency array])
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
        Here I am going to make a child component called Button and by clicking
        on that Button we will see some text appearing, and by clicking on it
        again text gets hidden.
      </p>
      {/* Here in this example, I am going to pass ref to a child component, which is not possible using the useRef hook, because in the useRef hook we can only store the reference of a dom element and not of any component. Here in this example, */}
      <div className="videoCont">
        <video
          src={useImperative1}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            In this example, when I am clicking on the child button then we see
            the text toggle appearing, and after clicking on the button again
            the text gets hidden.
          </p>
        </div>
      </div>
      <p className="Note">
        Note: Now I am going to implement the above example logic, but this time
        when I will click on the parent button then the toggle text must appear,
        and clicking on it again must hide the text. Now we want to access the
        text which is present in the child component since I can't apply the ref
        on any component, so this time I have to use the UseImperativeHandle
        hook to get our job done.
      </p>
      <div className="videoCont">
        <video
          src={useImperative2}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            In this example, I have used the UseImperativeHandle hook to
            implement the above example logic, we have to use the forwardRef to
            wrap the component over which we are using the ref attribute, now I
            can control the child component from the parent component because of
            UseImperativeHandle hook because it gives us the access to use
            method present in the child component.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseImperativeHandleHooks;

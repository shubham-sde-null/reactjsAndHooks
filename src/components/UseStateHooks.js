import React from "react";
import "./UseStateHooks.css";
import useState1 from "../assests/usestate1.mp4";
import useState2 from "../assests/usestate2.mp4";
function UseStateHooks() {
  return (
    <div className="useStateHooks">
      <h2 id="useState">UseState() Hook</h2>
      <p>
        The useState() is a Hook that allows you to have state variables in
        functional components . so basically useState is the ability to
        encapsulate local state in a functional component.
      </p>
      <p>
        <span
          style={{ color: "#26de81", fontWeight: "500", fontSize: "1.1rem" }}
        >
          Syntax:
        </span>{" "}
        The first element is the initial state and the second one is a function
        that is used for updating the state.
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
        const [state, setState] = useState(initialstate)
      </p>
      <div className="videoCont">
        <video
          src={useState1}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here in this example, I have used the useState hook to make a small
            counter application, as I click on the increment button, the counter
            value increases, and on clicking the decrement button counter value
            decreases.
          </p>
        </div>
      </div>
      <p className="Note">
        Note:Whenever the state gets changed in react, the page gets rendered
        again, demo is shown below.
      </p>
      <div className="videoCont">
        <video
          src={useState2}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here you can see whenever I am, clicking on the increment or
            decrement button state gets changed, and the page gets rendered
            again, which can be seen on the console.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseStateHooks;

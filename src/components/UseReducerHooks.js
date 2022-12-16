import React from "react";
import "./UseReducerHooks.css";
import useReducer1 from "../assests/usereducer1.mp4";
import useReducer2 from "../assests/usereducer2.mp4";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
function UseReducerHooks() {
  return (
    <div className="useReducerHooks">
      {" "}
      <h2 id="useReducer">UseReducer() Hook</h2>
      <p>
        useReducer() is a method from the React Hooks API, similar to useState
        but gives you more control to manage the state. It takes a reducer
        function and initial state as arguments and returns the state and
        dispatch method.
      </p>
      <p>
        <span
          style={{ color: "#26de81", fontWeight: "500", fontSize: "1.1rem" }}
        >
          Syntax:
        </span>{" "}
        The useReducer Hook accepts two arguments.
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
        useReducer(reducer function, initialState)
      </p>
      <Accordion id="accContainer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f39c12" }} />}
        >
          <Typography className="accordionTitle">
            How useState and useReducer are similar, and when to use what?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion">
            Both useState and useReducer, are used to manage the states when
            there are many states present in the component, handling them using
            the useState() hook is very confusing and tedious when clicking on
            one event affecting many states present in the component. To manage
            such changing states we use the useReducer hook. It takes two
            arguments first is the reducer function, and the other is the
            initial state.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion id="accContainer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f39c12" }} />}
        >
          <Typography className="accordionTitle">
            When to use useReducer hook and when to use redux for state
            management?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion">
            {" "}
            Both useReducer and redux are used for state management, but both of
            them are used for a specific purpose.
            <br />
            useReducer is used to manage the state within the same component,
            it's mostly used in simple projects.
            <br />
            redux is used when we want to manage the state globally, i.e. when
            we want to manage the state of all components, it's mostly used in
            complex projects.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <p className="example">
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
      </p>
      <div className="videoCont">
        <video
          src={useReducer1}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here in this example, I have used the useState hook to implement our
            logic, when I am clicking on the button then two methods are called
            setCount and SetShowText, and both of them are changing the states
            respectively.
          </p>
        </div>
      </div>
      <p className="Note">
        Note:Expample shown below is implemented using useReducer hook
      </p>
      <div className="videoCont">
        <video
          src={useReducer2}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here in this example, I have used the useReducer hook useReducer
            hook takes two arguments first is the reducer function, and the
            other is the initial state. Whenever we want to update some state,
            we call the reducer function using the dispatch method, it takes the
            type of actions to be performed to change the states, and thus we
            get the desired results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseReducerHooks;

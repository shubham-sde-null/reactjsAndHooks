import React from "react";
import "./UseEffectHooks.css";
import useEffect1 from "../assests/useeffect1.mp4";
import useEffect2 from "../assests/useeffect2.mp4";
import useEffect3 from "../assests/useeffect3.mp4";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
function UseEffectHooks() {
  return (
    <div className="useEffectHooks">
      {" "}
      <h2 id="useEffect">UseEffect() Hook</h2>
      <p>
        The useEffect() Hook allows you to perform side effects in your
        components.
        <br />
        Some examples of side effects are: fetching data, directly updating the
        DOM, and timers.
      </p>
      <p>
        <span className="syntax">Syntax:</span> useEffect accepts two arguments.
        The first argument is a function and the second argument is a dependency
        array which is optional.
      </p>
      <p className="syntaxFormat">useEffect(function, [])</p>
      <Accordion id="accContainer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f39c12" }} />}
        >
          <Typography className="accordionTitle">
            Why is it called useEffect?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion">
            <span
              style={{
                fontWeight: "bold",
                // border: "1px solid red",
                marginBottom: "15px",
              }}
            >
              {" "}
              What exactly is an "effect"?
            </span>
            <br />
            The word effect refers to a functional programming term called a
            "side effect".
            <br />
            But to really understand what a side effect is, we first have to
            grasp the concept of a pure function.
            <br />
            Most React components are pure functions, meaning they receive an
            input and produce a predictable output of JSX.
            <br />
            Pure functions have the great benefit of being predictable,
            reliable, and easy to test.
            <br />
            This is as compared to when we need to perform a side effect in our
            component.
            <br />
            <span style={{ fontWeight: "bold", marginBottom: "15px" }}>
              {" "}
              What are side effects in React?
            </span>
            <br />
            Side effects are not predictable because they are actions which are
            performed with the "outside world."
            <br />
            We perform a side effect when we need to reach outside of our React
            components to do something. Performing a side effect, however, will
            not give us a predictable result.
            <br />
            Think about if we were to request data (like blog posts) from a
            server that has failed and instead of our post data, gives us a 500
            status code response.
            <br />
            Virtually all applications rely on side effects to work in one way
            or another, aside from the simplest applications.
            <br />
            Common side effects include:
            <br /> *&nbsp;Making a request to an API for data from a backend
            server.
            <br />
            *To interact with browser APIs (that is, to use document or window
            directly).
            <br />
            *Using unpredictable timing functions like setTimeout or setInterval
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion id="accContainer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f39c12" }} />}
        >
          <Typography className="accordionTitle">
            What is the use of dependency array in useEffect hook?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion">
            {" "}
            UseEffect hook always renders on the first mount means at least one
            time it's going to run.
            <br />
            If you do not provide the dependencies array at all and only provide
            a function to useEffect, it will run after every render.
            <br />
            This can lead to problems when you're attempting to update state
            within your useEffect hook.
            <br />
            So, if we add an empty array as a second argument then our useEffect
            is going to run only once during the initial render&nbsp;
            useEffect(function,[&nbsp;])
            <br />
            We can also make our useEffect hook to run when some props or state
            is changed, for this we have to put the props and states in
            dependency array.&nbsp; useEffect(function,[prop,state])
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* cleanup funttion start  */}
      <Accordion id="accContainer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f39c12" }} />}
        >
          <Typography className="accordionTitle">
            What is the cleanup function and why we need them?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion">
            The final part of performing side effects properly in React is the
            effect cleanup function.
            <br />
            Some effects require cleanup to reduce memory leaks.
            <br />
            Timeouts, subscriptions, event listeners, and other effects that are
            no longer needed should be disposed.
            <br />
            We do this by including a return function at the end of the
            useEffect Hook
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* cleanup function end  */}
      <div className="videoCont">
        <video
          src={useEffect1}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here in this example, I have used the useEffect hook without any
            dependency array to count how many times, the counter is running.
            Inside useEffect hook, I have used the SetTimeout function, which
            will run after 1 second.
            <br />
            What do we expect from our function?
            <br /> The counter value must be 1, but it keeps increasing because
            useEffect hooks run whenever the page gets rendered, and the page is
            getting rendered because the state is changing i.e. count.
          </p>
        </div>
      </div>
      <p className="Note">
        Note:Dependency array is used in the below example to run useEffect on
        only once during initial render.
      </p>
      <div className="videoCont">
        <video
          src={useEffect2}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here you can see the counter is only changing once i.e. on the
            initial render, because of an empty dependency array passes as a
            second argunment in useEffect hook.
          </p>
        </div>
      </div>
      <p className="Note">
        Note:State is used in the dependency array to run useEffect after the
        state is changed.
      </p>
      <div className="videoCont">
        <video
          src={useEffect3}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here in this example, I have used a plus button. as I click on plus
            button it will run the setCount function, which will change the
            value of count, and as the count gets changed, our useEffect will
            run again because the dependency array of useEffect is dependent on
            count.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseEffectHooks;

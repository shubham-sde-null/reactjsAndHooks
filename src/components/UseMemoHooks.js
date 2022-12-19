import React from "react";
import "./UseMemoHooks.css";
import useMemo1 from "../assests/usememo1.mp4";
import useMemo2 from "../assests/usememo2.mp4";
function UseMemoHooks() {
  return (
    <div className="useMemoHooks">
      {" "}
      <h2 id="useMemo">UseMemo() Hook</h2>
      <p>
        The useMemo() is a hook used in the functional component of react that
        returns a memoized value.
        <br />
        The two main purpose of the memo hook are:
        <br />
        1)Make Performance better of application.
        <br />
        2)Referential Equality.
      </p>
      <p>
        <span className="syntax">Syntax:</span> The useMemo hook takes two
        argumment first is the function and the second is dependency array,
        since useMemo returns some memorized value we can store that in some
        variable.
      </p>
      <p className="syntaxFormat">
        const memorizedVal=useMemo(function, dependency array)
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
        Here I am going to show an example, where you will see how a particular
        function can take so much time to execute and hinders the overall
        performance and there is a toggle button which is changing the
        background color on click of a button.
      </p>
      <div className="videoCont">
        <video
          src={useMemo1}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here in this example, we are making a function called slow function,
            which takes an input, and returns double of number. Inside the slow
            function, we have used a for loop which will take some time to
            execute, and once the for loop gets executed then only the slow
            function returns the value.
            <br />
            <span style={{ fontWeight: "bold" }}>
              {" "}
              What we expect from our code?
            </span>
            <br />
            When we will enter a number in the input field we will get the
            double of number after some milliseconds which is expected, but when
            we will click on the button to change the background it's also
            taking some time which is not expected.
            <br /> what is the reason behind this? <br />
            when we are clicking on the button then the state is changing, which
            in turn renders the whole page, which in turn runs the slow function
            again which is causing the delay.
          </p>
        </div>
      </div>
      <p className="Note">
        Note:Example shown below uses useMemo hook to make performance better.
      </p>
      <div className="videoCont">
        <video
          src={useMemo2}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here in this example, I have used the useMemo hook to store the
            return value, now it will take some time for doubling the input
            number, but when we change the background it will happen quickly,
            earlier when we were not using the useMemo hook at that time there
            was some delay in changing the background.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseMemoHooks;

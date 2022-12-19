import React from "react";
import "./UseCallbackHooks.css";
import useCallback1 from "../assests/usecallback1.mp4";
import useCallback2 from "../assests/usecallback2.mp4";

function UseCallbackHooks() {
  return (
    <div className="useCallbackHooks">
      {" "}
      <h2 id="useCallback">UseCallback() Hook</h2>
      <p>
        The React useCallback Hook returns a memoized callback function.
        <br />
        The useCallback Hook only runs when one of its dependencies update.
        <br />
        useCallback() and useMemo() hooks both look the same, but there is a big
        the difference, in useMemo we get the memorized value in return while in
        the case of useCallback whatever function written inside the hook is
        memorized and returned, we can use this memorized function anywhere.
      </p>
      <p>
        <span className="syntax">Syntax:</span> The useCallback hook takes two
        arguments first is the function and the second is the dependency array,
        since useCallback returns some memorized function we can store that
        function in some variable and can use it wherever we want.
      </p>
      <p className="syntaxFormat">
        const memorizedFun=useCallback(function, dependency array)
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
        Here I am going to show an example where we will see why there is a need
        of using the useCallback hook. In this example, I am going to pass a
        function in another component and using this function we are making a
        list of three numbers we are also printing something on the console to
        see how the passed function is behaving.
      </p>
      <div className="videoCont">
        <video
          src={useCallback1}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here in this example, we are passing a function called getItems in
            our Item component, where it is printing the list of items, we are
            also printing "updating items" in the console to see when our
            useEffect is running because the useEffect used in the Item
            component is dependent on getItems which is passed through the
            useCallbackHooks component. Now our expectation is whenever there is
            a change in the input field our getItems must change, and that is
            happening we can see that in the console by getting the print
            statement "updating items", there is no issue in that, but when we
            are clicking on the change theme button then also the useEffect is
            running, why was that happening, so the reason behind this is
            referential equality, whenever we are clicking on the change theme
            button then our whole page gets re-rendered and thus making a new
            instance of the getItem function, and we know that useEffect runs at
            least once during the initial render so that's the reason why we are
            getting the output in the console when we are clicking on change
            theme button.
          </p>
        </div>
      </div>
      <p className="Note">
        Note: Now I am going to use the useCallback hook to store the memorized
        function and avoid the creation of a new function after every render.
      </p>
      <div className="videoCont">
        <video
          src={useCallback2}
          width="530px"
          height="300px"
          controls
          className="videoPlayer"
        ></video>
        <div className="desc">
          <p>
            Here in this example, I have used the useCallback hook to store the
            function since the useCallback hook helps in maintaining the same
            reference until its values in the dependency array are changed. So
            now even if I click on the change theme button my useEffect hook is
            not going to run in the Item component, which in turn does not print
            "updating values" in the console.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseCallbackHooks;

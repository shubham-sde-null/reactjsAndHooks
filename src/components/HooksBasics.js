import React from "react";
import "./HooksBasics.css";
function HooksBasics() {
  return (
    <div className="hooksBasics">
      <h1>What are react hooks?</h1>
      <p>
        <span className="design">*&nbsp;</span>
        Hooks are the new feature introduced in the React 16.8 version. It
        allows you to use state and other React features without writing a
        class. Hooks are the functions which "hook into" React state and
        lifecycle features from function components. It does not work inside
        classes.
      </p>
      <p>
        <span className="design">*&nbsp;</span>
        Hooks are backward-compatible, which means it does not contain any
        breaking changes. Also, it does not replace your knowledge of React
        concepts.
      </p>
      <h2>When to use a Hooks</h2>
      <p>
        <span className="design">*&nbsp;</span>If you write a function
        component, and then you want to add some state to it, previously you do
        this by converting it to a class. But, now you can do it by using a Hook
        inside the existing function component.
      </p>
      <h2>Rules of Hooks</h2>

      <p>
        <span className="design">*&nbsp;</span>Hooks can only be called inside
        React function components.
      </p>

      <p>
        <span className="design">*&nbsp;</span>Hooks can only be called at the
        top level of a component.
      </p>

      <p style={{ alignSelf: "flex-start" }}>
        <span className="design">*&nbsp;</span>Hooks cannot be conditional
      </p>
      <h2>Most Commonly Used React Hooks Are:</h2>

      <h3>
        {" "}
        <a href="#useState">1)UseState</a>
      </h3>
      <h3>
        {" "}
        <a href="#useEffect">2)UseEffect</a>
      </h3>
      <h3>
        <a href="#useReducer">3)UseReducer</a>
      </h3>
      <h3>
        {" "}
        <a href="#useRef">4)UseRef</a>
      </h3>
      <h3>
        <a href="#useMemo">5)UseMemo</a>
      </h3>
      <h3>
        {" "}
        <a href="#useCallback">6)UseCallback</a>
      </h3>
      <h3>
        {" "}
        <a href="#useLayout">7)UseLayoutEffect</a>
      </h3>
      <h3>
        <a href="#useImperativeHandle">8)UseImperativeHandle</a>
      </h3>
    </div>
  );
}

export default HooksBasics;

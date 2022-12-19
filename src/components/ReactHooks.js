import React from "react";
import "./ReactHooks.css";
import HooksBasics from "./HooksBasics";
import UseStateHooks from "./UseStateHooks";
import UseEffectHooks from "./UseEffectHooks";
import UseReducerHooks from "./UseReducerHooks";
import UseRefHooks from "./UseRefHooks";
import UseMemoHooks from "./UseMemoHooks";
import UseCallbackHooks from "./UseCallbackHooks";
import UseLayoutHooks from "./UseLayoutHooks";
import UseImperativeHandleHooks from "./UseImperativeHandleHooks";
function ReactHooks() {
  return (
    <section id="reactHooks">
      <div className="container reactHooks">
        <HooksBasics />
        <UseStateHooks />
        <UseEffectHooks />
        <UseReducerHooks />
        <UseRefHooks />
        <UseMemoHooks />
        <UseCallbackHooks />
        <UseLayoutHooks />
        <UseImperativeHandleHooks />
      </div>
    </section>
  );
}

export default ReactHooks;

import React from "react";
import "./ReactHooks.css";
import HooksBasics from "./HooksBasics";
import UseStateHooks from "./UseStateHooks";
import UseEffectHooks from "./UseEffectHooks";
import UseReducerHooks from "./UseReducerHooks";
import UseRefHooks from "./UseRefHooks";
function ReactHooks() {
  return (
    <section id="reactHooks">
      <div className="container reactHooks">
        <HooksBasics />
        <UseStateHooks />
        <UseEffectHooks />
        <UseReducerHooks />
        <UseRefHooks />
      </div>
    </section>
  );
}

export default ReactHooks;

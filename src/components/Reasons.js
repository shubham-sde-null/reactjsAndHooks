import React from "react";
import "./Reasons.css";
// import reasons from "./../context/CompleteData";
function Reasons({ reasons }) {
  //   console.log(reasons[0]);
  //   console.log("the datais:", reasons.heading);
  return (
    <div className="one">
      {reasons.heading ? <h3>{reasons.heading}</h3> : ""}

      <p>
        {reasons.p1 ? <span className="design">*&nbsp;</span> : ""}
        {reasons.p1 ? reasons.p1 : ""}
        <br />
        {reasons.p2 ? <span className="design">*&nbsp;</span> : ""}{" "}
        {reasons.p2 ? reasons.p2 : ""}
        <br />
        {reasons.p3 ? <span className="design">*&nbsp;</span> : ""}{" "}
        {reasons.p3 ? reasons.p3 : ""}
        <br />
        {reasons.p4 ? <span className="design">*&nbsp;</span> : ""}{" "}
        {reasons.p4 ? reasons.p4 : ""}
        <br />
        {reasons.p5 ? <span className="design">*&nbsp;</span> : ""}{" "}
        {reasons.p5 ? reasons.p5 : ""}
      </p>
    </div>
  );
}

export default Reasons;

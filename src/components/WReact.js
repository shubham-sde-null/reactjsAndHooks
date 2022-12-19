import React from "react";
import "./WReact.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { BiRightArrowCircle } from "react-icons/bi";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
function WReact() {
  return (
    <section id="whatIsReact">
      <div className="container whyReact">
        <h1>What is React JS?</h1>
        <p>
          React JS is a{" "}
          <span style={{ color: "#f39c12", fontWeight: "500" }}>
            JavaScript
          </span>
          &nbsp;
          <span style={{ color: "#ff3838", fontWeight: "500" }}>
            library
          </span>{" "}
          used in web development to build interactive elements on websites.
        </p>
        <Accordion id="accContainer" defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#f39c12" }} />}
          >
            <Typography className="accordionTitle">
              What is Javascript?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion">
              JavaScript is a super important coding language used to add
              animated and interactive features to websites or web applications
              (on top of the basic, static structures created by languages like
              HTML and CSS).
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="accContainer">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ff3838" }} />}
          >
            <Typography className="accordionTitle">What is Library?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion">
              From the definition above, you can see how JavaScript plays a
              critical role in website and web application development. But
              there are times when you need JavaScript to perform repetitive
              functions—things like stock animation effects or autocomplete
              search bar features.{" "}
            </Typography>
            <Typography className="accordion">
              Re-coding these functions every time they occur becomes a
              “reinventing the wheel” situation. Annnnoying. This is where
              JavaScript libraries come in.
            </Typography>
            <Typography className="accordion">
              JavaScript libraries are collections of pre-written JavaScript
              code that can be used for common JS tasks, allowing you to bypass
              the time intensive (and unnecessary) process of coding by hand.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

export default WReact;

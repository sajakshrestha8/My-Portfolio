import Skills from "./Skills";
import HTML from "../html.png";
import CSS from "../css.png";
import JS from "../js.png";
import React from "../react.png";
import Java from "../java.png";
import C from "../C.png";
import SQL from "../sql.png";

function About() {
  return (
    <>
      <h1>My skills</h1>
      <div className="skills-wrapper">
        <Skills logo={HTML} css={"html"} name={"Html"} />
        <Skills logo={CSS} css={"css"} name={"CSS"} />
        <Skills logo={JS} css={"js"} name={"Javascript"} />
        <Skills logo={React} css={"react"} name={"React"} />
        <Skills logo={Java} css={"java"} name={"Java"} />
        <Skills logo={C} css={"c"} name={"C"} />
        <Skills logo={SQL} css={"sql"} name={"My-sql"} />
      </div>
    </>
  );
}

export default About;

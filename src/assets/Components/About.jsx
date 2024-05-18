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
      <label className="skills-heading">My skills</label>
      <div className="skills-wrapper">
        <Skills
          logo={HTML}
          name={"Html"}
          syntax={"<h3>"}
          info={
            "I have leard HTML and I use it for strcture development of the frontend"
          }
          infocss={"html-info"}
          close={"</h3>"}
        />
        <Skills
          logo={CSS}
          css={"css"}
          name={"CSS"}
          syntax={".say{"}
          info={"I use Css for the designing of the HTML"}
          infocss={"html-info"}
          close={"}"}
        />
        <Skills
          logo={JS}
          css={"js"}
          name={"Javascript"}
          syntax={"console.log"}
          info={
            "('Javascript is another language that I uses for the functioning of the frontend');"
          }
          infocss={"html-info"}
        />
        <Skills
          logo={React}
          css={"react"}
          name={"React"}
          syntax={"return<>"}
          info={"I have learned react"}
          infocss={"html-info"}
          close={"</>"}
        />
        <Skills
          logo={Java}
          css={"java"}
          name={"Java"}
          syntax={"system.out.println"}
          info={
            "('I have learned java in college as a subject and done a project on it too using springboot framework');"
          }
          infocss={"html-info"}
        />
        <Skills
          logo={C}
          css={"c"}
          name={"C  programming"}
          syntax={"printf"}
          info={"('C is the 1st programming language that I have learned.');"}
          infocss={"html-info"}
        />
        <Skills
          logo={SQL}
          css={"sql"}
          name={"My-sql"}
          info={"My Sql is the database I have been using till now"}
          infocss={"html-info"}
        />
      </div>
    </>
  );
}

export default About;

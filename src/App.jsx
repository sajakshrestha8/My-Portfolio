import "./CSS/index.css";
import About from "./assets/Components/About";
import Info from "./assets/Components/Info";
import Myprojects from "./assets/Components/Myprojects";
import Work from "./assets/Components/Work";
import Project1 from "./assets/project-1.png";
import Project2 from "./assets/project-2.png";
import Project3 from "./assets/project-3.png";
import Project4 from "./assets/project-4.png";
import Project5 from "./assets/project-5.png";

function App() {
  return (
    <>
      <Info />
      <section className="about-section">
        <About />
      </section>
      <section className="work-section">
        <Work />
      </section>
      <section className="works-wrapper">
        <Myprojects
          img={Project1}
          name={"Twitter Clone"}
          link={
            <a href="https://sajak-twitterclone.netlify.app/" className="link">
              --{">"} View my project
            </a>
          }
        />

        <Myprojects
          img={Project2}
          name={"Redcross Website"}
          link={
            <a
              href="http://localhost/bloodbankfront/index.php"
              className="link"
            >
              --{">"} View my project
            </a>
          }
        />

        <Myprojects
          img={Project3}
          name={"To-Do-List"}
          link={
            <a href="https://sajak-to-do-list.netlify.app/" className="link">
              --{">"} View my project
            </a>
          }
        />

        <Myprojects
          img={Project4}
          name={"Timer"}
          link={
            <a href="https://sajak-to-do-list.netlify.app/" className="link">
              --{">"} View my project
            </a>
          }
        />

        <Myprojects
          img={Project5}
          name={"Calculator"}
          link={
            <a href="https://sajak-calculator.netlify.app" className="link">
              --{">"} View my project
            </a>
          }
        />
      </section>
    </>
  );
}

export default App;

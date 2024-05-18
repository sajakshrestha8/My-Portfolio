import "./CSS/index.css";
import About from "./assets/Components/About";
import Info from "./assets/Components/Info";
import Myprojects from "./assets/Components/Myprojects";
import Work from "./assets/Components/Work";
import Project1 from "./assets/project-1.png";

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
      <section className="works">
        <Myprojects
          img={Project1}
          name={"Twitter Clone"}
          link={
            <a href="https://sajak-twitterclone.netlify.app/" className="link">
              --{">"} View my project
            </a>
          }
        />
      </section>
    </>
  );
}

export default App;

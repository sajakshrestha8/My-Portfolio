import "./CSS/index.css";
import About from "./assets/Components/About";
import Info from "./assets/Components/Info";

function App() {
  return (
    <>
      <Info />
      <section className="about-section">
        <About />
      </section>
    </>
  );
}

export default App;

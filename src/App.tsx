import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="experience">
        <Timeline />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;

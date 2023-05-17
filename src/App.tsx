import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Banner />
			<About />
			<Skills />
			<Portfolio />
			<Timeline />
			<Footer />
		</div>
	);
}

export default App;

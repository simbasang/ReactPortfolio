import "../Styles/Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
	return (
		<>
			<nav className="navbar-container background-color-2">
				<img src={logo} alt="logo" className="logo" />
				<div className="menu">
					<a href="">About</a>
					<a href="">Portfolio</a>
					<a href="">Contact</a>
				</div>
				<h1></h1>
			</nav>
		</>
	);
}

export default Navbar;

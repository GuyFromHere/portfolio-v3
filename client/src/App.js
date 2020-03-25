import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<Router>     
			<Header />
			<NavBar />
			<Route exact path={["/", "/about"]} component={About} />
			<Route exact path="/portfolio" component={Portfolio} />
			<Route exact path="/contact" component={Contact} />
			<Footer />
		</Router>
	);
}

export default App;

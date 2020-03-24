import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
	return (
		<Router>     
      <div className="header">
			  <h1>Dan Dismuke</h1>
		  </div> 
			<NavBar />
			<Route exact path={["/", "/about"]} component={About} />
			<Route exact path="/portfolio" component={Portfolio} />
			<Route exact path="/contact" component={Contact} />
		</Router>
	);
}

export default App;

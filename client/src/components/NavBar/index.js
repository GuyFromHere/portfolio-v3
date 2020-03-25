import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
	return (
		<div className="nav">
			<div className="col-3 menu">
				<ul>
					<Link
						to="/about"
						className={
							window.location.pathname === "/home" ? "nav-link active" : "nav-link"
						}
					>
						<li>About Me</li>
					</Link>
					<Link
						to="/portfolio"
						className={
							window.location.pathname === "/portfolio"
								? "nav-link active"
								: "nav-link"
						}
					>
						<li>Portfolio</li>
					</Link>
					<Link
						to="/contact"
						className={
							window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
						}
					>
						<li>Contact</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
	return (
		<div className="nav">
			<div className="col-3 menu">
				<ul>
					<li>
						<Link
							to="/about"
							className={
								window.location.pathname === "/home" ? "nav-link active" : "nav-link"
							}
						>
							About Me
						</Link>
					</li>
					<li>
						<Link
							to="/portfolio"
							className={
								window.location.pathname === "/portfolio"
									? "nav-link active"
									: "nav-link"
							}
						>
							Portfolio
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className={
								window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
							}
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;

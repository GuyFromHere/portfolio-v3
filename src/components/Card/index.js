import React from "react";

/* function showLinks(elId) {
	const target = document.getElementById(elId);
	if (target.style.display === "block") {
		target.style.display = "none";
	} else {
		target.style.display = "block";
	}
} */

function Card(props) {
	return (
		<div className="portfolio">
			<img src={require("../../images/" + props.img)} className="cardImg" alt={props.title}></img>
			<div className="portfolioCard" /* onClick={showLinks(props.id)} */>
				{props.header}
				<div id={props.id} className="links">
					<a href={props.url} target="_blank" rel="noopener noreferrer">
						Check it out!
					</a>
					&nbsp;|&nbsp;
					<a href={props.repo} target="_blank" rel="noopener noreferrer">
						Git Hub
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;

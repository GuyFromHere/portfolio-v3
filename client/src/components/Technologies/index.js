import React from "react";
import "./style.css";

function Technologies(props) {
	return (
		<div className="tech">
			{/* {props.technologies.map((item) => {
				return item + ", ";
			})} */}
			{props.technologies ? props.technologies.join(", ") : null}
		</div>
	);
}

export default Technologies;

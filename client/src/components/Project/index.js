import React, { Component } from "react";
import CardLinks from "../CardLinks";
import Technologies from "../Technologies";

class Project extends Component {
	constructor() {
		super();
		this.state = {
			showLinks: false,
		};
	}

	render(props) {
		return (
			<div className="portfolio">
				<img
					src={require("../../images/" + this.props.img)}
					className="cardImg"
					alt={this.props.title}
				></img>
				<div
					className="portfolioCard"
					onClick={() => this.setState({ showLinks: !this.state.showLinks })}
				>
					{this.props.header}
					{this.state.showLinks ? (
						<CardLinks id={this.props.id} url={this.props.url} repo={this.props.repo} />
					) : (
						<Technologies technologies={this.props.technologies} />
					)}
				</div>
			</div>
		);
	}
}

export default Project;

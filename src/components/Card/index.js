import React, { Component } from "react";
import CardLinks from '../CardLinks';

class Card extends Component {
	constructor() {
        super() 
        this.state = {
            showLinks: false
        }
	}

	render(props) {
		return (			
			<div className="portfolio">
				<img src={require("../../images/" + this.props.img)} className="cardImg" alt={this.props.title}></img>
				<div className="portfolioCard" onClick={() => this.setState({ showLinks: !this.state.showLinks })}>
					{this.props.header}
					{ this.state.showLinks ? <CardLinks 
												id={this.props.id}  
												url={this.props.url}
												repor={this.props.repo}
											/> : null }

				</div>
			</div>
		);
	}
	
}

export default Card;

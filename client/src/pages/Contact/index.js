import React, { Component } from "react";

class Contact extends Component {
	email = "dandismuke@gmail.com";
	github = "https://github.com/GuyFromHere";
	linkedin = "https://www.linkedin.com/in/dan-dismuke/";
	phone = "503-953-2152";
	resume = "https://drive.google.com/file/d/1AzAjm9VphO3lLvOKxXozg71cdiG0c8OK/view?usp=sharing";
	
	render() {
		return (
			<div id="content" className="col-8">
				<h1>Contact</h1>
				<div id="contact">
					<div className='email'>
						<h4>Email:</h4>
						{this.email}
					</div>
					<div className='phone'>
						<h4>Phone:</h4>
						{this.phone}
					</div>
					<div className='github'>
						<h4>GitHub:</h4>
						<a href={this.github} target='_blank' rel="noopener noreferrer">GuyFromHere</a>
					</div>
					<div className='linkedin'>
						<h4>LinkedIn:</h4>
						<a href={this.linkedin} target='_blank' rel="noopener noreferrer">LinkedIn</a>
					</div>
					<div className='resume'>
						<h4>Resume:</h4>
						<a href={this.resume} target='_blank' rel="noopener noreferrer">Download</a>
					</div>
				</div>	
			</div>
		);
	}
}

export default Contact;

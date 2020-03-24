import React, { Component } from "react";
import P from "../../components/P";

class About extends Component {
	aboutText = [
                `Hello! My name is Dan. I got in to tech as a career 14 years ago largely because I wanted to blend my 
                creative impulses with my love for logic and computers. I've worked in QA, tech support, and IT ever 
                since.`,
                `Over the last few years I've realized my passion for scripting, coding, and web development, which are only
                a small part of my job as a System Administrator.  I enrolled in the UO's Full Stack Web Development Bootcamp 
                with the goal of doing the kind of work I love the most all the time.`,
                `Outside of work I love video games, sports, and music. I live in Milwaukie, Oregon with my wife, two kids, and two dogs.`
        ]

        renderAboutText = (text) => {
                let aboutText = text.map((item, index) => {
                        return <P key={index} text={item} />
                })
                return aboutText;
        }

	render() {
		return (
			<div id="content" className="col-8">
				<h1>About Me</h1>
                                <img src={require("../../images/aboutme.jpg")} id="aboutImg" alt="Just ran a marathon and I feel terrible."></img>
				{this.renderAboutText(this.aboutText)}
			</div>
		);
	}
}

export default About;

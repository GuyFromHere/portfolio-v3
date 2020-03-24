import React, { Component } from "react";
import P from "../../components/P";

class About extends Component {
	aboutText = [
                `Hello! I am from the Bay Area originally but I have 
                spent most of my life along the I5 corridor in Oregon. I grew up 
                playing video games with my brother and I have had a lifelong fascination
                with technology. I got in to tech as a career 14 years ago largely because I wanted to blend my 
                creative impulses with my love for logic and computers. I've worked in QA, tech
                support, and IT ever since. Last year I  decided it was time to pursue my dream and enrolled in 
                the UO's Full Stack Web Development Bootcamp.`,
                `Outside of work I still love video games and music but I don't have much time
                for them these days. I live in Milwaukie, Oregon with my wife, two kids, and two dogs.`
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

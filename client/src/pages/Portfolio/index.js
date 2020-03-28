import React, { Component } from "react";
import Project from "../../components/Project";

class Portfolio extends Component {
	projects = [
		{
			id: 1,
			url: "https://adamwheeler81.github.io/project1/",
			title:
				"Project one for Bootcamp. A gluten-free recipe searcher using th Spoonacular API.",
			img: "gluten.png",
			header: "Gluten-Tootin",
			repo: "https://github.com/adamwheeler81/project1/"
		},
		{
			id: 2,
			url: "https://unit15project2.herokuapp.com/",
			title:
				"Project two for Bootcamp. A full featured new app using MySql, Node, Passport, Handlebars, and the NewsApi API.",
			img: "tickr.png",
			header: "Tickr",
			repo: "https://github.com/adamwheeler81/project2/"
		},
		{
			id: 3,
			url: "https://guyfromhere.github.io/weather-dash",
			title:
				"Weather dashboard. Uses AJAX and the OpenWeather API to get current weather information by city name.",
			img: "weather.png",
			header: "Weather Dashboard",
			repo: "https://github.com/GuyFromHere/weather-dash/"
		},
		{
			id: 4,
			url: "https://guyfromhere.github.io/day-planner/",
			title: "Day planner app.",
			img: "planner.png",
			header: "Day Planner",
			repo: "https://github.com/GuyFromHere/day-planner/"
		},
		{
			id: 5,
			url: "https://guyfromhere.github.io/",
			title: "Minesweeper game built in vanilla javascript and HTML.",
			img: "minesweeper.png",
			header: "Minesweeper",
			repo: "https://github.com/GuyFromHere/minesweeper/"
		},
		{
			id: 6,
			url: "https://guyfromhere.github.io/fart-button/",
			title: "A simple app I built with my son as a learning exercise.",
			img: "fart.png",
			header: "Fart Button",
			repo: "https://github.com/GuyFromHere/fart-button/"
		},
		{
			id: 7,
			url: "https://guyfromhere.github.io/ZedSaid/",
			title: "An app to track my daughter's ridiculous insults.",
			img: "zed.png",
			header: "Zed Said",
			repo: "https://github.com/GuyFromHere/zedsaid/"
		},
		{
			id: 8,
			url: "https://still-coast-92855.herokuapp.com/",
			title: "A simple note taking app.",
			img: "notes.png",
			header: "Notes",
			repo: "https://github.com/GuyFromHere/Notes"
		},
		{
			id: 9,
			url: "https://agile-brushlands-67640.herokuapp.com/",
			title: "A small app demonstrating MVC principles.",
			img: "burger.png",
			header: "Burger",
			repo: "https://github.com/GuyFromHere/burger"
		},
		{
			id: 10,
			url: "https://arcane-everglades-43040.herokuapp.com/",
			title: "Google books api searcher with Mongo backend",
			img: "books.png",
			header: "Book-Search",
			repo: "https://github.com/GuyFromHere/book-search"
		}
	];

	getPortfolio = () => {
		const projectCards = this.projects.map(item => {
			return (
				<Project
					id={item.id}
					img={item.img}
					title={item.title}
					header={item.header}
					url={item.url}
					repo={item.repo}
				/>
			);
		});
		return projectCards;
	};

	render() {
		return (
			<div id="content" className="col-8">
				<h1>Portfolio</h1>
				<div id="portfolio">{this.getPortfolio()}</div>
			</div>
		);
	}
}

export default Portfolio;

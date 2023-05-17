import ProjectCard from "./ProjectCard";
import discordPicture from "../assets/project-pictures/p1.jpg";
import scraperPicture from "../assets/project-pictures/p2.jpg";
import dndApiPicture from "../assets/project-pictures/p3.jpg";
import "../Styles/Portfolio.css";
function Portfolio() {
	let projects = [
		{
			url: discordPicture,
			name: "DiscordBot",
			description: "A cool discord bot making quiz and serv funny pictures.",
		},
		{
			url: scraperPicture,
			name: "Webscraper",
			description: "A webscraper for getting recepies from koket.se.",
		},
		{
			url: dndApiPicture,
			name: "DND API",
			description:
				"This is a Dnd inspired rpg api that have a discordbot for making calls to it.",
		},
	];

	let projectCards = projects.map(project => (
		<ProjectCard
			url={project.url}
			name={project.name}
			description={project.description}
		/>
	));

	return (
		<>
			<div className="container center relative ">
				<h1 className="headline">Portfolio</h1>
				<div className="flex-row center">{projectCards}</div>

				<button className="filled-button portfolio-button"> view more </button>
			</div>
		</>
	);
}

export default Portfolio;

import "../Styles/ProjectCard.css";

interface Props {
	url: string;
	name: string;
	description: string;
}

function ProjectCard(props: Props) {
	return (
		<>
			<div
				className="center column project-card"
				style={{
					backgroundImage: "url(" + props.url + ")",
				}}>
				<h2>{props.name}</h2>
				<p>{props.description}</p>
				<button className="filled-button"> See more</button>
			</div>
		</>
	);
}

export default ProjectCard;

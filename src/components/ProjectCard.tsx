import "../Styles/ProjectCard.css";

interface Props {
  url: string;
  name: string;
  description: string;
}

function ProjectCard(props: Props) {
  return (
    <>
      <div className="project-card">
        <div className="project-card-inner">
          <div
            className="project-card-front flip-card-front"
            style={{
              backgroundImage: "url(" + props.url + ")",
            }}
          >
            <h2 className="title">{props.name}</h2>
          </div>
          <div className="flip-card-back">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;

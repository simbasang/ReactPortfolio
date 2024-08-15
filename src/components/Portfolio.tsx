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
      description:
        "A Discord bot made for having fun with your friends. It features quizzes, serves funny pictures, and includes a timer for AFK.",
    },
    {
      url: scraperPicture,
      name: "Webscraper",
      description:
        "A web scraper for getting recipes from a famous recipe website.",
    },
    {
      url: dndApiPicture,
      name: "DND API",
      description:
        "A fun API for the roleplaying night. It helps you build your character, roll dice, and much more.",
    },
  ];

  let projectCards = projects.map((project) => (
    <ProjectCard
      url={project.url}
      name={project.name}
      description={project.description}
    />
  ));
  const handleButtonClick = () => {
    window.open("https://github.com/simbasang", "_blank");
  };

  return (
    <>
      <div className="container">
        <h1 className="headline ">Portfolio</h1>
        <div className=" portfolio-container center">
          <div className=" container wrap">{projectCards}</div>
          <button
            className="main-button portfolio-button"
            onClick={handleButtonClick}
          >
            view more
          </button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;

import ProjectCard from "./ProjectCard";
import discordPicture from "../assets/project-pictures/p1.jpg";
import scraperPicture from "../assets/project-pictures/p2.jpg";
import dndApiPicture from "../assets/project-pictures/p3.jpg";
import adventOfCodePicture from "../assets/project-pictures/p4.jpg";
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
    // {
    //   url: adventOfCodePicture,
    //   name: "Advent of code",
    //   description: "One programing problem each day for december.",
    // },
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

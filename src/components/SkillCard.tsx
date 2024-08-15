import "../Styles/SkillCard.css";
import dotnetLogo from "../assets/skills/netcore.png";
import csharp from "../assets/skills/c-sharp.png";
import git from "../assets/skills/git.png";
import sql from "../assets/skills/sql.png";
import postgress from "../assets/skills/postgre.png";
import javascript from "../assets/skills/js.png";
import typescript from "../assets/skills/typescript.png";
import nextjs from "../assets/skills/nextjs.png";
import react from "../assets/skills/react.png";

function SkillCard() {
  let skills = [
    { url: dotnetLogo, text: ".NET" },
    { url: git, text: "Git" },
    { url: csharp, text: "c#" },
    { url: postgress, text: "Postgres" },
    { url: sql, text: "Sql" },
    { url: javascript, text: "Javascript" },
    { url: nextjs, text: "NextJS" },
    { url: react, text: "React" },
    { url: typescript, text: "Typescript" },
  ];

  let cards = skills.map((skill) => (
    <div className="center skill-card ">
      <img className="card-logo" src={skill.url} alt="" />
      <h4>{skill.text}</h4>
    </div>
  ));
  return (
    <>
      <div className="skill-container">
        <div className="center wrap">{cards}</div>
      </div>
    </>
  );
}

export default SkillCard;

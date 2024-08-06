import "../Styles/SkillCard.css";
import dotnetLogo from "../assets/dotnet.svg";
import gitLogo from "../assets/icons8-git-144.svg";
import csharpLogo from "../assets/icons8-c-sharp-logo-144.svg";
import javascriptLogo from "../assets/icons8-javascript.svg";
import htmlLogo from "../assets/icons8-html-5.svg";
import postgresqlLogo from "../assets/icons8-postgresql.svg";
import cssLogo from "../assets/icons8-css3.svg";
import dbLogo from "../assets/database-db-icon.svg";

function SkillCard() {
  let skills = [
    { url: dotnetLogo, text: ".NET" },
    { url: gitLogo, text: "Git" },
    { url: htmlLogo, text: "Html" },
    { url: cssLogo, text: "Css" },
    { url: postgresqlLogo, text: "Postgres" },
    { url: dbLogo, text: "Sql" },
    { url: javascriptLogo, text: "Javascript" },
    { url: csharpLogo, text: "c#" },
  ];

  let cards = skills.map((skill) => (
    <div className="center skill-card ">
      <img className="card-logo" src={skill.url} alt="" />
      <p>{skill.text}</p>
    </div>
  ));
  return (
    <>
      <div className="center wrap">{cards}</div>
    </>
  );
}

export default SkillCard;

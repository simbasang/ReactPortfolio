import SkillCard from "./SkillCard";
import "../Styles/Skills.css";

function Skills() {
  return (
    <>
      <div className="container">
        <h1 className="headline">My skills</h1>
        <div className="skills-container center ">
          <SkillCard />
        </div>
      </div>
    </>
  );
}

export default Skills;

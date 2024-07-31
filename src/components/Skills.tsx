import SkillCard from "./SkillCard";
import "../Styles/Skills.css";

function Skills() {
  return (
    <>
      <div className="skills-container center background-color-2">
        <div className="skills-inner-container center background-color-2">
          <h1 className="headline">My skills</h1>
          <SkillCard />
        </div>
      </div>
    </>
  );
}

export default Skills;

import SkillCard from "./SkillCard";
import "../Styles/Skills.css";

function Skills() {
  return (
    <>
      <div className="overflow-container">
        <h1 className="headline top ">Skills</h1>
      </div>
      <div className="skills-container center background-color-2">
        <div className="skills-inner-container center background-color-2">
          <SkillCard />
        </div>
      </div>
    </>
  );
}

export default Skills;

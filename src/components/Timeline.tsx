import TimelineEvent from "./TimelineEvent";

function Timeline() {
  return (
    <>
      <div className=" container ">
        <h1 className="headline  ">Experience</h1>

        <TimelineEvent
          year="2024"
          title="Software developer"
          underTitle="Recopart"
          text="At Recopart, I am involved in developing a large-scale system for vehicle demolition, 
          working with diverse technology stacks ranging from legacy ASP.NET to modern frameworks like Next.js. 
          In addition to my development role, I serve as the Scrum Master for our team, 
          facilitating agile practices and ensuring smooth and efficient project delivery.
           My focus is on leveraging the latest in cloud and containerization technologies, 
           including Azure and Docker, to drive continuous improvement in our development processes."
        />
        <TimelineEvent
          year="2023"
          title="Software developer"
          underTitle="Consid"
          text="During my time at Consid, I broadened my expertise through various courses, enhancing my skills in programming, Azure/Kubernetes,
           as well as soft skills such as leadership and effective Scrum practices. 
          I further honed my leadership abilities and project management skills, taking on a more strategic role in project execution and beginning my role as a Scrum Master."
        />
        <TimelineEvent
          year="2021"
          title="Software developer"
          underTitle="Knowe"
          text="Transitioning from an internship to a full-time position at Knowe, I took on significant responsibilities, managing client projects from conception to deployment.
           My work ranged from developing Vue.js websites to building and integrating C# APIs. Later on, I delved deeper and learned a lot more about integrations and integration platforms when I started using iCore."
        />

        <TimelineEvent
          year="2020"
          title="Internship"
          underTitle="Knowe"
          text="As an intern at Knowe, a consultancy specializing in .NET and system integrations, I contributed to key projects, 
          including the development of a solution for a major car parts company. This role allowed me to gain a deeper understanding of .NET and also provided hands-on experience with platforms like BizTalk and iCore.
		  "
        />
        <TimelineEvent
          year="2019"
          title="Started studying"
          underTitle="Fullstack development in .NET"
          text="I embarked on my journey into software development with comprehensive studies in fullstack development. 
          My education covered essential areas such as API architecture, Azure DevOps, CI/CD pipelines, and frontend development using Vue.js and React."
        />
      </div>
    </>
  );
}

export default Timeline;

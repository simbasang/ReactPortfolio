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
          text="Here at Recopart, we have a big system for demolishing cars. 
          We use all kinds of tech stacks from old ASP.NET to modern Next.js and more. We try to be as modern as possible, using Azure and Docker."
        />
        <TimelineEvent
          year="2023"
          title="Software developer"
          underTitle="Consid"
          text="Here I did a lot of courses, both in programming and Azure, but also in leadership and project management."
        />
        <TimelineEvent
          year="2021"
          title="Software developer"
          underTitle="Knowe"
          text="When I went from intern to hired, I started to have responsibilities of my own customers and projects.
           I did everything from Vue websites to C# APIs and also worked a lot with the integration platform iCore."
        />

        <TimelineEvent
          year="2020"
          title="Internship"
          underTitle="Knowe"
          text="Knowe is a consulting company that specializes in .NET and integrations, in integration platforms such as BizTalk and iCore. During my internship here, I did a lot. 
          I helped build a solution for a bigger car parts company to manage their warehouse and builds.
		  "
        />
        <TimelineEvent
          year="2019"
          title="Started studying"
          underTitle="Fullstack development in .NET"
          text="I studied everything from API-building/architecture, Azure DevOps, CI/CD, frontend development in Vue and React."
        />
      </div>
    </>
  );
}

export default Timeline;

import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Trainer',
      description: 'Front End Project',
      link: "https://kingo86.github.io/Personal_Training/",
      repo: "https://github.com/kingo86/Personal_Training"
    },
    {
      name: 'Breakfast',
      description: 'Back End Project',
      link: " https://warm-mountain-12020.herokuapp.com/",
      repo: " https://github.com/JayIbarra/recipes/tree/main"
    },
    {
      name: 'Scheduler',
      description: 'Weekdays Work Schedule',
      link: " https://omssma.github.io/work-day-scheduler/",
      repo: " https://github.com/omssma/work-day-scheduler"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

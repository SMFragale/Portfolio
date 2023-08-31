import React from "react";
import Project from "./Project";

const projects = [
  {
    title: "Reclutados",
    dateRange: "August 2022 - May 2023",
    description:
      "I worked on this project from inception to implementation. I was involved with every step of the process including design, implementation, documentation, and presentation.",
    youtubeId: "sssjGSw1b_Q",
    categories: ["Game Development", "System Design"],
    technologies: ["Unity", "Scriptable Object Architecture", "Inkle"],
  },
  {
    title: "WFC Algorithm",
    dateRange: "March 2023",
    description:
      "I implemented this algorithm for another project, it's a humble implementation of the WFC algorithm for procedural content generation",
    youtubeId: "2cbpS-UI3sU",
    categories: ["Game Development", "Algorithms", "Procedural Generation"],
    githubUrl: "https://github.com/SMFragale/WFC",
    technologies: ["Unity"],
  },
  {
    title: "Nurikabe Console Game",
    dateRange: "May 2022",
    description:
      "A console implementation of the Nurikabe board game. An exploration of basic AI algorithms.",
    categories: ["Algorithms", "AI fundamentals"],
    githubUrl: "https://github.com/SMFragale/Nurikabe",
    technologies: ["Python"],
  },
  // Add more project objects as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;

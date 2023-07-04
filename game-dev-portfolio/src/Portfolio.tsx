import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Reclutados',
    dateRange: 'August 2022 - May 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    youtubeId: 'video1',
    githubUrl: 'https://github.com/example/project1',
    category: 'Web Development',
    technologies: ['React', 'Semantic UI', 'JavaScript'],
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

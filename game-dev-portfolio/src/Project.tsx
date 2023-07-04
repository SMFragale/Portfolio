import React from 'react';
import { Embed } from 'semantic-ui-react';

interface ProjectProps {
  title: string;
  dateRange: string;
  description: string;
  youtubeId?: string;
  githubUrl?: string;
  category: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({ title, dateRange, description, youtubeId, githubUrl, category, technologies }) => {
  return (
    <div className="project">
      <div className="project-info">
        <h3>{title}</h3>
        <p>{dateRange}</p>
        <p>{description}</p>
        {githubUrl && <a href={githubUrl}>GitHub</a>}
        <p>Category: {category}</p>
        <p>Technologies: {technologies.join(', ')}</p>
      </div>
      {youtubeId && (
        <div className="project-video">
          <Embed id={youtubeId} source="youtube" placeholder="/images/image-16by9.png" />
        </div>
      )}
    </div>
  );
};

export default Project;

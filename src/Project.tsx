import React from "react";
import { Embed } from "semantic-ui-react";

interface ProjectProps {
  title: string;
  dateRange: string;
  description: string;
  youtubeId?: string;
  githubUrl?: string;
  categories: string[];
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  dateRange,
  description,
  youtubeId,
  githubUrl,
  categories,
  technologies,
}) => {
  return (
    <div className="project">
      <div className="project-info">
        <h3>{title}</h3>
        <p className="date-range">{dateRange}</p>
        <p className="project-description">{description}</p>
        {githubUrl && <a href={githubUrl}>GitHub</a>}
        <div className="categories">
          Categories:
          {categories.map((cat) => {
            return <p className="category">{cat}</p>;
          })}
        </div>

        <div className="categories">
          Technologies:
          {technologies.map((tech) => {
            return <p className="category">{tech}</p>;
          })}
        </div>
      </div>
      {youtubeId && (
        <div className="project-video">
          <Embed id={youtubeId} source="youtube" />
        </div>
      )}
    </div>
  );
};

export default Project;

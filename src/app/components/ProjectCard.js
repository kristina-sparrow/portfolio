import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

export default function ProjectCard({ project }) {
  const { name, description, repoLink, liveLink, image } = project;

  return (
    <div className="project">
        <img src={image} alt={`${name} screenshot`} className="project__img" />
        <div className='project__name-and-links'>
          <h2>{name}</h2>
          <div className='project__links'>
            <a
              href={repoLink}
              target='_blank'
              rel="noopener noreferrer"
              className='project__link'
            >
              <FaGithub />
            </a>
            <a
              href={liveLink}
              target='_blank'
              rel="noopener noreferrer"
              className='project__link'
            >
              <MdOpenInNew />
            </a>
          </div>
        </div>
        <h3 className='project__description'>{description}</h3>
      </div>
  );
}
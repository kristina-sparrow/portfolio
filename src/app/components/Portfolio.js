import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects"
import { v4 as uuidv4 } from 'uuid'

export default function Portfolio() {
  const projectCards = projects.map((project) => (
    <ProjectCard
      key={uuidv4()}
      title={project.title}
      description={project.description}
      repoLink={project.repoLink}
      liveLink={project.liveLink}
      image={project.image}
    />
  ));
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
      <div className="portfolio">{projectCards}</div>
    </section>
  );
}
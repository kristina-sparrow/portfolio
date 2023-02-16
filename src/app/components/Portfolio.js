import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects"

export default function Portfolio() {
  const projectCards = projects.map((project) => (
    <ProjectCard
      key={project.id}
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
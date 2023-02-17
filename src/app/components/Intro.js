import React from "react";
import kristina1 from "../../assets/kristina-01.jpg"

export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Kristina Sparrow</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">front-end dev</p>
      <img src={kristina1} alt="Kristina Sparrow smiling" className="intro__img" />
    </section>
  );
}
import React from "react";
import kristina2 from "../assets/kristina-02.jpg";
import copy from "../data/copy";

export default function Intro() {
  return (
    <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">{copy.about.headline}</p>
        <div className="about-me__body">
            <p>{copy.about.p1}</p>
            <p>{copy.about.p2}</p>
        </div>
        <img src={kristina2} alt="Kristina smiling in front of a bookshelf" className="about-me__img" />
    </section>
  );
}
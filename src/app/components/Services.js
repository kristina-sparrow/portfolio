import React from "react";

export default function Services({ copy }) {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
          <div className="service">
              <h3>{copy.services[0].title}</h3>
              <p>{copy.services[0].description}</p>
          </div>
          
          <div className="service">
              <h3>{copy.services[1].title}</h3>
              <p>{copy.services[1].description}</p>
          </div>
          
          <div className="service">
              <h3>{copy.services[2].title}</h3>
              <p>{copy.services[2].description}</p>
          </div>
      </div>

      <a href="#work" className="btn">My Work</a>
    </section>
  );
}
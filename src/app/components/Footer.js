import React from "react";
import socials from "../data/socials";
import SocialLink from "./SocialLink";

export default function Footer() {
  const socialList = socials.map((social) => (
    <SocialLink
      key={social.id}
      link={social.link}
      icon={social.icon}
    />
  ));
  return (
    <footer className="footer">
      <a href="mailto:sparrow.kristinab@gmail.com" className="footer__link">sparrow.kristinab@gmail.com</a>
        <ul className="social-list">{socialList}</ul>
    </footer>
  );
};
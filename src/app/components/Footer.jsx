import React from "react";
import { v4 as uuidv4 } from 'uuid'
import socials from "../data/socials";
import SocialLink from "./SocialLink";

export default function Footer() {
  const socialList = socials.map((social) => (
    <SocialLink
      key={uuidv4()}
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
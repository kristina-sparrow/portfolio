import React from "react";

export default function SocialLink({ link, icon }) {
  return (
    <li className="social-list__item">
        <a
            className="social-list__link"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
        >
          {icon}
        </a>
    </li>
  );
}
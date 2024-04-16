// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import "../scripts/fontawesome"

export default function NavigationBar() {
  // Local state
  const [showLinks, setShowLinks] = useState(false);

  // Properties
  const cssToggle = showLinks ? "show" : "hide";

  return (
    <nav className="navigation-bar">
      <div className="main-menu">
        <FontAwesomeIcon className="logo icon" icon={["fas", "fa-rocket"]} />
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="menu-button"
        >
          <FontAwesomeIcon className="icon" icon={["fas", "fa-bars"]} />
        </button>
        <span className="name">Alireza KafshdarToosi</span>
      </div>

      <div className={`links ${cssToggle}`}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#technologies">Technologies</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
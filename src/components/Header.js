/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchBar from "./search.js"
import { CSSTransition } from "react-transition-group";

export default function Header() {

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  });

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
    var deck = document.querySelector("#deck");
    var navImgs = document.getElementsByClassName("navImg");
  };

  return (
    <header className="Header">
   <img src="./assets/Logo.svg" className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
         <ul className="nav">
				<li>
					<td>
						<a name="people">
						<img className="navImg" src="./assets/Card.svg" />
						</a>
					</td>
				</li>
				<li>
					<td>
						<a name="deck">
						<img id="deck" className="deck" src="./assets/Deck.svg" />
						</a>
					</td>
				</li>
				<li>
					<td>
						<a name="planets">
						<img className="navImg" src="./assets/Homeworld.svg" />
						</a>
					</td>
				</li>
				<li>
					<td>
						<a name="starships">
						<img className="navImg" src="./assets/Starship.svg" />
						</a>
					</td>
				</li>

			</ul>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>

    </header>
  );
}



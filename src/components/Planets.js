import PropTypes from "prop-types";
import {Card, Grid} from 'semantic-ui-react';
import React, { useState, useEffect } from "react";



export default function Planets({data, onClick}){

const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [n, setN] = useState(5);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 980px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches && window.innerWidth > 500){
   		setN(3);
    }else if(window.innerWidth <= 500){
    	setN(1);
    } else {
      //setIsSmallScreen(false);
       setN(5);
    }
  };

	return(
		<>
			<Grid columns={n}>
			{data.map((planets, i)=>{
				return(
					<Grid.Column key={i}>
						<Card>
							<Card.Content onClick={onClick}>
								<div className="cardText" name = {planets.url} className = "custCard">
								<Card.Header className="cardHeader"><strong>{planets.name}</strong></Card.Header>
								<Card.Description>
									<p><b>Climate</b>: {planets.climate}</p>
									<p><b>Diameter</b>: {planets.diameter}</p>
									<p><b>Gravity</b>: {planets.gravity}</p>
									<p><b>Terrain</b>: {planets.terrain}</p>
									<p><b>Population</b>: {planets.population}</p>
									<div className="overLay" id = {planets.url}></div>

								</Card.Description>
								</div>
							</Card.Content>
						</Card>
					</Grid.Column>
				)
			})

			}
			</Grid>

		</>

		)
}

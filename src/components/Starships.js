import PropTypes from "prop-types";
import {Card, Grid} from 'semantic-ui-react';
import React, { useState, useEffect } from "react";



export default function Starships({data, onClick}){
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
			{data.map((starships, i)=>{
				return(
					<Grid.Column key={i}>
						<Card>
							<Card.Content onClick={onClick}>
								<div className="cardText" name = {starships.url} className = "custCard">
								<Card.Header className="cardHeader"><strong>{starships.name}</strong></Card.Header>
								<Card.Description>
									<p><b>Model</b>: {starships.model}</p>
									<p><b>Length</b>: {starships.length}</p>	
									<p><b>Max Speed</b>: {starships.max_atmosphering_speed}</p>
									<p><b>Class</b>: {starships.starship_class}</p>
									<p><b>Crew</b>: {starships.crew}</p>
									<p><b>Hyperdrive rating</b>: {starships.hyperdrive_rating}</p>
									<div className="overLay" id = {starships.url}></div>
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

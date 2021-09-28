import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import {Card, Grid} from 'semantic-ui-react';


export default function People({data, onClick}){
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


  let gender = "";




	

	return(
		<>

		

			<Grid columns={n}>
			{data.map((people, i)=>{
				{
					if(people.gender == "female"){
			 			gender = './assets/Gender-Female.svg';
			 		}else if (people.gender=="male"){
			 			 gender = './assets/Gender-Male.svg';
			 		}else if (people.gender=="n/a"|| people.gender=="unknown"){
			 			gender = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F172-1728899_open-thinking-face-emoji-black-and-white-clipart.png&f=1&nofb=1"
			 		}

				}
				return(
					<Grid.Column key={i}>
						<Card>
							<Card.Content onClick={onClick}>
								<div className="cardText" name = {people.url} className = "custCard">
								<Card.Header className="cardHeader"><strong>{people.name}</strong></Card.Header>
								<Card.Description>
									<p><b>Height</b>: {people.height}</p>
									<p><b>Weight</b>: {people.mass}</p>
									<p><b>Hair</b>: {people.hair_color}</p>
									<p><b>Eyes</b>: {people.eye_color}</p>
									<p><b>Birth Year</b>: {people.birth_year}</p>
									<p><b>Gender</b>: <img className="genderImg" src={gender}></img></p>	
									<div className="overLay" id = {people.url}></div>
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

import PropTypes from "prop-types";
import "../assets/Card.svg"
import {Card, Grid} from 'semantic-ui-react';

export default function Planets({data,}){

	let n = 5;

	if(window.innerWidth < 720){
		n = 3;
	}if(window.innerWidth < 400){
		n = 1;
	}

	return(
		<>
			<Grid columns={n}>
			{data.map((planets, i)=>{

					for (var key in planets) {
				    if (planets.hasOwnProperty(key)) {
				  
				        console.log("<p><b>"+key+ "</br>" + " " + planets[key])
						    }
						} 

				return(
					<Grid.Column key={i}>
						<Card>
							<Card.Content>
								<div className="cardText">
								<Card.Header className="cardHeader"><strong>{planets.name}</strong></Card.Header>
								<Card.Description>
									<p><b>Climate</b>: {planets.climate}</p>
									<p><b>Diameter</b>: {planets.diameter}</p>
									<p><b>Gravity</b>: {planets.gravity}</p>
									<p><b>Terrain</b>: {planets.terrain}</p>
									<p><b>Population</b>: {planets.population}</p>
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

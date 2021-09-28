import PropTypes from "prop-types";
import {Card, Grid} from 'semantic-ui-react';


export default function Starships({data, onClick}){

	let n = 5;

	if(window.innerWidth < 720){
		n = 3;
	}

	if(window.innerWidth < 400){
		n = 1;
	}

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
									<p><b>Max Speed</b>: {starships.max_atmosphering_speed}</p>
									<p><b>Class</b>: {starships.starship_class}</p>
									<p><b>Max Capa</b>: {starships.eye_color}</p>
									<p><b>Birth Year</b>: {starships.birth_year}</p>
									<p><b>Gender</b>: {starships.gender}</p>	
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

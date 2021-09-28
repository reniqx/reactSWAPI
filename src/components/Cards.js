import PropTypes from "prop-types";
import {Card, Grid} from 'semantic-ui-react';
import React, { useState, useEffect } from "react";


export default function Cards({data, onClick}){


const details = Object.entries(data);

          for(let i = 0; i< 3; i++){
              details.pop();
          }
        	for(let i = 0; i < details.length; i++){
        			let c = details[i][0].charAt(0).toUpperCase();
        			details[i][0] = details[i][0].replace(details[i][0].charAt(0), c)
        			details[i][0] = details[i][0].replace("_", " ");
        	}

return(
	<Grid columns={1}>
					<Grid.Column key={1}>
						<Card id = "details">
							<Card.Content onClick={onClick}>
								<div className="cardText" className = "custCard">
								<Card.Description>
									{details.map((key, i)=>{
						return(
							<>
							<Card.Description>
								<p><b>{details[i][0]}</b>: {details[i][1]}</p>
							</Card.Description></>
						)})
					}
								</Card.Description>
								</div>
							</Card.Content>
						</Card>
					</Grid.Column>
			</Grid>


)

} //end of main



					
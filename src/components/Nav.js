

const Nav=()=>{
	return(
		<>
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
		</>


		)
}

export default Nav;
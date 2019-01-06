import React from 'react';

import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<ul>
			<li>
				<Link to '/'>Home</Link>
			</li>
			<li>
				<Link to '/studios'>Studios</Link>
			</li>
			<li>
				<Link to '/workouts'>Workouts</Link>
			</li>
			<li>
				<Link to '/blogs'>The Cool Down</Link>
			</li>
		</ul>
	);
}

export default NavBar;

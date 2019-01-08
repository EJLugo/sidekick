import React from 'react';

import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/studios'>Studios</Link>
			</li>
			<li>
				<Link to='/workouts'>Workouts</Link>
			</li>
			<li>
				<Link to='/blogs'>Blog</Link>
			</li>
		</ul>
	);
}

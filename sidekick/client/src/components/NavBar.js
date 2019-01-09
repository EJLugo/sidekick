import React from 'react';
import './NavBar.css'

import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<ul className='nav-bar'>
			<li>
			<Link to='/' style={{ textDecoration: 'none' }} className='nav-bar-link'>Home</Link>
			</li>
			<li>
				<Link to='/studios' style={{ textDecoration: 'none' }} className='nav-bar-link'>Studios</Link>
			</li>
			<li>
				<Link to='/workouts' style={{ textDecoration: 'none' }} className='nav-bar-link' >Workouts</Link>
			</li>
			<li>
				<Link to='/blogs' style={{ textDecoration: 'none' }} className='nav-bar-link'>Blog</Link>
			</li>
		</ul>
	);
}

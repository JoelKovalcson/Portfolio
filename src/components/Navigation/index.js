import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className='grow pt-1'>
			<ul className='flex flex-nowrap text-xl justify-center sm:justify-end '>
				<li className='mx-1 sm:mx-3'>
					<Link to="/">About</Link>
				</li>
				|
				<li className='mx-1 sm:mx-3'>
					<Link to="/projects">Projects</Link>
				</li>
				|
				<li className='mx-1 sm:mx-3'>
					<Link to="/contact">Contact Me</Link>
				</li>
				|
				<li className='mx-1 sm:mx-3'>
					<Link to="/resume">Resume</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
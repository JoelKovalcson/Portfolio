import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className='grow pt-1'>
			<ul className='text-center sm:flex sm:flex-nowrap text-xl justify-center sm:justify-end'>
				<li className='mx-1 sm:mx-2'>
					<Link to="/">About</Link>
				</li>
				<span className='hidden sm:inline'>|</span>
				<li className='mx-1 sm:mx-2'>
					<Link to="/projects">Projects</Link>
				</li>
				<span className='hidden sm:inline'>|</span>
				<li className='mx-1 sm:mx-2'>
					<Link to="/contact">Contact Me</Link>
				</li>
				<span className='hidden sm:inline'>|</span>
				<li className='mx-1 sm:mx-2'>
					<Link to="/resume">Resume</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
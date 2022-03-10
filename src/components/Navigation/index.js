import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/contact">Contact Me</Link>
				</li>
				<li>
					<Link to="/resume">Resume</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
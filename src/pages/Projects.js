import React, {useState} from 'react';
import Project from '../components/Project';

const Projects = () => {

	const [projectsArr] = useState([
		{
			name: 'Programmer Dashboard',
			github: 'https://github.com/JoelKovalcson/Programmer-Dashboard',
			image: 'bg-programmer-dashboard',
			live: 'https://joelkovalcson.github.io/Programmer-Dashboard/',
			description: '3rd Party APIs/HTML/CSS'
		},
		{
			name: 'Chattleship',
			github: 'https://github.com/JoelKovalcson/ChattleShip',
			image: 'bg-chattleship',
			live: 'https://chattleship.herokuapp.com/',
			description: 'SQL/Node/Express'
		},
		{
			name: 'Coming soon...',
			github: '',
			image: 'bg-banner',
			live: '',
			description: 'Future Work'
		},
		{
			name: 'Coming soon...',
			github: '',
			image: 'bg-banner',
			live: '',
			description: 'Future Work'
		},
		{
			name: 'Coming soon...',
			github: '',
			image: 'bg-banner',
			live: '',
			description: 'Future Work'
		},
		{
			name: 'Coming soon...',
			github: '',
			image: 'bg-banner',
			live: '',
			description: 'Future Work'
		}
	]);

	const projects = [];
	for(let i = 0; i < projectsArr.length; i++) {
		projects.push(<Project key={`Project-${i}`} project={projectsArr[i]}/>)
	}

	return (
		<main className="h-auto mx-3 sm:mx-8 my-5 grid grid-cols-1 md:grid-cols-2 justify-center p-5 border-4 rounded-lg border-slate-500">
			{projects}
		</main>
	);
}

export default Projects;
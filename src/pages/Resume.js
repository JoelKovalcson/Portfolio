import React, { useState } from 'react';

const Resume = () => {

	const [myInformation] = useState({
		languages: [
			{
				name: 'Javascript',
				time: '1 Year'
			},
			{
				name: 'C#',
				time: '1 Year'
			},
			{
				name: 'C++',
				time: '3 Years'
			},
			{
				name: 'C',
				time: '2 Years'
			},
			{
				name: 'Java',
				time: '1 Year'
			}
		],
		skills: [
			'git',
			'MERN',
			'HTML/CSS',
			'SQL/NoSQL',
			'Visual Studio',
			'Visual Studio Code',
			'PWAs',
			'RESTful APIs',
			'Bootstrap/Tailwind',
			'Express'
		]
	});

	return (
		<main className='m-5 p-3 sm:p-5 border-4 rounded-lg border-slate-500'>
			<a
				href={require('../assets/resume.pdf')}
				download
				className='text-2xl rounded-lg border-slate-500 bg-slate-300 p-2 mt-3'
			>
				Download Resume
			</a>
			<div className='mt-3'>
				<span className='text-xl'>Experienced Languages (recent use):</span>
				{myInformation.languages.map((language, index) => {
					return (
					<div key={`language-${index}`} className='flex justify-between w-40'>
						<div>
							- {language.name}
						</div>
						<div>
							{language.time}
						</div>
					</div>
					)
				})}
			</div>
			<div className='mt-3'>
				<span className='text-xl'>Skills</span>
				{myInformation.skills.map((skill, index) => {
					return (
						<div key={`skill-${index}`}>
							- {skill}
						</div>
					)
				})}
			</div>
		</main>
	);
}

export default Resume;
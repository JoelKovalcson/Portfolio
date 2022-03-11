import React from 'react';

const About = () => {

	return (
		<main className='mx-8 sm:mx-20 my-10 flex flex-wrap lg:flex-nowrap justify-center'>
			<img
				className='mb-3 sm:mb-0 sm:mr-5 h-80'
				src={require('../assets/me.png')}
				alt="Joel Kovalcson's Headshot"
			/>
			<p className='text-darkgrey text-xl'>
				Reminiscing on my childhood, I was always fascinated by technology in various mediums ranging from game
				systems to personal computers. To me these devices were simply toys at the time, something to play a
				game on. Lo and behold, I later realized that my methodical and persistent nature were helping me
				develop critical thinking skills. Combining these skills with the aptitude I had for mathematics and
				sciences, and the direction I chose to pursue for an occupation should come as no surprise.
				<br/><br/>
				When I first arrived at college, my goals were to obtain a degree in computer engineering. Along this
				path I discovered the joys of programming and it was an instant hit for me, so much so that I swapped to
				pursue computer science. I craved to learn more about programming on both a fundamental and technical
				level.
				<br/><br/>
				If you hadn't figured it out, I can be a bit of a nerd. I frequently enjoy topics about various
				technobabble like how threading and scheduling affect run-times over something like what the latest
				football game results were. However, I also enjoy taking a few steps away from the glowing screens and
				clacking keyboards to go out and enjoy nature.
			</p>
		</main>
	);
}

export default About;
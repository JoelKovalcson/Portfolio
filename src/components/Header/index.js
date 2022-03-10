import React from 'react';
import Navigation from '../Navigation';

const Header = () => {
	return (
		<header>
			<section className='sm:flex sm:flex-wrap px-2 py-3 bg-darkgrey text-orange-hl'>
				<h1 className="text-2xl font-bold text-center sm:grow sm:text-left">JOEL KOVALCSON</h1>
				<Navigation/>
			</section>
			<div
				className="bg-banner h-20 bg-cover"
			/>
		</header>
	);
}

export default Header;
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

	const [formState, changeForm] = useState({name: '', email: '', message: '', response: ''});

	const form = useRef();

	const handleChange = (event) => {
		const {name, value} = event.target;
		changeForm({
			...formState,
			[name]: value
		});
	};

	const handleContact = (event) => {
		event.preventDefault();
		changeForm({
			...formState,
			response: 'SEND'
		});
		emailjs.sendForm('service_bch523t', 'contact_form', form.current, 'K7vZ6jWYaMjTVM59J')
			.then((response) => {
				changeForm({
					...formState,
					response: 'OK'
				});
			}, (error) => {
				changeForm({
					...formState,
					response: 'ERROR'
				})
			});
	};

	return (
		<main className="mx-3 sm:mx-15 my-5 flex flex-wrap lg:flex-nowrap p-5 border-4 rounded-lg border-slate-500">
			<form ref={form} onSubmit={handleContact} className="sm:ml-5 w-full">
				<div className='mb-1'>
					Enter your name:
				</div>
				<input type="name" name="name" onChange={handleChange} value={formState.name} placeholder="Name"
					className="sm:ml-2 border-2 border-slate-300 rounded-lg px-2 bg-slate-100 focus:bg-white w-full sm:w-60"/>
				<div className='my-1'>
					Enter your email:
				</div>
				<input type="email" name="email" onChange={handleChange} value={formState.email} placeholder="Email"
					className="sm:ml-2 border-2 border-slate-300 rounded-lg px-2 bg-slate-100 focus:bg-white w-full sm:w-60"/>
				<div className='my-1'>
					Leave your message:
				</div>
				<textarea name="message" onChange={handleChange} value={formState.message} cols="20" rows="4" placeholder='Message'
					className="sm:ml-2 border-2 border-slate-300 rounded-lg px-2 bg-slate-100 focus:bg-white w-full sm:w-96"/>
				<br/>
				<button type='submit' className="mt-2 sm:ml-2 border-2 border-orange-hl rounded-lg px-2 bg-slate-200 focus:bg-white">
					Submit
				</button>
				<div className='text-xl sm:ml-2 mt-2'>
					{(formState.response) ? (
						(formState.response === 'OK') ? 'Email Sent!' : 
						(formState.response === 'SEND' ? 'Sending email...' : 
						'Error sending email. Contact me at joelkovalcson@gmail.com.')) : ''}
				</div>
			</form>
		</main>
	);
}

export default Contact;
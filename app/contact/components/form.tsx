'use client'
import CustomButton from '@/components/custom-btn'
import React, { useState } from 'react'

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	return (
		<div className='lg:w-[50%] bg-white rounded-2xl shadow-lg p-6 space-y-8 py-10'>
			<input
				type='text'
				name='name'
				placeholder='Your Name'
				value={formData.name}
				onChange={handleChange}
				className='w-full border border-zinc-300 rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>

			<input
				type='email'
				name='email'
				placeholder='Your Email'
				value={formData.email}
				onChange={handleChange}
				className='w-full border border-zinc-300 rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>

			<textarea
				name='message'
				placeholder='Your Message'
				value={formData.message}
				onChange={handleChange}
				className='w-full border border-zinc-300 rounded-lg px-4 py-4 text-lg h-38 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>

			<CustomButton title='Submit' />
		</div>
	)
}

export default Form

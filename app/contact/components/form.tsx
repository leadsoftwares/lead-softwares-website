'use client'
import FirebaseUtils from '@/lib/firestore-utils'
import { CheckCircle, Loader } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {motion} from 'framer-motion'
type FormValues = {
	name: string
	email: string
	message: string
}

const Form = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>()

	const [showSuccess, setShowSuccess] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const onSubmit = async (data: FormValues) => {
		console.log('Form Submitted:', data)
		setIsLoading(true)

		FirebaseUtils.addDocument('contact', {
			name: data.name,
			email: data.email,
			message: data.message,
			createdAt: new Date(),
		})
			.then(() => {
				setIsLoading(false) 
				setShowSuccess(true)
				reset() 
			})
			.catch((error) => {
				setIsLoading(false) 
				console.error('Error submitting form:', error)
			})
	}

	return (
		<motion.form
			onSubmit={handleSubmit(onSubmit)}
			initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true , amount: 0.3}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
			className='lg:w-[50%] bg-white rounded-2xl shadow-lg p-6 space-y-8 py-10'
		>
			{/* ✅ Success Box */}
			{showSuccess && (
				<div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
					<div className='bg-white rounded-2xl shadow-xl p-6 text-center w-[300px]'>
						<div className='flex justify-center mb-4'>
							<div className='bg-green-100 p-4 rounded-full'>
								<CheckCircle className='h-10 w-10 text-green-600' />
							</div>
						</div>
						<h3 className='text-lg font-semibold text-gray-800 mb-2'>
							Message Sent!
						</h3>
						<p className='text-gray-600 mb-4'>
							Your contact message has been saved successfully.
						</p>
						<button
							onClick={() => setShowSuccess(false)}
							className='bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition'
						>
							OK
						</button>
					</div>
				</div>
			)}
			{/* Name */}
			<div className='flex flex-col'>
				<input
					type='text'
					placeholder='Your Name'
					{...register('name', {
						required: 'Name is required',
						pattern: {
							value: /^[A-Za-z\s]+$/, // letters + spaces allowed
							message: 'Name can only contain letters and spaces',
						},
						minLength: {
							value: 2,
							message: 'Name must be at least 2 characters',
						},
					})}
					onKeyDown={(e) => {
						if (
							!/[a-zA-Z\s]/.test(e.key) &&
							e.key !== 'Backspace' &&
							e.key !== 'Tab'
						) {
							e.preventDefault() // block numbers and symbols, but allow spaces
						}
					}}
					className={`w-full border rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-2 ${
						errors.name
							? 'border-red-500 focus:ring-red-500'
							: 'border-zinc-300 focus:ring-blue-500'
					}`}
				/>
				{errors.name && (
					<p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
				)}
			</div>

			{/* Email */}
			<div className='flex flex-col'>
				<input
					type='email'
					placeholder='Your Email'
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: 'Invalid email format',
						},
					})}
					className={`w-full border rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-2 ${
						errors.email
							? 'border-red-500 focus:ring-red-500'
							: 'border-zinc-300 focus:ring-blue-500'
					}`}
				/>
				{errors.email && (
					<p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
				)}
			</div>

			{/* Message */}
			<div className='flex flex-col'>
				<textarea
					placeholder='Your Message'
					{...register('message', {
						required: 'Message is required',
					})}
					className={`w-full border rounded-lg px-4 py-4 text-lg h-38 resize-none focus:outline-none focus:ring-2 ${
						errors.message
							? 'border-red-500 focus:ring-red-500'
							: 'border-zinc-300 focus:ring-blue-500'
					}`}
				/>
				{errors.message && (
					<p className='text-red-500 text-sm mt-1'>{errors.message.message}</p>
				)}
			</div>

			{/* Submit */}
			<div className='flex justify-center'>
				<button
					type='submit'
					disabled={isLoading}
					className={`${
						isLoading
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-blue-500 hover:bg-purple-900 cursor-pointer'
					} text-white font-light py-3 px-6 rounded-md transition flex items-center gap-2`}
				>
					{isLoading && <Loader className='h-4 w-4 animate-spin' />}
					{isLoading ? 'Sending...' : 'Submit'}
				</button>
			</div>
		</motion.form>
	)
}

export default Form

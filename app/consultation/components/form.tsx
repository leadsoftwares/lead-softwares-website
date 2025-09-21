'use client'
import FirebaseUtils from '@/lib/firestore-utils'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

type FormData = {
	firstName: string
	lastName: string
	email: string
	company?: string
	phone: string
	projectDetails: string
	hearValue: string
	industryValue: string
	budgetValue: string
	regionValue: string
}

const ConsultationForm = () => {
	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
	} = useForm<FormData>()

	// dropdown states
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)
	const dropdownRefs = useRef<(HTMLUListElement | null)[]>([])

	// dropdown options
	const hear = ['Google Search', 'Social Media', 'Direct', 'Referral']
	const industries = [
		'Health & Fitness',
		'Beauty & Cosmetics',
		'Fashion',
		'Food & Drinks',
		'Non Profit',
		'Other',
	]
	const budgets = ['$1000 - $5000', '$5000 - $10000', 'More than $10000']
	const regions = [
		'Asia',
		'Middle East & North Africa',
		'Europe',
		'USA',
		'Canada',
		'Australia & New Zealand',
		'KSA',
		'Other World',
	]

	// close dropdown on outside click
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRefs.current.every(
					(ref) => ref && !ref.contains(event.target as Node)
				)
			) {
				setOpenDropdown(null)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	// onSubmit
	const onSubmit = (data: FormData) => {
		console.log('Form Submitted:', data)
		alert('Form submitted!')
	}

	// reusable dropdown
	const Dropdown = ({
		label,
		name,
		options,
		index,
	}: {
		label: string
		name: keyof FormData
		options: string[]
		index: number
	}) => (
		<div className='relative'>
			<label className='text-text'>{label}</label>
			<input
				type='text'
				{...register(name, { required: `${label} is required` })}
				readOnly
				placeholder='Select...'
				onClick={() => setOpenDropdown(openDropdown === name ? null : name)}
				className='w-full border border-text rounded-md p-2 cursor-pointer bg-white'
			/>
			<ChevronDown
				className='absolute right-3 top-9 text-gray-500 pointer-events-none'
				size={18}
			/>
			{errors[name] && (
				<p className='text-red-500 text-sm'>
					{errors[name]?.message as string}
				</p>
			)}
			<ul
				ref={(el) => {
					if (el) dropdownRefs.current[index] = el
				}}
				className={`absolute w-full top-16 mt-1 border border-gray-300 bg-white rounded-md shadow-lg z-10 ${
					openDropdown === name ? '' : 'hidden'
				}`}
			>
				{options.map((opt, i) => (
					<li
						key={i}
						onClick={() => {
							setValue(name, opt, { shouldValidate: true })
							setOpenDropdown(null)
						}}
						className='px-3 py-2 cursor-pointer hover:bg-gray-100'
					>
						{opt}
					</li>
				))}
			</ul>
		</div>
	)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='lg:relative lg:bottom-20 lg:max-w-[60%] rounded-xl shadow-xl lg:mx-auto lg:mb-40 py-10 px-6 lg:px-30 z-100 bg-white'
		>
			<h1 className='text-3xl md:text-4xl text-primary font-semibold text-center pb-10'>
				Schedule a Free Consultation
			</h1>

			{/* Grid Section */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{/* First Name */}
				<div className='flex flex-col'>
					<label className='text-text'>First Name</label>
					<input
						{...register('firstName', {
							required: 'First name is required',
							pattern: {
								value: /^[A-Za-z]+$/,
								message: 'First name cannot contain numbers',
							},
						})}
						type='text'
						onKeyDown={(e) => {
							if (
								!/[a-zA-Z]/.test(e.key) &&
								e.key !== 'Backspace' &&
								e.key !== 'Tab'
							) {
								e.preventDefault() // block numbers, symbols, spaces
							}
						}}
						className='border border-text rounded-md p-2'
					/>
					{errors.firstName && (
						<p className='text-red-500 text-sm'>{errors.firstName.message}</p>
					)}
				</div>

				{/* Last Name */}
				<div className='flex flex-col'>
					<label className='text-text'>Last Name</label>
					<input
						{...register('lastName', {
							required: 'Last name is required',
							pattern: {
								value: /^[A-Za-z]+$/,
								message: 'Last name cannot contain numbers',
							},
						})}
						onKeyDown={(e) => {
							if (
								!/[a-zA-Z]/.test(e.key) &&
								e.key !== 'Backspace' &&
								e.key !== 'Tab'
							) {
								e.preventDefault() // block numbers, symbols, spaces
							}
						}}
						type='text'
						className='border border-text rounded-md p-2'
					/>
					{errors.lastName && (
						<p className='text-red-500 text-sm'>{errors.lastName.message}</p>
					)}
				</div>

				{/* Email */}
				<div className='flex flex-col'>
					<label className='text-text'>Email</label>
					<input
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Invalid email format',
							},
						})}
						type='email'
						className='border border-text rounded-md p-2'
					/>
					{errors.email && (
						<p className='text-red-500 text-sm'>{errors.email.message}</p>
					)}
				</div>

				{/* Company */}
				<div className='flex flex-col'>
					<label className='text-text'>Company / Organization (Optional)</label>
					<input
						{...register('company')}
						type='text'
						className='border border-text rounded-md p-2'
					/>
				</div>

				{/* Phone */}
				<div>
					<label className='text-text'>Phone</label>
					<Controller
						control={control}
						name='phone'
						rules={{
							required: 'Phone number is required',
							minLength: { value: 6, message: 'Phone number is too short' },
						}}
						render={({ field }) => (
							<PhoneInput
								inputClass='p-4 py-5 border border-text rounded-md max-w-full'
								country='pk'
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
					{errors.phone && (
						<p className='text-red-500 text-sm'>{errors.phone.message}</p>
					)}
				</div>

				{/* Dropdowns */}
				<Dropdown
					label='How did you hear about us?'
					name='hearValue'
					options={hear}
					index={0}
				/>
				<Dropdown
					label='Industry'
					name='industryValue'
					options={industries}
					index={1}
				/>
				<Dropdown
					label='Estimated Budget'
					name='budgetValue'
					options={budgets}
					index={2}
				/>
			</div>

			{/* Region + Project Details */}
			<div className='pt-6 space-y-8'>
				<Dropdown
					label='Region'
					name='regionValue'
					options={regions}
					index={3}
				/>

				{/* Project Details */}
				<div className='flex flex-col'>
					<label className='text-text'>Project Details</label>
					<textarea
						{...register('projectDetails', {
							required: 'Project details are required',
						})}
						rows={4}
						placeholder='Your Project Details'
						className='border border-text rounded-md p-2 resize-none'
					/>
					{errors.projectDetails && (
						<p className='text-red-500 text-sm'>
							{errors.projectDetails.message}
						</p>
					)}
				</div>
			</div>

			{/* Submit */}
			<div className='mt-6 flex justify-end'>
				<button
					onClick={() => {
						FirebaseUtils.addDocument('consultation', {
							fullName: 'Khuram Iftikhar',
							phone: '+923166072132',
							email: 'muhamadkhuram1999@gmail.com',
							country: 'Pakistan',
							requirement: 'What i need is to complete the website',
							budget: '$1000',
							createdAt: new Date(),
						})
					}}
					type='submit'
					className='bg-blue-500 text-white font-light py-3 px-6 cursor-pointer hover:bg-purple-900 rounded-md transition mr-4'
				>
					Submit
				</button>
			</div>
		</form>
	)
}

export default ConsultationForm

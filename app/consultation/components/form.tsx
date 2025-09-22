'use client'
import FirebaseUtils from '@/lib/firestore-utils'
import { CheckCircle, ChevronDown, Loader } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import CountrySelector from './countrySelector'

type CountryOption = {
	value: string
	label: string
}

type FormData = {
	fullName: string
	email: string
	phone: string
	budgetValue: string
	country: CountryOption | null
	requirement: string
}

const ConsultationForm = () => {
	const {
		register,
		handleSubmit,
		control,
		setValue,
		reset,
		formState: { errors },
	} = useForm<FormData>()

	// dropdown states
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)
	const dropdownRefs = useRef<(HTMLUListElement | null)[]>([])
	const [showSuccess, setShowSuccess] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	// dropdown options
	const budgets = ['$1000 - $5000', '$5000 - $10000', 'More than $10000']

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
		setIsLoading(true) // Start loading

		FirebaseUtils.addDocument('consultation', {
			fullName: data.fullName,
			phone: data.phone,
			email: data.email,
			country: data.country?.label || '',
			requirement: data.requirement,
			budget: data.budgetValue,
			createdAt: new Date(),
		})
			.then(() => {
				setIsLoading(false) // Stop loading
				setShowSuccess(true)
				reset()
			})
			.catch((error) => {
				setIsLoading(false) // Stop loading on error
				console.error('Error submitting form:', error)
			})
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
							Form Submitted!
						</h3>
						<p className='text-gray-600 mb-4'>
							Your consultation request has been saved.
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
			<h1 className='text-3xl md:text-4xl text-primary font-semibold text-center pb-10'>
				Schedule a Free Consultation
			</h1>

			{/* Grid Section */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{/* Full Name */}
				<div className='flex flex-col'>
					<label className='text-text'>Full Name</label>
					<input
						{...register('fullName', {
							required: 'Full name is required',
							pattern: {
								value: /^[A-Za-z\s]+$/,
								message: 'Full name can only contain letters and spaces',
							},
							minLength: {
								value: 2,
								message: 'Full name must be at least 2 characters',
							},
						})}
						type='text'
						onKeyDown={(e) => {
							if (
								!/[a-zA-Z\s]/.test(e.key) &&
								e.key !== 'Backspace' &&
								e.key !== 'Tab'
							) {
								e.preventDefault() // block numbers and symbols, but allow spaces
							}
						}}
						className='border border-text rounded-md p-2'
					/>
					{errors.fullName && (
						<p className='text-red-500 text-sm'>{errors.fullName.message}</p>
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
					label='Estimated Budget'
					name='budgetValue'
					options={budgets}
					index={2}
				/>
			</div>

			{/* country */}
			<div className='pt-6 space-y-8'>
				<div>
					<label className='text-text'>Country</label>
					<Controller
						control={control}
						name='country'
						rules={{ required: 'Country is required' }}
						render={({ field }) => (
							<CountrySelector value={field.value} onChange={field.onChange} />
						)}
					/>
					{errors.country && (
						<p className='text-red-500 text-sm'>{errors.country.message}</p>
					)}
				</div>
			</div>
			{/* Requirement */}
			<div className='pt-6'>
				<label className='text-text'>Project Requirements</label>
				<textarea
					{...register('requirement', {
						required: 'Project requirements are required',
						minLength: {
							value: 10,
							message: 'Please provide more details (at least 10 characters)',
						},
					})}
					className='w-full border border-text rounded-md p-2 h-24 resize-none'
					placeholder='Please describe your project requirements...'
				/>
				{errors.requirement && (
					<p className='text-red-500 text-sm'>{errors.requirement.message}</p>
				)}
			</div>

			{/* Submit */}
			<div className='mt-6 flex justify-end'>
				<button
					type='submit'
					disabled={isLoading}
					className={`${
						isLoading
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-blue-500 hover:bg-purple-900 cursor-pointer'
					} text-white font-light py-3 px-6 rounded-md transition mr-4 flex items-center gap-2`}
				>
					{isLoading && <Loader className='h-4 w-4 animate-spin' />}
					{isLoading ? 'Submitting...' : 'Submit'}
				</button>
			</div>
		</form>
	)
}

export default ConsultationForm

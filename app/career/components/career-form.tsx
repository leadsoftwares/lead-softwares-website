'use client'
import { ChevronDown, Plus } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

type Education = {
	degree: string
	institution: string
	year: string
}

type Experience = {
	company: string
	position: string
	startDate: string
	endDate: string
	description: string
}

type FormData = {
	profilePic?: File | null
	firstName: string
	lastName: string
	email: string
	dob: string
	phone: string
	address: string
	gender: string
	education: Education[]
	experience: Experience[]
	skills: string[]
	coverLetter: string
	cvFile: File | null
}

const CareerForm = () => {
	const {
		register,
		handleSubmit,
		control,
		setValue,
		watch,
		formState: { errors },
		clearErrors,
		setError,
	} = useForm<FormData>({
		defaultValues: {
			education: [{ degree: '', institution: '', year: '' }],
			experience: [
				{
					company: '',
					position: '',
					startDate: '',
					endDate: '',
					description: '',
				},
			],
			skills: [],
		},
		mode: 'onChange', // Validate on change to get real-time validation
	})

	// Watch the skills array for changes
	const watchedSkills = watch('skills')

	// Validate skills on submission
	useEffect(() => {
		// If skills array is empty, set validation error
		if (watchedSkills && watchedSkills.length === 0) {
			setError('skills', {
				type: 'required',
				message: 'At least one skill is required',
			})
		} else if (watchedSkills && watchedSkills.length > 0) {
			// Clear the error if there are skills
			clearErrors('skills')
		}
	}, [watchedSkills, setError, clearErrors])

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'education',
	})

	const {
		fields: experienceFields,
		append: appendExperience,
		remove: removeExperience,
	} = useFieldArray({
		control,
		name: 'experience',
	})

	// Setup for dropdowns
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)
	const genderDropdownRef = useRef<HTMLUListElement>(null)

	const genderOptions = ['Male', 'Female', 'Not Specified']
	const [profilePreview, setProfilePreview] = useState<string | null>(null)
	const [newSkill, setNewSkill] = useState<string>('')

	// Watch clicks outside the dropdown to close it
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				genderDropdownRef.current &&
				!genderDropdownRef.current.contains(event.target as Node)
			) {
				setOpenDropdown(null)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const onSubmit = async (data: FormData) => {
		// Perform any additional validations here if needed
		// Skills validation is already handled by the form validation

		// Log form data - in a real app, you would send this to your API
		console.log('Form Submitted:', data)

		// Example API submission code (commented out)
		// const formData = new FormData();
		// Add form fields to formData
		// Object.entries(data).forEach(([key, value]) => {
		//   if (key === 'cvFile' || key === 'profilePic') {
		//     if (value) formData.append(key, value);
		//   } else if (['skills', 'education', 'experience'].includes(key)) {
		//     formData.append(key, JSON.stringify(value));
		//   } else {
		//     formData.append(key, String(value));
		//   }
		// });

		// try {
		//   const response = await fetch('/api/submit-career-form', {
		//     method: 'POST',
		//     body: formData
		//   });
		//
		//   if (response.ok) {
		//     alert('Form submitted successfully!');
		//   } else {
		//     alert('Form submission failed. Please try again.');
		//   }
		// } catch (error) {
		//   console.error('Error submitting form:', error);
		//   alert('An error occurred while submitting the form.');
		// }

		alert('Form submitted successfully!')
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='lg:relative lg:bottom-20 lg:max-w-[60%] rounded-xl shadow-xl lg:mx-auto lg:mb-40 py-10 px-6 lg:px-30 z-100 bg-white'
			noValidate
		>
			{/* ---------------- Personal Info ---------------- */}
			<div>
				<h1 className='text-2xl md:text-3xl text-primary font-semibold text-center pb-10'>
					Personal Info
				</h1>

				<div className='relative'>
					{profilePreview ? (
						<>
							<Image
								src={profilePreview}
								alt='Profile Preview'
								width={96}
								height={96}
								className='mt-4 w-24 h-24 rounded-full object-cover mx-auto'
							/>
							<label
								htmlFor='profile-upload'
								className='absolute bottom-0 right-1/2 transform translate-x-12 bg-white p-1 rounded-full shadow-md hover:bg-gray-100 cursor-pointer'
								title='Change profile picture'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
									<path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
								</svg>
							</label>
						</>
					) : (
						<label
							htmlFor='profile-upload'
							className='relative border flex justify-center mx-auto border-text rounded-full p-2 w-24 h-24 hover:bg-zinc-300 cursor-pointer bg-zinc-200'
						></label>
					)}
					<input
						id='profile-upload'
						type='file'
						accept='image/*'
						onChange={(e) => {
							const file = e.target.files?.[0]
							if (file) {
								setProfilePreview(URL.createObjectURL(file))
								setValue('profilePic', file)
							}
						}}
						className='hidden'
					/>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
					{/* First Name */}
					<div className='flex flex-col'>
						<label className='text-text'>First Name</label>
						<input
							{...register('firstName', {
								required: 'First name is required',
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
							{...register('lastName', { required: 'Last name is required' })}
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
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // basic email regex
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

					{/* DOB */}
					<div className='flex flex-col'>
						<label className='text-text'>Date of Birth</label>
						<input
							{...register('dob', {
								required: 'Date of Birth is required',
								validate: (value) => {
									const today = new Date()
									today.setHours(0, 0, 0, 0) // reset time
									const selectedDate = new Date(value)
									selectedDate.setHours(0, 0, 0, 0)

									if (selectedDate >= today) {
										return 'Date of Birth cannot be today or in the future'
									}
									return true
								},
							})}
							type='date'
							className='border border-text rounded-md p-2'
						/>
						{errors.dob && (
							<p className='text-red-500 text-sm'>{errors.dob.message}</p>
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
								validate: (value) => {
									if (!/^\d+$/.test(value || '')) {
										return 'Phone number must contain only digits'
									}
									if (value.length < 6) {
										return 'Phone number must be at least 10 digits'
									}
									if (value.length > 15) {
										return 'Phone number cannot exceed 15 digits'
									}
									return true
								},
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

					{/* Gender */}
					<div className='relative'>
						<label className='text-text'>Gender</label>
						<input
							type='text'
							{...register('gender', { required: 'Gender is required' })}
							readOnly
							placeholder='Select...'
							onClick={() =>
								setOpenDropdown(openDropdown === 'gender' ? null : 'gender')
							}
							className='w-full border border-text rounded-md p-2 cursor-pointer bg-white'
						/>
						<ChevronDown
							className='absolute right-3 top-9 text-gray-500 pointer-events-none'
							size={18}
						/>
						{errors.gender && (
							<p className='text-red-500 text-sm'>
								{errors.gender.message as string}
							</p>
						)}
						<ul
							ref={genderDropdownRef}
							className={`absolute w-full top-16 mt-1 border border-gray-300 bg-white rounded-md shadow-lg z-10 ${
								openDropdown === 'gender' ? '' : 'hidden'
							}`}
						>
							{genderOptions.map((opt, i) => (
								<li
									key={i}
									onClick={() => {
										setValue('gender', opt, { shouldValidate: true })
										setOpenDropdown(null)
									}}
									className='px-3 py-2 cursor-pointer hover:bg-gray-100'
								>
									{opt}
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Address */}
				<div className='flex flex-col mt-6'>
					<label className='text-text'>Address</label>
					<input
						{...register('address', {
							required: 'Address is required',
							pattern: {
								value: /^[A-Za-z0-9\s,.-/#]+$/,
								message: 'Address contains invalid characters',
							},
						})}
						type='text'
						className='border border-text rounded-md p-2'
					/>
					{errors.address && (
						<p className='text-red-500 text-sm'>{errors.address.message}</p>
					)}
				</div>
			</div>

			{/* ---------------- Education ---------------- */}
			<div className='relative mt-14'>
				<h1 className='text-2xl md:text-3xl text-primary font-semibold text-center pb-10'>
					Education
				</h1>
				<button
					type='button'
					className='absolute right-10 top-0'
					onClick={() => append({ degree: '', institution: '', year: '' })}
				>
					<Plus size={32} />
				</button>

				{fields.map((field, i) => (
					<div
						key={field.id}
						className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 relative'
					>
						{/* Degree */}
						<div className='flex flex-col'>
							<input
								placeholder='Degree'
								{...register(`education.${i}.degree` as const, {
									required: 'Degree is required',
								})}
								className='border border-text rounded-md p-2'
							/>
							{errors.education?.[i]?.degree && (
								<p className='text-red-500 text-sm'>
									{errors.education[i]?.degree?.message}
								</p>
							)}
						</div>

						{/* Institution */}
						<div className='flex flex-col'>
							<input
								placeholder='Institution'
								{...register(`education.${i}.institution` as const, {
									required: 'Institution is required',
								})}
								className='border border-text rounded-md p-2'
							/>
							{errors.education?.[i]?.institution && (
								<p className='text-red-500 text-sm'>
									{errors.education[i]?.institution?.message}
								</p>
							)}
						</div>

						{/* Year */}
						<div className='flex flex-col'>
							<input
								type='date'
								{...register(`education.${i}.year` as const, {
									required: 'Year is required',
									validate: (value) => {
										const today = new Date()
										const selected = new Date(value)
										if (selected > today) {
											return 'Year cannot be in the future'
										}
										return true
									},
								})}
								className='border border-text rounded-md p-2'
							/>
							{errors.education?.[i]?.year && (
								<p className='text-red-500 text-sm'>
									{errors.education[i]?.year?.message}
								</p>
							)}
						</div>

						{/* Remove button (don't show for first education entry) */}
						{i > 0 && (
							<button
								type='button'
								onClick={() => remove(i)}
								className='absolute right-0 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700'
								title='Remove education entry'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M3 6h18'></path>
									<path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'></path>
									<path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'></path>
								</svg>
							</button>
						)}
					</div>
				))}
			</div>

			{/* ---------------- Experience ---------------- */}
			<div className='relative mt-14'>
				<h1 className='text-2xl md:text-3xl text-primary font-semibold text-center pb-10'>
					Experience
				</h1>
				<button
					type='button'
					className='absolute right-10 top-0'
					onClick={() =>
						appendExperience({
							company: '',
							position: '',
							startDate: '',
							endDate: '',
							description: '',
						})
					}
				>
					<Plus size={32} />
				</button>

				{experienceFields.map((field, i) => (
					<div
						key={field.id}
						className='grid grid-cols-1 md:grid-cols-5 gap-6 mb-4 relative'
					>
						{/* Company */}
						<div className='flex flex-col'>
							<input
								placeholder='Company'
								{...register(`experience.${i}.company` as const, {
									required: 'Company is required',
								})}
								className='border border-text rounded-md p-2'
							/>
							{errors.experience?.[i]?.company && (
								<p className='text-red-500 text-sm'>
									{errors.experience[i]?.company?.message}
								</p>
							)}
						</div>

						{/* Position */}
						<div className='flex flex-col'>
							<input
								placeholder='Position'
								{...register(`experience.${i}.position` as const, {
									required: 'Position is required',
								})}
								className='border border-text rounded-md p-2'
							/>
							{errors.experience?.[i]?.position && (
								<p className='text-red-500 text-sm'>
									{errors.experience[i]?.position?.message}
								</p>
							)}
						</div>

						{/* Start Date */}
						<div className='flex flex-col'>
							<input
								type='date'
								placeholder='Start Date'
								{...register(`experience.${i}.startDate` as const, {
									required: 'Start date is required',
									validate: (value) => {
										const today = new Date()
										const selected = new Date(value)
										if (selected > today) {
											return 'Start date cannot be in the future'
										}
										return true
									},
								})}
								className='border border-text rounded-md p-2'
							/>
							{errors.experience?.[i]?.startDate && (
								<p className='text-red-500 text-sm'>
									{errors.experience[i]?.startDate?.message}
								</p>
							)}
						</div>

						{/* End Date */}
						<div className='flex flex-col'>
							<input
								type='date'
								placeholder='End Date'
								{...register(`experience.${i}.endDate` as const, {
									required: 'End date is required',
									validate: (value, formValues) => {
										const startDate = formValues.experience[i].startDate

										if (!startDate) return true // If no start date, can't compare

										const start = new Date(startDate)
										const end = new Date(value)

										if (end < start) {
											return 'End date cannot be before start date'
										}
										return true
									},
								})}
								className='border border-text rounded-md p-2'
							/>
							{errors.experience?.[i]?.endDate && (
								<p className='text-red-500 text-sm'>
									{errors.experience[i]?.endDate?.message}
								</p>
							)}
						</div>

						{/* Description */}
						<div className='flex flex-col'>
							<input
								placeholder='Description'
								{...register(`experience.${i}.description` as const, {
									required: 'Description is required',
									maxLength: {
										value: 200,
										message: 'Description cannot exceed 200 characters',
									},
								})}
								className='border border-text rounded-md p-2'
							/>
							{errors.experience?.[i]?.description && (
								<p className='text-red-500 text-sm'>
									{errors.experience[i]?.description?.message}
								</p>
							)}
						</div>

						{/* Remove button (don't show for first experience entry) */}
						{i > 0 && (
							<button
								type='button'
								onClick={() => removeExperience(i)}
								className='absolute right-0 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700'
								title='Remove experience entry'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M3 6h18'></path>
									<path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'></path>
									<path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'></path>
								</svg>
							</button>
						)}
					</div>
				))}
			</div>

			{/* ---------------- Skills ---------------- */}
			<div className='mt-14'>
				<h1 className='text-2xl md:text-3xl text-primary font-semibold text-center pb-6'>
					Skills <span className='text-red-500 text-sm'>*</span>
				</h1>

				{/* Skills input and add button */}
				<div className='flex gap-2 mb-4'>
					<input
						type='text'
						value={newSkill}
						placeholder='Add skill...'
						onChange={(e) => setNewSkill(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter' && newSkill.trim()) {
								e.preventDefault()
								const updatedSkills = [...watch('skills'), newSkill.trim()]
								setValue('skills', updatedSkills, { shouldValidate: true })
								setNewSkill('')
								clearErrors('skills')
							}
						}}
						className='border rounded-md p-2 flex-1 border-text'
					/>
					<button
						type='button'
						onClick={() => {
							if (newSkill.trim()) {
								const updatedSkills = [...watch('skills'), newSkill.trim()]
								setValue('skills', updatedSkills, { shouldValidate: true })
								setNewSkill('')
								clearErrors('skills')
							}
						}}
						className='bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 transition-colors'
					>
						Add
					</button>
				</div>

				{/* Display skills as tags */}
				<div className='flex flex-wrap gap-2 mb-2'>
					{watch('skills').map((skill, i) => (
						<div
							key={i}
							className='px-3 py-1 bg-gray-200 rounded-md flex items-center group hover:bg-gray-300 transition-colors'
						>
							<span>{skill}</span>
							<button
								type='button'
								className='ml-2 text-gray-500 hover:text-red-500'
								onClick={() => {
									const updatedSkills = watch('skills').filter(
										(_, idx) => idx !== i
									)
									setValue('skills', updatedSkills, {
										shouldValidate: updatedSkills.length === 0,
									})
								}}
							>
								✕
							</button>
						</div>
					))}
				</div>

				{/* Show error message if skills validation fails */}
				{errors.skills && (
					<p className='text-red-500 text-sm'>
						{errors.skills.message as string}
					</p>
				)}
			</div>

			{/* ---------------- Cover Letter ---------------- */}
			<div className='mt-14'>
				<h1 className='text-2xl md:text-3xl text-primary font-semibold text-center pb-6'>
					Cover Letter <span className='text-red-500 text-sm'>*</span>
				</h1>
				<textarea
					{...register('coverLetter', {
						required: 'Cover letter is required',
						maxLength: {
							value: 1000,
							message: 'Cover letter cannot exceed 1000 characters',
						},
					})}
					className={`w-full border ${
						errors.coverLetter ? 'border-red-500 bg-red-50' : 'border-text'
					} border-dotted rounded-md p-3`}
					rows={5}
					placeholder='Write your cover letter...'
				></textarea>
				{errors.coverLetter && (
					<p className='text-red-500 text-sm mt-1'>
						{errors.coverLetter.message}
					</p>
				)}
				<p className='text-gray-500 text-xs mt-1 text-right'>
					Max 1000 characters
				</p>
			</div>

			{/* ---------------- CV Upload ---------------- */}
			<div className='mt-14'>
				<h1 className='text-2xl md:text-3xl text-primary font-semibold text-center pb-6'>
					Upload CV <span className='text-red-500 text-sm'>*</span>
				</h1>
				<div
					className={`${
						errors.cvFile ? 'border-red-500 bg-red-50' : 'border-text'
					} border rounded-md p-2`}
				>
					<input
						type='file'
						accept='.pdf,.doc,.docx,.png'
						{...register('cvFile', { required: 'CV file is required' })}
						onChange={(e) => {
							const file = e.target.files?.[0] || null
							setValue('cvFile', file, { shouldValidate: true })

							// Update React Hook Form validation
							if (!file) {
								setError('cvFile', {
									type: 'required',
									message: 'CV file is required',
								})
							} else {
								clearErrors('cvFile')
							}
						}}
						className='w-full'
					/>
				</div>
				{errors.cvFile && (
					<p className='text-red-500 text-sm mt-1'>{errors.cvFile.message}</p>
				)}
				<p className='text-gray-500 text-xs mt-1'>
					Accepted formats: PDF, DOC, DOCX, PNG
				</p>
			</div>

			{/* Submit */}
			<div className='mt-10 flex justify-end'>
				<button
					type='submit'
					className='bg-blue-500 text-white font-light py-3 px-6 hover:bg-purple-900 rounded-md transition mr-4'
				>
					Submit
				</button>
			</div>
		</form>
	)
}

export default CareerForm

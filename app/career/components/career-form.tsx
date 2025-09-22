'use client'
import FirebaseUtils from '@/lib/firestore-utils'
import { CheckCircle, ChevronDown, Loader, Plus } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { motion } from 'framer-motion'												

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
type PersonalInfo = {
	firstName: string
	lastName: string
	email: string
	dob: string
	phone: string
	address: string
	gender: string
}

type FormData = {
	personalInfo: PersonalInfo
	education: Education[]
	experience: Experience[]
	skills: string[]
	coverLetterFile: File | null
	cvFile: File | null
}

// Custom File Upload Component
interface FileUploadProps {
	onFileChange: (file: File | null) => void
	file: File | null
	accept: string
	error?: string
}

const CustomFileUpload = ({
	onFileChange,
	file,
	accept,
	error,
}: FileUploadProps) => {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0] || null
		onFileChange(selectedFile)
	}

	const handleDivClick = () => {
		fileInputRef.current?.click()
	}

	return (
		<div
			className={`relative border-2 border-dashed rounded-lg p-8 cursor-pointer transition-colors
				${error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'} 
				${file ? 'bg-gray-50' : 'bg-white'}`}
			onClick={handleDivClick}
		>
			<input
				ref={fileInputRef}
				type='file'
				accept={accept}
				onChange={handleFileChange}
				className='hidden'
			/>

			{file ? (
				<div className='flex flex-col items-center justify-center space-y-2'>
					<Image
						src='/svg/file.svg'
						alt='Document'
						width={56}
						height={56}
						className='opacity-100 filter brightness-50'
					/>
					<p className='text-sm text-gray-800 text-center font-semibold'>
						{file.name}
					</p>
					<p className='text-xs text-gray-600'>
						{(file.size / 1024 / 1024).toFixed(2)} MB
					</p>
					<p className='text-xs text-blue-600 hover:text-blue-800 font-medium'>
						Click to change file
					</p>
				</div>
			) : (
				<div className='flex flex-col items-center justify-center space-y-2'>
					<Image
						src='/svg/file.svg'
						alt='Upload document'
						width={48}
						height={48}
						className='opacity-30'
					/>
					<p className='text-sm text-gray-500 text-center'>
						Click to upload file
					</p>
					<p className='text-xs text-gray-400'>
						Accepted formats: PDF, DOC, DOCX, PNG (Max size: 5MB)
					</p>
				</div>
			)}
		</div>
	)
}

const CareerForm = () => {
	const {
		register,
		handleSubmit,
		control,
		setValue,
		reset,
		watch,
		formState: { errors },
		clearErrors,
		setError,
	} = useForm<FormData>({
		defaultValues: {
			personalInfo: {
				firstName: '',
				lastName: '',
				email: '',
				dob: '',
				phone: '',
				address: '',
				gender: '',
			},
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
	const [showSuccess, setShowSuccess] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const genderOptions = ['Male', 'Female', 'Not Specified']
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
		console.log('Form Submitted:', data)
		setIsLoading(true) // Start loading

		// Log the CV file details for debugging
		if (data.cvFile) {
			console.log('CV File:', {
				name: data.cvFile.name,
				size: data.cvFile.size,
				type: data.cvFile.type,
			})
		}

		// Log the Cover Letter file details for debugging
		if (data.coverLetterFile) {
			console.log('Cover Letter File:', {
				name: data.coverLetterFile.name,
				size: data.coverLetterFile.size,
				type: data.coverLetterFile.type,
			})
		}

		// Prepare data for Firebase (without files)
		const applicationData = {
			personalInfo: data.personalInfo,
			education: data.education,
			experience: data.experience,
			skills: data.skills,
			cvFileName: data.cvFile?.name || '',
			coverLetterFileName: data.coverLetterFile?.name || '',
			createdAt: new Date(),
		}

		FirebaseUtils.addDocument('career', applicationData)
			.then(() => {
				setIsLoading(false) // Stop loading
				setShowSuccess(true)
				reset()
			})
			.catch((error) => {
				setIsLoading(false) // Stop loading on error
				console.error('Error submitting career application:', error)
				alert('Error submitting application. Please try again.')
			})
	}

	return (
		<motion.form
			onSubmit={handleSubmit(onSubmit)}
			initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true , amount: 0.2}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
			className='lg:relative lg:bottom-20 lg:max-w-[60%] rounded-xl shadow-xl lg:mx-auto lg:mb-40 py-10 px-6 lg:px-30 z-100 bg-white'
			noValidate
		>
			{/* ✅ Success Modal */}
			{showSuccess && (
				<div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
					<div className='bg-white rounded-2xl shadow-xl p-6 text-center w-[300px]'>
						<div className='flex justify-center mb-4'>
							<div className='bg-green-100 p-4 rounded-full'>
								<CheckCircle className='h-10 w-10 text-green-600' />
							</div>
						</div>
						<h3 className='text-lg font-semibold text-gray-800 mb-2'>
							Application Submitted!
						</h3>
						<p className='text-gray-600 mb-4'>
							Your job application has been successfully submitted.
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
			<h1 className='font-bold mt-18 md:mt-0 text-4xl md:text-6xl text-primary text-center pb-12 border-b border-text'>
				Job Application Create
			</h1>
			{/* ---------------- Personal Info ---------------- */}
			<div className='mt-10'>
				<h1 className='text-2xl md:text-3xl text-primary font-semibold text-center pb-10'>
					Personal Info
				</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
					{/* First Name */}
					<div className='flex flex-col'>
						<label className='text-text'>First Name</label>
						<input
							{...register('personalInfo.firstName', {
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
						{errors.personalInfo?.firstName && (
							<p className='text-red-500 text-sm'>
								{errors.personalInfo.firstName.message}
							</p>
						)}
					</div>

					{/* Last Name */}
					<div className='flex flex-col'>
						<label className='text-text'>Last Name</label>
						<input
							{...register('personalInfo.lastName', {
								required: 'Last name is required',
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

						{errors.personalInfo?.lastName && (
							<p className='text-red-500 text-sm'>
								{errors.personalInfo.lastName.message}
							</p>
						)}
					</div>

					{/* Email */}
					<div className='flex flex-col'>
						<label className='text-text'>Email</label>
						<input
							{...register('personalInfo.email', {
								required: 'Email is required',
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // basic email regex
									message: 'Invalid email format',
								},
							})}
							type='email'
							className='border border-text rounded-md p-2'
						/>
						{errors.personalInfo?.email && (
							<p className='text-red-500 text-sm'>
								{errors.personalInfo.email.message}
							</p>
						)}
					</div>

					{/* DOB */}
					<div className='flex flex-col'>
						<label className='text-text'>Date of Birth</label>
						<input
							{...register('personalInfo.dob', {
								required: 'Date of Birth is required',
								validate: (value) => {
									const today = new Date()
									today.setHours(0, 0, 0, 0) // reset time
									const selectedDate = new Date(value as string)
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
						{errors.personalInfo?.dob && (
							<p className='text-red-500 text-sm'>
								{errors.personalInfo.dob.message}
							</p>
						)}
					</div>

					{/* Phone */}
					<div>
						<label className='text-text'>Phone</label>
						<Controller
							control={control}
							name='personalInfo.phone'
							rules={{
								required: 'Phone number is required',
								validate: (value) => {
									if (!/^\d+$/.test(value || '')) {
										return 'Phone number must contain only digits'
									}
									if ((value || '').length < 6) {
										return 'Phone number must be at least 10 digits'
									}
									if ((value || '').length > 15) {
										return 'Phone number cannot exceed 15 digits'
									}
									return true
								},
							}}
							render={({ field }) => (
								<PhoneInput
									inputClass='p-4 py-5 border border-text rounded-md max-w-full'
									country='pk'
									value={field.value || ''}
									onChange={field.onChange}
								/>
							)}
						/>
						{errors.personalInfo?.phone && (
							<p className='text-red-500 text-sm'>
								{errors.personalInfo.phone.message}
							</p>
						)}
					</div>

					{/* Gender */}
					<div className='relative'>
						<label className='text-text'>Gender</label>
						<input
							type='text'
							{...register('personalInfo.gender', {
								required: 'Gender is required',
							})}
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
						{errors.personalInfo?.gender && (
							<p className='text-red-500 text-sm'>
								{errors.personalInfo.gender.message as string}
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
										setValue('personalInfo.gender', opt, {
											shouldValidate: true,
										})
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
						{...register('personalInfo.address', {
							required: 'Address is required',
							pattern: {
								value: /^[A-Za-z0-9\s,.-/#]+$/,
								message: 'Address contains invalid characters',
							},
						})}
						type='text'
						className='border border-text rounded-md p-2'
					/>
					{errors.personalInfo?.address && (
						<p className='text-red-500 text-sm'>
							{errors.personalInfo.address.message}
						</p>
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
				<Controller
					control={control}
					name='coverLetterFile'
					rules={{
						required: 'Cover letter file is required',
						validate: (file) => {
							if (!file) return 'Cover letter file is required'

							// Check file size (5MB limit)
							const maxSize = 5 * 1024 * 1024 // 5MB in bytes
							if (file.size > maxSize) {
								return 'File size must be less than 5MB'
							}

							// Check file type
							const allowedTypes = [
								'application/pdf',
								'application/msword',
								'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
								'image/png',
							]
							if (!allowedTypes.includes(file.type)) {
								return 'Only PDF, DOC, DOCX, and PNG files are allowed'
							}

							return true
						},
					}}
					render={({ field }) => (
						<CustomFileUpload
							onFileChange={(file) => {
								field.onChange(file)
								if (file) {
									clearErrors('coverLetterFile')
								}
							}}
							file={field.value}
							accept='.pdf,.doc,.docx,.png'
							error={errors.coverLetterFile?.message}
						/>
					)}
				/>
				{errors.coverLetterFile && (
					<p className='text-red-500 text-sm mt-1'>
						{errors.coverLetterFile.message}
					</p>
				)}
			</div>

			{/* ---------------- CV Upload ---------------- */}
			<div className='mt-14'>
				<h1 className='text-2xl md:text-3xl text-primary font-semibold text-center pb-6'>
					Upload CV <span className='text-red-500 text-sm'>*</span>
				</h1>
				<Controller
					control={control}
					name='cvFile'
					rules={{
						required: 'CV file is required',
						validate: (file) => {
							if (!file) return 'CV file is required'

							// Check file size (5MB limit)
							const maxSize = 5 * 1024 * 1024 // 5MB in bytes
							if (file.size > maxSize) {
								return 'File size must be less than 5MB'
							}

							// Check file type
							const allowedTypes = [
								'application/pdf',
								'application/msword',
								'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
								'image/png',
							]
							if (!allowedTypes.includes(file.type)) {
								return 'Only PDF, DOC, DOCX, and PNG files are allowed'
							}

							return true
						},
					}}
					render={({ field }) => (
						<CustomFileUpload
							onFileChange={(file) => {
								field.onChange(file)
								if (file) {
									clearErrors('cvFile')
								}
							}}
							file={field.value}
							accept='.pdf,.doc,.docx,.png'
							error={errors.cvFile?.message}
						/>
					)}
				/>
				{errors.cvFile && (
					<p className='text-red-500 text-sm mt-1'>{errors.cvFile.message}</p>
				)}
			</div>

			{/* Submit */}
			<div className='mt-10 flex justify-end'>
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
		</motion.form>
	)
}

export default CareerForm

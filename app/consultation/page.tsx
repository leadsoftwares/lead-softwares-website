/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import CustomButton from '@/components/custom-btn'

const page = () => {
	const [hearValue, setHearValue] = useState('')
	const [industryValue, setIndustryValue] = useState('')
	const [budgetValue, setBudgetValue] = useState('')
	const [regionValue, setRegionValue] = useState('')

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
	return (
		<div className='w-full overflow-hidden select-none'>
			<div className='w-full h-100 bg-bg'>
				{/* About us title */}
				<div className='w-full h-full flex flex-col justify-center items-center lg:pb-10 gap-10'>
					<div className='w-[90%] lg:w-full text-center title text-primary font-bold text-4xl lg:text-6xl'>
						Let&apos;s discuss your project
					</div>
				</div>
			</div>
			{/*  */}
			<div className='lg:relative lg:bottom-20 lg:max-w-[60%] rounded-xl shadow-xl lg:mx-auto lg:mb-40 py-10 px-6 lg:px-30 z-100 bg-white'>
				<h1 className='text-3xl md:text-4xl text-primary font-semibold text-center pb-10'>
					Schedule a Free Consultation
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div className='flex flex-col text-text'>
						<label htmlFor='FirstName'>First Name</label>
						<input type='text' className='border border-text rounded-md p-2' />
					</div>
					<div className='flex flex-col text-text'>
						<label htmlFor='FirstName'>Last Name</label>
						<input type='text' className='border border-text rounded-md p-2' />
					</div>
					<div className='flex flex-col text-text'>
						<label htmlFor='FirstName'>Email</label>
						<input type='text' className='border border-text rounded-md p-2' />
					</div>
					<div className='flex flex-col text-text'>
						<label htmlFor='FirstName'>Company / Organization (Optional)</label>
						<input type='text' className='border border-text rounded-md p-2' />
					</div>
					<div>
						<label className='text-text' htmlFor='Phone'>
							Phone
						</label>
						<PhoneInput
							inputClass='p-4 py-5 border border-text rounded-md max-w-full'
							country={'pk'}
							value={''}
							onChange={(phone) => console.log(phone)}
						/>
					</div>
					<div className='relative'>
						<label className='text-text' htmlFor=''>
							How did you hear about us?
						</label>
						<input
							type='text'
							value={hearValue}
							readOnly
							placeholder='Select...'
							onClick={(e) => {
								e.currentTarget.nextElementSibling?.classList.toggle('hidden')
							}}
							className='w-full border border-text rounded-md p-2 cursor-pointer bg-white'
						/>

						{/* Dropdown */}
						<ul className='absolute w-full top-16 hidden mt-1 border border-gray-300 bg-white rounded-md shadow-lg z-10'>
							{hear.map((opt, i) => (
								<li
									key={i}
									onClick={(e) => {
										setHearValue(opt)
										e.currentTarget.parentElement?.classList.add('hidden')
                                        
									}}
									className='px-3 py-2 cursor-pointer hover:bg-gray-100'
								>
									{opt}
								</li>
							))}
						</ul>
					</div>
					<div className='relative'>
						<label className='text-text' htmlFor=''>
							Industry
						</label>
						<input
							type='text'
							value={industryValue}
							readOnly
							placeholder='Select...'
							onClick={(e) => {
								e.currentTarget.nextElementSibling?.classList.toggle('hidden')
							}}
							className='w-full border border-text rounded-md p-2 cursor-pointer bg-white'
						/>

						{/* Dropdown */}
						<ul className='absolute w-full top-16 hidden mt-1 border border-gray-300 bg-white rounded-md shadow-lg z-10'>
							{industries.map((ind, index) => (
								<li
									key={index}
									onClick={(e) => {
										setIndustryValue(ind)
										e.currentTarget.parentElement?.classList.add('hidden')
									}}
									className='px-3 py-2 cursor-pointer hover:bg-gray-100'
								>
									{ind}
								</li>
							))}
						</ul>
					</div>
					<div className='relative'>
						<label className='text-text' htmlFor=''>
							Estimated Budget
						</label>
						<input
							type='text'
							value={budgetValue}
							readOnly
							placeholder='Select...'
							onClick={(e) => {
								e.currentTarget.nextElementSibling?.classList.toggle('hidden')
							}}
							className='w-full border border-text rounded-md p-2 cursor-pointer bg-white'
						/>

						{/* Dropdown */}
						<ul className='absolute w-full top-16 hidden mt-1 border border-gray-300 bg-white rounded-md shadow-lg z-10'>
							{budgets.map((ind, index) => (
								<li
									key={index}
									onClick={(e) => {
										setBudgetValue(ind)
										e.currentTarget.parentElement?.classList.add('hidden')
									}}
									className='px-3 py-2 cursor-pointer hover:bg-gray-100'
								>
									{ind}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='pt-6 space-y-8'>
					<div className='relative'>
						<label className='text-text' htmlFor=''>
							Region
						</label>
						<input
							type='text'
							value={regionValue}
							readOnly
							placeholder='Select...'
							onClick={(e) => {
								e.currentTarget.nextElementSibling?.classList.toggle('hidden')
							}}
							className='w-full border border-text rounded-md p-2 cursor-pointer bg-white'
						/>

						{/* Dropdown */}
						<ul className='absolute w-full top-16 hidden mt-1 border border-gray-300 bg-white rounded-md shadow-lg z-10'>
							{regions.map((ind, index) => (
								<li
									key={index}
									onClick={(e) => {
										setRegionValue(ind)
										e.currentTarget.parentElement?.classList.add('hidden')
									}}
									className='px-3 py-2 cursor-pointer hover:bg-gray-100'
								>
									{ind}
								</li>
							))}
						</ul>
					</div>
					<div className='flex flex-col'>
						<label className='text-text' htmlFor='FirstName'>
							Project Details
						</label>
						<input
							type='text'
							className='border border-text rounded-md h-20 p-2'
							placeholder='your project details'
						/>
					</div>
				</div>
				<div className='mt-6 flex justify-end'>
					<CustomButton title='Submit' />
				</div>
			</div>
		</div>
	)
}

export default page

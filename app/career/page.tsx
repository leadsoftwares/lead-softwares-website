/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import CareerImg from '@/public/png/Lead software pages Images/Careers.png'
import { useEffect } from 'react'
import NavbarTitle from '../about/components/NavbarTitle'
import Form from './components/career-form'

const page = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
	}, [])

	return (
		<div className='w-full overflow-hidden select-none'>
			<NavbarTitle
				title='Career'
				src={CareerImg}
				desc='Join Lead Softwares and be part of a team that’s shaping the future of technology. We’re always looking for passionate, creative, and driven individuals to grow with us.'
			/>
			<Form />
		</div>
	)
}

export default page

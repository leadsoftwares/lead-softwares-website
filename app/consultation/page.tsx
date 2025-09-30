'use client'

import Form from '@/app/consultation/components/form'
import SectionBg from '@/public/png/Lead software pages Images/Portfolio 2.png'
import { useEffect } from 'react'
import NavbarTitle from '../about-us/components/NavbarTitle'

const Page = () => {
	// Automatically scroll to top when page loads
	useEffect(() => {
		// Immediate scroll to top
		window.scrollTo(0, 0)

		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
	}, [])

	return (
		<div className='w-full overflow-hidden'>
			<NavbarTitle title="Let's discuss your Project" src={SectionBg} />

			<Form />
		</div>
	)
}

export default Page

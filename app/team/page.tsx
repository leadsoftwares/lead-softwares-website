'use client'
import TeamSection from '@/components/team-section'
import TeamImg from '@/public/png/Lead software pages Images/Our Team.png'
import { useEffect } from 'react'
import NavbarTitle from '../about/components/NavbarTitle'
import Team from './components/team'
const page = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		window.scrollTo(0, 0)
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
	}, [])
	return (
		<div className='w-full overflow-hidden select-none'>
			<NavbarTitle
				title='Our Team'
				src={TeamImg}
				desc='Meet the team behind Lead Softwares — a group of passionate developers, designers, and innovators dedicated to delivering technology that drives business success.'
			/>
			<Team />
			<TeamSection />
		</div>
	)
}

export default page

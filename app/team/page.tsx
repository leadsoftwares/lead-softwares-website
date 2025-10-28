'use client'
import TeamSection from '@/components/team-section'
// import TeamImg from '@/public/png/Lead software pages Images/Our Team.png'
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
				// src={TeamImg}
				bgSrc="url('https://res.cloudinary.com/db0mj1uoe/image/upload/v1761631866/Website/Banners/Team_Banner_p4kvni.png')"
				desc='Meet the minds of Lead Softwares — innovators turning ideas into business success'
				className='relative max-h-[70vh]'
			/>
			<Team />
			<TeamSection />
		</div>
	)
}

export default page

'use client'

import SectionBG from '@/public/jpeg/team-section-bg.jpg'
import AliIMG from '@/public/png/Lead Software Team Images Transparent/Ali Haider.png'
import KhuramIMG from '@/public/png/Lead Software Team Images Transparent/Khuram.png'
import LuisIMG from '@/public/png/Lead Software Team Images Transparent/Luis.png'
import SufiyanIMG from '@/public/png/Lead Software Team Images Transparent/Sufian.png'
import AhmadIMG from '@/public/png/Lead Software Team Images/Ahmad.png'
import JunaidIMG from "@/public/png/Lead Software Team Images Transparent/Juniad.png"
import ShahzadIMG from "@/public/png/Lead Software Team Images Transparent/Shehzad.png"
import HassanIMG from "@/public/png/Lead Software Team Images Transparent/Hassan.png"
import ZaeemIMG from "@/public/png/Lead Software Team Images Transparent/Zaeem.png"
import FazeelIMG from "@/public/png/Lead Software Team Images Transparent/Fazeel.png"
import RomanIMG from "@/public/png/Lead Software Team Images Transparent/Roman.png"

import { motion } from 'framer-motion'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const teamMembers = [
	{
		id: 1,
		name: 'Kane Shiffert',
		role: 'Developer',
		img: KhuramIMG,
		socials: [
			{ href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
			{ href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
			{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
		],
	},
	{
		id: 2,
		name: 'Jasi Duffy',
		role: 'CEO Founder',
		img: LuisIMG,
		socials: [
			{ href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
			{ href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
			{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
		],
	},
	{
		id: 3,
		name: 'Sara William',
		role: 'CEO Founder',
		img: AliIMG ,
		socials: [
			{ href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
			{ href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
			{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
		],
	},
	{
		id: 4,
		name: 'Elizabet Kate',
		role: 'CEO Founder',
		img: SufiyanIMG,
		socials: [
			{ href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
			{ href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
			{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
		],
	},
]
const teamStaff = [
	{
		id: 1,
		name: 'Marta Smith',
		role: 'Product Designer',
		img: AhmadIMG,
	},
	{
		id: 2,
		name: 'Thomas Smith',
		role: 'Developer',
		img: JunaidIMG,
	},
	{
		id: 3,
		name: 'Marta Smith',
		role: 'Product Designer',
		img: ZaeemIMG,
	},
	{
		id: 4,
		name: 'Thomas Smith',
		role: 'Developer',
		img: HassanIMG,
	},
	{
		id: 5,
		name: 'Marta Smith',
		role: 'Product Designer',
		img: ShahzadIMG,
	},
	{
		id: 6,
		name: 'Thomas Smith',
		role: 'Developer',
		img: FazeelIMG,
	},
	{
		id: 7,
		name: 'Thomas Smith',
		role: 'Developer',
		img: RomanIMG,
	},
]

export default function TeamSection() {
	const [active, setActive] = useState<number | null>(null)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}

		checkIsMobile()
		window.addEventListener('resize', checkIsMobile)

		return () => window.removeEventListener('resize', checkIsMobile)
	}, [])

	return (
		<section
			className='w-full py-16'
			style={{
				backgroundImage: `url(${SectionBG.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<header>
				<h1 className='text-3xl md:text-6xl text-primary font-bold text-center mb-20'>
					Meet Our Team
				</h1>
			</header>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-4 h-550 sm:h-700 md:h-300 lg:h-[500px] overflow-hidden rounded-xl'>
				{teamMembers.map((member, index) => (
					<div
						key={member.id}
						onMouseEnter={() => !isMobile && setActive(index)}
						onMouseLeave={() => !isMobile && setActive(null)}
						className={`relative flex-1 mx-2 transition-[flex] duration-800 ease-in-out
              ${!isMobile && active === index ? 'flex-[2]' : 'flex-[1]'}`}
					>
						<Image
							src={member.img}
							alt={member.name}
							fill
							className='object-cover transition-transform duration-800 ease-in-out rounded-2xl grayscale hover:grayscale-0'
						/>

						{/* Overlay */}
						<motion.div
							initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
							animate={
								isMobile
									? { opacity: 1, y: 0 }
									: active === index
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 50 }
							}
							transition={
								isMobile ? { duration: 0 } : { duration: 0.4, ease: 'easeOut' }
							}
							className='absolute bottom-5 left-5 bg-black/70 text-white p-4 rounded-xl'
						>
							<div className='flex items-center justify-between gap-20'>
								<motion.div
									initial={
										isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
									}
									animate={
										isMobile
											? { opacity: 1, x: 0 }
											: active === index
											? { opacity: 1, x: 0 }
											: { opacity: 0, x: -30 }
									}
									transition={
										isMobile
											? { duration: 0 }
											: { duration: 0.5, delay: 0.1, ease: 'easeOut' }
									}
								>
									<motion.span
										className='block text-sm text-gray-200'
										initial={
											isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
										}
										animate={
											isMobile
												? { opacity: 1, y: 0 }
												: active === index
												? { opacity: 1, y: 0 }
												: { opacity: 0, y: 30 }
										}
										transition={
											isMobile
												? { duration: 0 }
												: { duration: 0.3, delay: 0.2, ease: 'easeOut' }
										}
									>
										{member.role}
									</motion.span>
									<motion.h5
										className='text-lg font-semibold'
										initial={
											isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
										}
										animate={
											isMobile
												? { opacity: 1, y: 0 }
												: active === index
												? { opacity: 1, y: 0 }
												: { opacity: 0, y: 25 }
										}
										transition={
											isMobile
												? { duration: 0 }
												: { duration: 0.4, delay: 0.3, ease: 'easeOut' }
										}
									>
										{member.name}
									</motion.h5>
								</motion.div>
								<motion.div
									className='flex gap-6'
									initial={
										isMobile
											? { opacity: 1, scale: 1 }
											: { opacity: 0, scale: 0.8 }
									}
									animate={
										isMobile
											? { opacity: 1, scale: 1 }
											: active === index
											? { opacity: 1, scale: 1 }
											: { opacity: 0, scale: 0.8 }
									}
									transition={
										isMobile
											? { duration: 0 }
											: { duration: 0.4, delay: 0.4, ease: 'easeOut' }
									}
								>
									{member.socials.map((social, i) => {
										const IconComponent = social.icon
										return (
											<motion.a
												key={i}
												href={social.href}
												target='_blank'
												rel='noreferrer'
												className='hover:text-blue-400 transition-colors duration-200'
												title={social.label}
												initial={
													isMobile
														? { opacity: 1, y: 0 }
														: { opacity: 0, y: 10 }
												}
												animate={
													isMobile
														? { opacity: 1, y: 0 }
														: active === index
														? { opacity: 1, y: 0 }
														: { opacity: 0, y: 10 }
												}
												transition={
													isMobile
														? { duration: 0 }
														: {
																duration: 0.3,
																delay: 0.5 + i * 0.1,
																ease: 'easeOut',
														  }
												}
												whileHover={isMobile ? {} : { scale: 1.2 }}
												whileTap={isMobile ? {} : { scale: 0.9 }}
											>
												<IconComponent size={18} />
											</motion.a>
										)
									})}
								</motion.div>
							</div>
						</motion.div>
					</div>
				))}
			</div>
			<div>
				<h3 className='text-center text-3xl md:text-4xl font-bold text-primary mt-20'>
					Here are the most talented Staff
				</h3>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8 md:gap-20 max-w-[80%] mx-auto mt-10 md:mt-30 px-4'>
				{teamStaff.map((staff) => (
					<div key={staff.id} className='rounded-xl overflow-hidden'>
						<div className='border-6 md:border-12 border-blue-700 rounded-full p-2'>
							<div className='relative rounded-full w-100% h-100% aspect-square overflow-hidden'>
								<Image
									src={staff.img}
									alt={staff.name}
									fill
									className='object-cover w-94 h-94 rounded-full grayscale hover:grayscale-0 transition-all duration-400'
								/>
							</div>
						</div>
						<div className='p-4 text-center space-y-2'>
							<h3 className='text-3xl font-bold text-primary'>{staff.name}</h3>
							<p className='text-lg text-gray-500'>{staff.role}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

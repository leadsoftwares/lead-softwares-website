'use client'

import { Box, Check, Medal} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import  CustomButton from '../../components/custom-btn'
import Partners from '../../components/partners-components'
import AboutusImg from '../../public/jpeg/about-us-thumbnail.jpeg'
import AboutGrowth3 from '../../public/png/about-Growth3.png'
import AboutGrowth1 from '../../public/webp/about-Growth1.webp'
import AboutGrowth2 from '../../public/webp/about-Growth2.webp'
import AboutGrowth4 from '../../public/webp/about-Growth4.webp'
import RoadMap from '../../public/svg/roadmap.svg'
import NavbarTitle from './components/NavbarTitle'
import TeamSection from '../../components/team-section'
import Link from 'next/link'
import ProjectHistory from '@/components/project-history'
import AboutSectionImg from "@/public/png/Lead software pages Images/about uss.png"


const About = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	return (
		<div className='w-full overflow-hidden'>
			{/* navbar + title */}
			<NavbarTitle title='About Us' src={AboutSectionImg} />
			{/*  */}
			<div className='w-full gap-20 md:gap-40 flex flex-col lg:flex-row items-center px-10 lg:px-30 py-30'>
				<div className='space-y-10 mt-10 md:mt-0 lg:w-[40%]'>
					<div className='title text-primary font-semibold text-4xl'>
						Growth strategies to be effective & competitive
					</div>
					<div className='text-zinc-500 text-lg font-light'>
						Everything we do and dream up has a solid design impact. We create
						human-centered enterprise software that has the polished, snappy
						feel of the best consumer apps.
					</div>
					<Link href={'/consultation'}>
					<CustomButton title='Get Started' />
					</Link>
				</div>

				<div className='lg:w-[60%] h-full max-w-3xl mx-auto rounded-4xl overflow-hidden shadow-2xl'>
					{!isPlaying ? (
						<div
							className='relative cursor-pointer'
							onClick={() => setIsPlaying(true)}
						>
							<Image
								src={AboutusImg}
								alt='Video Preview'
								className='w-full lg:h-100 shadow-3xl'
							/>
							{/* get the hell out of here  */}
						</div>
					) : (
						<div className='relative w-full aspect-video'>
							<iframe
								className='w-full h-full'
								src='https://www.youtube.com/embed/XHOmBV4js_E?autoplay=1'
								title='Video Placeholder'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowFullScreen
							></iframe>
						</div>
					)}
				</div>
			</div>
			{/*  */}
			<div className='bg-bg py-25 mx-4'>
				{/* header */}
				<div className='space-y-3'>
					{/* subtitle */}
					<div className='text-sm text-lightBlue text-center'>
						It’s Time for a Blockchain Revolution
					</div>
					{/* title */}
					<div className='text-4xl lg:text-5xl text-primary lg:w-[45%] leading-10 md:leading-14 font-semibold text-center mx-auto'>
						Developing sustainable and innovative blockchain solutions
					</div>
				</div>
				{/* blockchain detail */}
				<div className='w-full flex flex-col lg:flex-row items-center gap-40 px-8 lg:px-25 mt-40'>
					{/* left side (boxes side) */}
					<div className='space-y-8 lg:space-y-4'>
						{/* box 1 */}
						<div className='bg-white md:gap-4 flex flex-col items-center lg:flex-row space-x-3 w-full lg:w-120 rounded-2xl shadow-lg p-6'>
							<div className='w-14 h-14 lg:w-20 lg:h-12 mb-6 lg:mb-15 flex justify-center mx-auto lg:mx-0 items-center rounded-full bg-blue-100'>
								<Image src={RoadMap} alt='RoadMap' />
							</div>
							<div className='space-y-4'>
								<div className='title text-center lg:text-start text-2xl text-primary font-semibold'>
									Strategy & Business
								</div>
								<div className='desc text-center lg:text-start text-zinc-400'>
									We design business models and growth strategies to be
									effective and competitive.
								</div>
							</div>
						</div>
						{/* box 2 */}
						<div className='bg-white md:gap-4 flex flex-col items-center lg:flex-row space-x-3 w-full lg:w-120 rounded-2xl shadow-lg p-6'>
							<div className='w-14 h-14 lg:w-20 lg:h-12 mb-6 lg:mb-15 flex justify-center mx-auto lg:mx-0 items-center rounded-full bg-green-100'>
								<Box className='text-green-500' />
							</div>
							<div className='space-y-4'>
								<div className='title text-center lg:text-start text-2xl text-primary font-semibold'>
									Product Design
								</div>
								<div className='desc text-center lg:text-start text-zinc-400'>
									We design business models and growth strategies to be
									effective and competitive.
								</div>
							</div>
						</div>
						{/* box 3 */}
						<div className='bg-white flex flex-col md:gap-4 items-center lg:flex-row space-x-3 w-full lg:w-120 rounded-2xl shadow-lg p-6'>
							<div className='w-14 h-14 lg:w-20 lg:h-12 mb-6 lg:mb-15 flex justify-center mx-auto lg:mx-0 items-center rounded-full bg-red-100'>
								<Medal className='text-red-400' />
							</div>
							<div className='space-y-4'>
								<div className='title text-center lg:text-start text-2xl text-primary font-semibold'>
									Futures Research
								</div>
								<div className='desc text-center lg:text-start text-zinc-400'>
									We design business models and growth strategies to be
									effective and competitive.
								</div>
							</div>
						</div>
					</div>
					{/* right side */}
					<div className='w-full'>
						<div className='lg:w-[70%] flex flex-col gap-8'>
							{/* title */}
							<div className='text-primary text-4xl font-semibold leading-12'>
								Strategies that get you on the path to success
							</div>
							{/* desc */}
							<div className='text-zinc-400 text-lg'>
								Through an in-depth knowledge of all industrial sectors and the
								application of approaches such as Lean Strategy, and Business
								Design, we prepare organizations to welcome change, to be ready
								to evolve rapidly while remaining competitive in the market.
							</div>
							{/* btn */}
							<Link href={'/consultation'} className='flex gap-4'>
								<CustomButton title='Get Started' />
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* Our History Section */}
			<div className='w-full'>
				{/* Project History */}
				<ProjectHistory/>
			</div>
			{/* Growth Section */}
			<div className='mx-4 bg-bg py-30 px-8 lg:px-30 flex flex-col lg:flex-row gap-40'>
				{/* Left Side */}
				<div className='lg:w-[35%] space-y-10'>
					{/* title */}
					<div className='text-4xl text-primary font-semibold'>
						Growth strategies to be effective & competitive
					</div>
					{/* desc */}
					<div className='text-lg text-text font-light'>
						Money should never sit still. Achieve capital efficiency with our
						apps: as a leading DeFi yield aggregator, we offer first-rate yield
						optimization and risk teaching strategies. Get the best yield by
						using, integrating or building on top of Idle’s products.
					</div>
					{/* lists */}
					<div className='flex flex-col lg:flex-row gap-20 text-lg font-light'>
						<ul className='text-text space-y-4'>
							<li className='flex items-center gap-2'>
								<span>
									<Check color='green' size={18} />
								</span>
								Boost SEO
							</li>
							<li className='flex items-center gap-2'>
								<span>
									<Check color='green' size={18} />
								</span>
								Visual Reviews
							</li>
							<li className='flex items-center gap-2'>
								<span>
									<Check color='green' size={18} />
								</span>
								Social Sharing
							</li>
						</ul>
						<ul className='text-text space-y-4'>
							<li className='flex items-center gap-2'>
								<span>
									<Check color='green' size={18} />
								</span>
								Manage Buying
							</li>
							<li className='flex items-center gap-2'>
								<span>
									<Check color='green' size={18} />
								</span>
								Buying Protection
							</li>
							<li className='flex items-center gap-2'>
								<span>
									<Check color='green' size={18} />
								</span>
								Virtual Card
							</li>
						</ul>
					</div>
				</div>
				{/* Right Side */}
				<div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10'>
					<Image className='shadow-xl rounded-4xl' src={AboutGrowth1} alt='G' />
					<Image
						className='shadow-xl rounded-4xl lg:relative bottom-10'
						src={AboutGrowth2}
						alt='G'
					/>
					<Image className='shadow-xl rounded-4xl' src={AboutGrowth3} alt='G' />
					<Image
						className='shadow-xl rounded-4xl lg:relative bottom-10'
						src={AboutGrowth4}
						alt='G'
					/>
				</div>
			</div>
			{/* Team Section */}
			<TeamSection/>
			{/* partnership logos */}
			<Partners />
			{/* email section */}
			<div
				style={{
					background:
						'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #7209b7 100%)',
				}}
				className='mx-4 lg:mx-20 py-30 space-y-9 mb-10 rounded-xl'
			>
				<div className='w-[90%] lg:w-[60%] mx-auto text-white font-semibold text-4xl lg:text-5xl text-center'>
					Receive the latest technology & business news in your inbox
				</div>
				<div className='w-full text-center md:space-x-4 space-y-4'>
					<input
						className='bg-white py-3 w-60 lg:w-80 px-3 rounded'
						type='text'
						placeholder='Your Email Address'
					/>
					<CustomButton title='Sign Up' />
				</div>
			</div>
		</div>
	)
}

export default About

'use client'

import JourneyScroll from '@/app/about-us/components/JourneyScroll'
import SectionBG from '@/public/jpeg/about-us-section-bg.jpg'
import WhyIMG from '@/public/png/about-us-why-section-img.png'
import AboutSectionImg from '@/public/png/Lead software pages Images/about uss.png'
import { motion } from 'framer-motion'
import { Box, Check, Medal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../../components/custom-btn'
import Partners from '../../components/partners-components'
import RoadMap from '../../public/svg/roadmap.svg'
import NavbarTitle from './components/NavbarTitle'
import Team from './components/team'
import WhyChooseThree from './components/whychooseus'

const About = () => {
	return (
		<div className='w-full overflow-hidden'>
			<NavbarTitle title='About Us' src={AboutSectionImg} />
			<WhyChooseThree />
			<div className='bg-bg py-15 md:py-25 mt-4 lg:mt-0'>
				<motion.div
					initial={{ opacity: 0, x: 0 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 2, ease: 'easeOut' }}
					className='space-y-3'
				>
					<div className='text-sm text-lightBlue text-center'>
						It’s Time for a Blockchain Revolution
					</div>
					<div className='text-3xl lg:text-5xl text-primary xl:w-[45%] leading-10 md:leading-14 font-semibold text-center mx-auto'>
						Developing sustainable and innovative blockchain solutions
					</div>
				</motion.div>
				<div className='w-full flex flex-col lg:flex-row items-center justify-center gap-10 xl:gap-40 px-8 lg:px-25 mt-14 lg:mt-40'>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='space-y-8 lg:space-y-4'
					>
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
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='xl:w-[35%] '
					>
						<div className='flex flex-col gap-8'>
							<div className='text-primary text-3xl md:text-4xl font-semibold md:leading-12'>
								Strategies that get you on the path to success
							</div>
							<div className='text-zinc-400 md:text-lg'>
								We help organizations embrace change and stay competitive
								through Lean Strategy, Business Design, and deep industry
								expertise.
							</div>
							<Link href={'/consultation'} className='lg:flex gap-4 hidden'>
								<CustomButton title='Get Started' />
							</Link>
						</div>
					</motion.div>
				</div>
			</div>

			<JourneyScroll />

			<div
				style={{
					backgroundImage: `url(${SectionBG.src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
				className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'
			>
				{/* <div className='absolute inset-0'>
					<div className='absolute inset-0 bg-black/50' />
				</div> */}
				<div className='relative z-10 text-center text-black px-6'>
					<p className='flex items-center justify-center gap-2 mb-3 bg-blue-800 text-white w-30 py-2 rounded-md mx-auto'>
						<span className='h-2 w-2 bg-white rounded'></span>
						<span className='font-medium tracking-wider uppercase text-sm'>
							About Us
						</span>
					</p>
					<h1 className='text-3xl md:text-6xl font-bold leading-tight space-y-2'>
						<span className='block'>Discover who we are</span>
						<span className='block'>what drives us every day</span>
					</h1>

					<p className='mt-4 text-zinc-500 md:text-lg font-medium'>
						We&apos;re driven by passion, innovation, and a commitment to making
						a positive impact
					</p>
				</div>
			</div>
			{/*  */}
			<div className='text-white md:pb-20'>
				<div className='bg-[#edf3ff] mx-auto md:w-[66vw] flex flex-col gap-12 px-8 py-8 md:px-12'>
					<div className='w-full flex justify-center'>
						<Image
							src={WhyIMG}
							alt='Why collaborate with us'
							className='object-contain'
							priority
						/>
					</div>

					<div className='w-full'>
						<p className='text-zinc-800 font-bold text-2xl mb-3'>
							Why you need to Collaborate with Us?
						</p>
						<div className='space-y-4 text-zinc-500 font-medium'>
							<p className='block md:hidden'>
								We deliver innovative, tailored IT solutions that drive your
								business growth. Our expert team combines technology and
								experience to create scalable, seamless, and results-driven
								outcomes.
							</p>
							<p className='hidden md:block'>
								We offer unparalleled expertise and innovative IT solutions
								tailored to meet the unique needs of your business. Our team of
								professionals combines cutting-edge technology with years of
								experience to deliver results that drive success and growth. We
								prioritize understanding your objectives and challenges to
								provide customized, scalable solutions that ensure seamless
								integration and sustainable outcomes.
							</p>
						</div>
						<div className='w-full h-[1px] bg-zinc-200 my-6' />
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-y-4 max-w-md'>
							{[
								'Tailored IT Solutions',
								'Scalability & Flexibility',
								'Expertise & Innovation',
								'Seamless Integration',
							].map((item, i) => (
								<div key={i} className='flex items-center gap-3'>
									<div className='bg-blue-800 p-0.5 rounded'>
										<Check className='text-white w-4 h-4' />
									</div>
									<p className='text-zinc-500 font-medium'>{item}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			{/*  */}
			<Team />
			<Partners />
		</div>
	)
}

export default About

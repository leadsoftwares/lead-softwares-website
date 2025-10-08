'use client'

import JourneyScroll from '@/app/about-us/components/JourneyScroll'
import AboutSectionImg from '@/public/png/Lead software pages Images/about uss.png'
import { motion } from 'framer-motion'
import { Box, Check, Medal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import CustomButton from '../../components/custom-btn'
import Partners from '../../components/partners-components'
import AboutusImg from '../../public/jpeg/about-us-thumbnail.jpeg'
import AboutGrowth3 from '../../public/png/about-Growth3.png'
import RoadMap from '../../public/svg/roadmap.svg'
import AboutGrowth1 from '../../public/webp/about-Growth1.webp'
import AboutGrowth2 from '../../public/webp/about-Growth2.webp'
import AboutGrowth4 from '../../public/webp/about-Growth4.webp'
import NavbarTitle from './components/NavbarTitle'
import Team from './components/team'
import WhyChooseThree from './components/whychooseus'

const lists = [
	{ name: 'Boost SEO'},
	{ name: 'Visual Reviews'},
	{ name: 'Social Sharing'},
]

const About = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	return (
		<div className='w-full overflow-hidden'>
			<NavbarTitle title='About Us' src={AboutSectionImg} />
			<JourneyScroll />
			<div className='w-full gap-4 md:gap-40 flex flex-col lg:flex-row items-center px-10 lg:px-30 lg:py-30'>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='space-y-10 mt-10 md:mt-0 lg:w-[40%]'
				>
					<div className='title text-primary font-semibold text-3xl md:text-4xl'>
						Growth strategies to be effective & competitive
					</div>
					<div className='text-zinc-500 md:text-lg font-light'>
						Everything we do and dream up has a solid design impact. We create
						human-centered enterprise software that has the polished, snappy
						feel of the best consumer apps.
					</div>
					<Link className='hidden lg:block' href={'/consultation'}>
						<CustomButton title='Get Started' />
					</Link>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='lg:w-[60%] h-full max-w-3xl mx-auto rounded-4xl overflow-hidden shadow-2xl'
				>
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
				</motion.div>
			</div>

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
				<div className='w-full flex flex-col lg:flex-row items-center gap-10 xl:gap-40 px-8 lg:px-25 mt-14 lg:mt-40'>
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
						className='w-full'
					>
						<div className='xl:w-[70%] flex flex-col gap-8'>
							<div className='text-primary text-3xl md:text-4xl font-semibold md:leading-12'>
								Strategies that get you on the path to success
							</div>
							<div className='text-zinc-400 md:text-lg'>
								Through an in-depth knowledge of all industrial sectors and the
								application of approaches such as Lean Strategy, and Business
								Design, we prepare organizations to welcome change, to be ready
								to evolve rapidly while remaining competitive in the market.
							</div>
							<Link href={'/consultation'} className='lg:flex gap-4 hidden'>
								<CustomButton title='Get Started' />
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
			<div className='py-8 lg:py-30 px-8 lg:px-16 xl:px-30 flex flex-col lg:flex-row gap-10 md:gap-30 xl:gap-40'>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='lg:w-[55%] xl:w-[35%] space-y-10'
				>
					<div className='text-3xl md:text-4xl text-primary font-semibold'>
						Growth strategies to be effective & competitive
					</div>
					<div className='md:text-lg text-text font-light'>
						Money should never sit still. Achieve capital efficiency with our
						apps: as a leading DeFi yield aggregator, we offer first-rate yield
						optimization and risk teaching strategies. Get the best yield by
						using, integrating or building on top of Idle&apos;s products.
					</div>
					<div className='flex flex-col lg:flex-row gap-16 md:gap-20 md:text-lg font-light'>
							<ul className='text-text space-y-2 md:space-y-4'>
							{lists.map((list , index) => (
									<li key={index} className='flex items-center gap-2'>
									<span>
										<Check color='green' size={18} />
									</span>
									{list.name}
								</li>
								))}
							</ul>
						
						<ul className='text-text space-y-2 md:space-y-4'>
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
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10'
				>
					<Image
						className='lg:shadow-xl bg-white rounded-2xl w-80 md:w-full md:h-50 lg:rounded-2xl'
						src={AboutGrowth1}
						alt='G'
					/>
					<Image
						className='lg:shadow-xl bg-white rounded-2xl w-80 md:w-full md:h-50 lg:rounded-2xl lg:relative bottom-10'
						src={AboutGrowth2}
						alt='G'
					/>
					<Image
						className='lg:shadow-xl bg-white rounded-2xl w-80 md:w-full md:h-50 lg:rounded-2xl'
						src={AboutGrowth3}
						alt='G'
					/>
					<Image
						className='lg:shadow-xl bg-white rounded-2xl w-80 md:w-full md:h-50 lg:rounded-2xl lg:relative bottom-10'
						src={AboutGrowth4}
						alt='G'
					/>
				</motion.div>
			</div>
			<Team />
			<Partners />
			<WhyChooseThree />
		</div>
	)
}

export default About

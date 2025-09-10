import React from 'react'
import Image from 'next/image'
import Curveline from '@/public/gruy30-removebg-preview.png'
import LandingIMG from '@/public/png/portfolio2.png'
import { motion } from 'framer-motion'
import Typewriter from '@/components/typewriter'
import CustomButton from '@/components/custom-btn'

const Banner = () => {
  return (
		<div className='relative overflow-hidden'>
				<Image className='absolute top-0 z-100 opacity-5' width={1800} height={1200} src={Curveline} alt="" />
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='relative w-full h-[85vh] bg-[#120330] text-white gap-10'
				>
					{/* <div className='absolute top-10'>
					<Image width={200} height={200} src={LogoWhite} alt="" />
				</div> */}
					<div className='lg:px-20 py-20 lg:py-40 text-white space-y-14 flex flex-col items-center md:items-start'>
						<div className='px-20 font-bold text-4xl lg:text-7xl '>
							<h1>
								Empower your{' '}
								<span>
									{' '}
									<Typewriter
										words={['Technology', 'Startup', 'SaaS', 'Software']}
									/>
								</span>
							</h1>
							<h1>Website with Lead Software</h1>
						</div>
						<p className='px-20 w-[60%] text-zinc-300 text-lg'>
							An incredible theme for modern Software and SaaS businesses. With
							a sleek and professional design, customizable layouts, and
							integrations with popular plugins.
						</p>
						<div className='px-20 btns flex gap-5'>
							<CustomButton title={'Get Started'} />
							<button className='hidden md:block bg-white text-blue-500 py-2 px-4 rounded-md cursor-pointer hover:bg-zinc-100'>
								See All Demos
							</button>
						</div>
					</div>
				</motion.section>
				{/* Column 1 (scroll UP) */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='hidden md:block absolute top-0 right-60 overflow-hidden h-full transform -rotate-12 z-101'
				>
					<div className='flex flex-col gap-6 animate-scroll-up opacity-20'>
						{[...Array(2)].map((_, dup) => (
							<div key={dup} className='flex flex-col gap-6'>
								<Image
									className='rounded-lg'
									width={400}
									height={300}
									src={LandingIMG}
									alt='1'
								/>
								<Image
									className='rounded-lg'
									width={400}
									height={300}
									src={LandingIMG}
									alt='2'
								/>
								<Image
									className='rounded-lg'
									width={400}
									height={300}
									src={LandingIMG}
									alt='3'
								/>
								<Image
									className='rounded-lg'
									width={400}
									height={300}
									src={LandingIMG}
									alt='4'
								/>
							</div>
						))}
					</div>
				</motion.div>
				{/* Column 2 (scroll DOWN) */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='hidden md:block absolute top-0 -right-50 transform -rotate-12 h-full overflow-hidden z-110'
				>
					<div className='flex flex-col gap-6 animate-scroll-down opacity-30'>
						{[...Array(2)].map((_, dup) => (
							<div key={dup} className='flex flex-col gap-6'>
								<Image
									className='rounded-lg'
									width={400}
									height={300}
									src={LandingIMG}
									alt='1'
								/>
								<Image
									className='rounded-lg'
									width={400}
									height={300}
									src={LandingIMG}
									alt='2'
								/>
								<Image
									className='rounded-lg'
									width={400}
									height={300}
									src={LandingIMG}
									alt='3'
								/>
								<Image
									className='rounded-lg'
									width={400}
									height={300}
									src={LandingIMG}
									alt='4'
								/>
							</div>
						))}
					</div>
				</motion.div>
			</div>
  )
}

export default Banner
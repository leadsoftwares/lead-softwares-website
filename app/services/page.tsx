'use client'
import ServicesImg from '@/public/png/Lead software pages Images/Portfolio 1.png'
import { Check } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import CustomButton from '../../components/custom-btn'
import Partners from '../../components/partners-components'
import Strategy from '../../components/strategy'
import NavbarTitle from '../about-us/components/NavbarTitle'
import { Logos1, Logos2, ServiceData } from './Data/services-data'
import SectionMobiles from "@/public/png/services-mob-img.png"
const Services = () => {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		const handleVisibilityChange = () => {
			setIsVisible(!document.hidden)
		}

		document.addEventListener('visibilitychange', handleVisibilityChange)
		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [])

	return (
		<div className='w-full overflow-hidden'>
			<NavbarTitle title='Services' src={ServicesImg} />
			<div className='px-2 py-10 md:py-30'>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeInOut' }}
					className='text-center w-full space-y-2 mx-auto'
				>
					<div className='subTitle text-blue-500 text-md lg:text-xs px-2'>
						We work mainly with digital agencies and software companies
					</div>
					<div className='sm:w-[80%] lg:w-[55%] mx-auto text-3xl lg:text-5xl lg:leading-14 font-semibold text-primary'>
						Outstanding software and services that solve your hassle
					</div>
				</motion.div>
				<div className='flex flex-col md:flex-row flex-wrap xl:grid xl:grid-cols-3 mx-auto max-w-6xl items-center gap-4 md:gap-6 justify-center lg:px-10 xl:px-20 mt-20'>
					{ServiceData.map((service, i) => (
						<div
							key={i}
							className='p-6 md:p-8 border mx-auto border-zinc-300 rounded-xl w-80 h-88 md:h-96 space-y-6 hover:bg-zinc-100 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between'
						>
							<motion.div
								initial={{ opacity: 0, x: 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.8, ease: 'easeOut' }}
								className='space-y-6'
							>
								<Image
									width={40}
									height={40}
									src={service.icon}
									alt={service.title}
								/>
								<div className='font-bold text-xl'>{service.title}</div>
								<p className='text-zinc-500 flex-grow'>{service.text}</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.8, ease: 'easeOut' }}
							>
								<Link href={'/consultation'}>
									<CustomButton title='Learn More' />
								</Link>
							</motion.div>
						</div>
					))}
				</div>
			</div>

			<div className='overflow-hidden py-8 bg-white'>
				<motion.h2
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeIn' }}
					className='px-6 text-center text-3xl md:text-6xl font-semibold mb-16 md:mb-26 text-primary'
				>
					Technologies that we work with
				</motion.h2>
				<div
					className={`mb-20 inline-flex items-center ${
						isVisible ? 'animate-marquee' : ''
					}`}
					style={{
						whiteSpace: 'nowrap',
					}}
				>
					{Logos1.map((logo, index) => (
						<div
							key={`logo-${index}`}
							className='mx-12 flex-shrink-0 hover:scale-110 transition-transform duration-300'
						>
							<Image
								width={120}
								height={80}
								src={logo.src}
								alt={logo.alt}
								className='object-contain'
							/>
						</div>
					))}
					{Logos1.map((logo, index) => (
						<div
							key={`logo-${index}`}
							className='mx-12 flex-shrink-0 hover:scale-110 transition-transform duration-300'
						>
							<Image
								width={120}
								height={80}
								src={logo.src}
								alt={logo.alt}
								className='object-contain'
							/>
						</div>
					))}
					{Logos1.map((logo, index) => (
						<div
							key={`logo-${index}`}
							className='mx-12 flex-shrink-0 hover:scale-110 transition-transform duration-300'
						>
							<Image
								width={120}
								height={80}
								src={logo.src}
								alt={logo.alt}
								className='object-contain'
							/>
						</div>
					))}
				</div>
				<div
					className={`inline-flex items-center ${
						isVisible ? 'animate-marquee2' : ''
					}`}
					style={{
						whiteSpace: 'nowrap',
					}}
				>
					{Logos2.map((logo, index) => (
						<div
							key={`logo-${index}`}
							className='mx-12 flex-shrink-0 hover:scale-110 transition-transform duration-300'
						>
							<Image
								width={120}
								height={80}
								src={logo.src}
								alt={logo.alt}
								className='object-contain'
							/>
						</div>
					))}
					{Logos2.map((logo, index) => (
						<div
							key={`logo-dup-${index}`}
							className='mx-12 flex-shrink-0 hover:scale-110 transition-transform duration-300'
						>
							<Image
								width={120}
								height={80}
								src={logo.src}
								alt={logo.alt}
								className='object-contain'
							/>
						</div>
					))}
					{Logos2.map((logo, index) => (
						<div
							key={`logo-dup-${index}`}
							className='mx-12 flex-shrink-0 hover:scale-110 transition-transform duration-300'
						>
							<Image
								width={120}
								height={80}
								src={logo.src}
								alt={logo.alt}
								className='object-contain'
								style={{ maxHeight: '80px' }}
							/>
						</div>
					))}
				</div>
			</div>

			<div className='-mt-10 lg:mt-0'>
				<Strategy />
			</div>
			<Partners />
			<section className='relative lg:pb-24 overflow-hidden '>
				<div className='container flex flex-col lg:flex-row justify-between items-center xl:w-[65%] mx-auto px-6 lg:px-6 relative bg-[#edf3ff]'>
					<div className='relative w-full rounded-3xl overflow-hidden'>
						<div className='relative z-10 p-10 md:p-16 lg:p-20'>
							<p className='flex items-center justify-center gap-2 mb-3 bg-blue-800 text-white w-40 py-2 rounded-md'>
								<span className='h-2 w-2 bg-white rounded'></span>
								<span className='font-medium tracking-wider uppercase text-sm'>
									Your Benefits
								</span>
							</p>
							<h2 className='text-3xl md:text-5xl font-semibold text-zinc-800 mb-4 leading-snug'>
								How our services outshine <br className='hidden md:block' />
								the competition.
							</h2>
							<p className='text-lg text-zinc-500 font-medium mb-10'>
								Our services stand out for their quality, customization,{' '}
								<br className='hidden md:block' />
								and dedication to delivering the best results.
							</p>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-5 w-max'>
								{[
									'Customized Solution',
									'Advanced Technology',
									'Virtual Technology',
									'Scalable and Cost-Effective',
								].map((item, i) => (
									<div
										key={i}
										className='flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300'
									>
										<div className='w-6 h-6 flex items-center justify-center rounded-full bg-blue-800'>
											<Check className='text-white w-4 h-4' />
										</div>
										<p className='text-zinc-600 font-medium'>{item}</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div>
						<Image
								width={600}
								height={600}
								src={SectionMobiles}
								alt={"SectionMobiles"}
							/>
					</div>
				</div>
			</section>
			
		</div>
	)
}

export default Services

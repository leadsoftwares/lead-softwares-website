'use client'
import CustomerReviews from '@/components/customerReviews'
import ServicesImg from '@/public/png/Lead software pages Images/Portfolio 1.png'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import CustomButton from '../../components/custom-btn'
import Partners from '../../components/partners-components'
import Strategy from '../../components/strategy'
import { ServiceData } from './Data/services-data'
import NavbarTitle from '../about-us/components/NavbarTitle'
import FAQ from './components/faq'
import { Logos1, Logos2 } from './Data/services-data'


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

			<div className='overflow-hidden py-8 bg-white mt-10 md:mt-0'>
				<motion.h2
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeIn' }}
					className='px-6 text-center text-3xl md:text-6xl font-semibold mb-26 text-primary'
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
					{/*  */}
					{Logos1.map((logo, index) => (
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
			<div className='px-2 py-30'>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeInOut' }}
					className='text-center w-full space-y-2 mx-auto'
				>
					<div className='subTitle text-blue-500 lg:text-xs px-2'>
						We work mainly with digital agencies and software companies
					</div>
					<div className='lg:w-[55%] mx-auto text-3xl lg:text-5xl lg:leading-14 font-semibold text-primary'>
						Outstanding software and services that solve your hassle
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeInOut' }}
					className='flex flex-col lg:flex-row gap-10 justify-center px-2 lg:px-20 mt-20'
				>
					{ServiceData.map((service, i) => (
						<div
							key={i}
							className='p-8 border border-zinc-300 rounded-xl space-y-6 hover:shadow-2xl transition-all duration-500'
						>
							<Image src={service.icon} alt={service.title} />
							<div className='font-bold'>{service.title}</div>
							<p className='text-zinc-500'>{service.text}</p>
							<Link href={'/consultation'}>
								<CustomButton title='Learn More' />
							</Link>
						</div>
					))}
				</motion.div>
			</div>
			<div className='-mt-30 lg:mt-0'>
				<Strategy />
			</div>
			<CustomerReviews />
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='pt-10 md:pt-30 px-4 lg:px-25'
			>
				<div className='flex flex-col lg:flex-row items-center lg:justify-between'>
					<div className='space-y-8'>
						<div className='text-3xl lg:text-5xl font-bold text-primary text-center'>
							Frequently asked questions
						</div>
						<p className='px-8 lg:px-0 text-text text-center'>
							We hope this section will help you better understand the issues
							related to software
						</p>
					</div>
					<Link href={'/contact'} className='mt-8 lg:mt-0'>
						<CustomButton title='Contact Us' />
					</Link>
				</div>
				<div>
					<FAQ />
				</div>
			</motion.div>
			<Partners />

			{/*  */}
			{/* <div className="bg-[url('https://preview.codeless.co/converta/default/wp-content/uploads/2023/03/bg-footer-sub-min.png')] bg-cover bg-center py-30 text-center space-y-6 mx-4 lg:mx-25 rounded-3xl mb-10">
				<div className='text-white text-3xl md:text-5xl font-bold'>
					Subscribe to Our Newsletter
				</div>
				<p className='w-[90%] lg:w-[35%] text-white md:text-lg mx-auto'>
					Receive the latest technology & business news in your inbox. Select
					the newsletters you&apos;d like to receive.
				</p>
				<div className='w-full text-center space-y-4 md:space-x-4'>
					<input
						className='bg-white py-3 w-60 lg:w-80 px-3 rounded'
						type='text'
						placeholder='Your Email Address'
					/>
					<CustomButton title='Sign Up' />
				</div>
			</div> */}
		</div>
	)
}

export default Services

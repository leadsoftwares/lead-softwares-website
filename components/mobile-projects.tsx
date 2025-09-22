'use client'

import Crazy from '@/public/png/Crazy By Rasel App M.png'
import TigerIT from '@/public/png/mobile-3.png'
import Barq from '@/public/png/mobile-4.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
const MobileProjects = () => {
	const [activeSlide, setActiveSlide] = useState(0)
	const sliderRef = useRef<HTMLDivElement>(null)
	const ProjectView = [
		{
			id: 1,
			img: TigerIT,
			title: 'Tiger IT',
			href: 'https://tigerit.app/',
			alt: 'Tiger IT',
		},
		{
			id: 2,
			img: Barq,
			title: 'Barq-e-Shop',
			href: 'https://www.barqeshop.com/',
			alt: 'Quotelyn',
		},
		{
			id: 3,
			img: Crazy,
			title: 'Crazy by Rasel',
			href: 'https://www.crazybyrasel.com/',
			alt: 'Lawraze',
		},
	]

	const handleSlideChange = (index: number) => {
		setActiveSlide(index)
		if (sliderRef.current) {
			const slideWidth = sliderRef.current.offsetWidth
			sliderRef.current.scrollTo({
				left: slideWidth * index,
				behavior: 'smooth',
			})
		}
	}

	// Handle scroll events to update active slide indicator
	useEffect(() => {
		const handleScroll = () => {
			if (sliderRef.current) {
				const scrollPosition = sliderRef.current.scrollLeft
				const slideWidth = sliderRef.current.offsetWidth

				// Calculate which slide is most visible
				const newActiveSlide = Math.round(scrollPosition / slideWidth)
				const maxSlide = ProjectView.length - 1

				// Only update if actually changed
				if (
					newActiveSlide !== activeSlide &&
					newActiveSlide >= 0 &&
					newActiveSlide <= maxSlide
				) {
					setActiveSlide(newActiveSlide)
				}
			}
		}

		const sliderElement = sliderRef.current
		if (sliderElement) {
			// Use passive listener for better scroll performance
			sliderElement.addEventListener('scroll', handleScroll, { passive: true })

			// Also listen for touchend to catch the final position after swipe
			sliderElement.addEventListener('touchend', handleScroll, {
				passive: true,
			})

			return () => {
				sliderElement.removeEventListener('scroll', handleScroll)
				sliderElement.removeEventListener('touchend', handleScroll)
			}
		}
	}, [activeSlide, ProjectView.length])
	return (
		<div className='w-full py-10'>
			{/* Project History - Desktop View */}
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='lg:w-full justify-center hidden md:flex flex-wrap gap-8 mt-30 mx-4 lg:mx-0'
			>
				{ProjectView.map((project) => (
					<a
						key={project.id}
						href={project.href}
						target='_blank'
						className='relative space-y-6 group block w-fit'
					>
						{/* Wrapper for image + overlay */}
						<div className='relative rounded-xl md:rounded-4xl overflow-hidden'>
							<Image
								className='transition-transform duration-300 hover:shadow-2xl group-hover:scale-105'
								width={400}
								height={400}
								src={project.img}
								alt={project.alt}
							/>

							{/* Dark overlay */}
							<div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

							{/* Button on hover */}
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer'>
								<button className='border border-white text-white font-semibold py-2 px-6 rounded-xl cursor-pointer'>
									View
								</button>
							</div>
						</div>

						{/* Title below */}
						<div className='text-xl font-semibold text-primary'>
							{project.title}
						</div>
					</a>
				))}
			</motion.div>

			{/* Mobile Projects - Mobile View (Full-width Swipe Slider) */}
			<motion.div
				initial={{ opacity: 0, y: 80 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='md:hidden mt-8 w-full relative'
			>
				<div className='w-full overflow-x-hidden touch-pan-x'>
					<div
						ref={sliderRef}
						className='flex w-full snap-x snap-mandatory overflow-x-auto scrollbar-hide'
						style={{
							scrollSnapType: 'x mandatory',
							WebkitOverflowScrolling: 'touch', // For better iOS scroll performance
						}}
					>
						{ProjectView.map((project) => (
							<div
								key={project.id}
								className='w-full flex-shrink-0 flex-grow-0 snap-center px-6'
								style={{
									scrollSnapAlign: 'center',
									minWidth: '100%',
									maxWidth: '100%',
								}}
							>
								<a
									href={project.href}
									target='_blank'
									className='relative space-y-4 block w-full'
								>
									<div className='relative rounded-xl overflow-hidden'>
										<Image
											className='transition-transform duration-300'
											width={200}
											height={400}
											src={project.img}
											alt={project.alt}
											style={{
												width: '100%',
												height: 'auto',
												objectFit: 'cover',
											}}
										/>
									</div>
									<div className='text-xl font-semibold text-primary'>
										{project.title}
									</div>
								</a>
							</div>
						))}
					</div>
				</div>

				{/* Slide indicators - with active state */}
				<div className='flex justify-center mt-6 space-x-3'>
					{ProjectView.map((_, index) => (
						<button
							key={index}
							onClick={() => handleSlideChange(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								activeSlide === index
									? 'bg-primary scale-110'
									: 'bg-gray-300 hover:bg-gray-400'
							}`}
							aria-label={`Go to slide ${index + 1}`}
							aria-current={activeSlide === index ? 'true' : 'false'}
						/>
					))}
				</div>
			</motion.div>
		</div>
	)
}

export default MobileProjects

'use client'
import { motion } from 'motion/react'
import StrategyImage from '../public/webp/strategyIMG.webp'
import StrategyImage2 from '../public/webp/strategyIMG2.webp'
import StrategyImage3 from '../public/webp/strategyIMG3.webp'

import Image from 'next/image'

import { useState } from 'react'

const Strategy = () => {
	const [activeImage, setActiveImage] = useState(StrategyImage)
	const [isAnimating, setIsAnimating] = useState<boolean>(false)
	const [animationDirection, setAnimationDirection] = useState<
		'left' | 'right'
	>('left')

	// Define the order of images
	const images = [StrategyImage, StrategyImage2, StrategyImage3]

	const handleImageChange = (newImage: typeof StrategyImage) => {
		if (newImage === activeImage) return // Don't animate if same image

		// Determine animation direction based on current and new image index
		const currentIndex = images.indexOf(activeImage)
		const newIndex = images.indexOf(newImage)

		// If moving to a higher index (next), slide left to right
		// If moving to a lower index (previous), slide right to left
		const direction = newIndex > currentIndex ? 'right' : 'left'
		setAnimationDirection(direction)

		setIsAnimating(true)

		// After the exit animation completes, change image and start enter animation
		setTimeout(() => {
			setActiveImage(newImage)
			setIsAnimating(false)
		}, 250) // Half of the total animation duration
	}

	return (
		<div className='strategy border-b border-zinc-300 py-18 px-10 md:px-18 mt-60 lg:mt-0 w-full min-h-160 bg-[#F4F6FB]'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='header text-center w-full space-y-2 mx-auto'
			>
				<div className='subTitle text-blue-500 text-xs'>
					HELPING ENTREPRENEURS MAKE MORE MONEY
				</div>
				<div className='title text-4xl md:text-5xl md:leading-14 font-bold text-primary'>
					Customizing IT Solutions to Fit <br />
					Your Business Needs
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }} 
				transition={{ duration: 1, ease: 'easeOut' }}
				className='main w-full mt-18 flex flex-col lg:flex-row gap-18 lg:justify-center'
			>
				<div className='left'>
					<div className='boxes space-y-8'>
						{/* Box 1 */}
						<div
							onClick={() => handleImageChange(StrategyImage)}
							className={`box1 space-y-6 w-full lg:w-120 rounded-2xl p-6 cursor-pointer transition-all duration-100 hover:shadow-xl hover:scale-105 ${
								activeImage === StrategyImage
									? 'bg-white shadow-xl scale-105'
									: ''
							}`}
						>
							<div className='title text-2xl text-[#321270] font-semibold'>
								Assessment and Planning
							</div>
							<div className='desc text-zinc-400'>
								We Conduct thorough consultations to understand and document
								client requirements comprehensively.
							</div>
						</div>

						{/* Box 2 */}
						<div
							onClick={() => handleImageChange(StrategyImage2)}
							className={`box2 space-y-6 w-full lg:w-120 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
								activeImage === StrategyImage2 ? 'bg-white shadow-xl' : ''
							}`}
						>
							<div className='title text-2xl text-[#321270] font-semibold'>
								Implementation and Integration
							</div>
							<div className='desc text-zinc-400'>
								We Develop and rigorously test software applications, ensuring
								top-notch quality.
							</div>
						</div>

						{/* Box 3 */}
						<div
							onClick={() => handleImageChange(StrategyImage3)}
							className={`box3 space-y-6 w-full lg:w-120 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
								activeImage === StrategyImage3 ? 'bg-white shadow-lg' : ''
							}`}
						>
							<div className='title text-2xl text-[#321270] font-semibold'>
								Monitoring and Optimization
							</div>
							<div className='desc text-zinc-400'>
								We Conduct regular audits, scale infrastructure, and uphold
								industry standards for ongoing efficiency and excellence.
							</div>
						</div>
					</div>
				</div>
				{/* RIGHT SIDE */}
				<div className='right  w-full max-w-220'>
					<div className='box w-full h-100 lg:w-full lg:h-140 border-6 border-black rounded overflow-hidden relative'>
						<Image
							src={activeImage}
							alt='Strategy illustration'
							fill
							className={`object-cover transition-all duration-700 ease-in-out transform ${
								isAnimating
									? animationDirection === 'left'
										? 'translate-x-full opacity-0'
										: '-translate-x-full opacity-0'
									: 'translate-x-0 opacity-100'
							}`}
						/>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Strategy

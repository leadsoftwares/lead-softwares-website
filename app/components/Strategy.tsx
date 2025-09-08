'use client'
import StrategyImage from '@/public/webp/strategyIMG.webp'
import StrategyImage2 from '@/public/webp/strategyIMG2.webp'
import StrategyImage3 from '@/public/webp/strategyIMG3.webp'

import Image from 'next/image'

import { useState } from 'react'

const Strategy = () => {
	const [activeImage, setActiveImage] = useState(StrategyImage)
	const [isAnimating, setIsAnimating] = useState<boolean>(false)
	const [animationDirection, setAnimationDirection] = useState<
		'left' | 'right'
	>('left')

	// Define the order of images
	const images = [StrategyImage, StrategyImage2, StrategyImage3];

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
		<div className='strategy border-b border-zinc-300 py-18 px-10 md:px-17 mt-60 lg:mt-0 w-full min-h-160 bg-[#F4F6FB]'>
			<div className='header text-center w-full space-y-2 mx-auto'>
				<div className='subTitle text-blue-500 text-xs'>
					HELPING ENTREPRENEURS MAKE MORE MONEY
				</div>
				<div className='hidden lg:block title text-5xl leading-14 font-semibold text-[#321270]'>
					Unlimited cash back, zero fees, <br /> no credit check
				</div>
				<div className='block lg:hidden title text-3xl leading-10 font-semibold text-[#321270]'>
					Unlimited cash back, zero fees, no credit check
				</div>
			</div>
			<div className='main w-full mt-18 flex flex-col lg:flex-row gap-18'>
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
								Strategy & Business
							</div>
							<div className='desc text-zinc-400'>
								We design business models and growth strategies to be effective
								and competitive.
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
								Product Development
							</div>
							<div className='desc text-zinc-400'>
								We innovate and create new products tailored for growth and
								efficiency.
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
								Futures Research
							</div>
							<div className='desc text-zinc-400'>
								We explore trends and innovations to prepare businesses for
								tomorrow.
							</div>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE */}
				{/* RIGHT SIDE */}
				<div className='right'>
					<div className='box w-full h-100 lg:w-180 lg:h-140 border-6 border-black rounded overflow-hidden relative'>
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
			</div>
		</div>
	)
}

export default Strategy

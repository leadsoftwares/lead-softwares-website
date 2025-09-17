'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useAnimationControls } from 'motion/react'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface CarouselItem {
	id: string | number
	imgSrc: StaticImageData
	title?: string
	description?: string
}

interface CarouselProps {
	items: CarouselItem[]
	className?: string
	itemClassName?: string
	showTitle?: boolean
	showArrows?: boolean
	gapClass?: string // Changed from number to string class
	paddingClass?: string // Changed from number to string class
}

const CarouselComponent = ({
	items,
	className = '',
	itemClassName = '',
	showTitle = true,
	showArrows = true,
	gapClass = 'gap-4 md:gap-6 lg:gap-8', // Default responsive gap
	paddingClass = 'px-4 md:px-6 lg:px-10', // Default responsive padding
}: CarouselProps) => {
	const [width, setWidth] = useState(0)
	const [currentIndex, setCurrentIndex] = useState(0)
	const carousel = useRef<HTMLDivElement>(null)
	const controls = useAnimationControls()

	useEffect(() => {
		if (carousel.current) {
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
		}
	}, [carousel])

	const handleNext = () => {
		if (carousel.current) {
			const itemWidth = carousel.current.scrollWidth / items.length
			const nextIndex = Math.min(currentIndex + 1, items.length - 1)
			const nextPosition = -Math.min(nextIndex * itemWidth, width)

			controls.start({
				x: nextPosition,
				transition: { duration: 0.5, ease: 'easeInOut' },
			})

			setCurrentIndex(nextIndex)
		}
	}

	const handlePrev = () => {
		if (carousel.current) {
			const itemWidth = carousel.current.scrollWidth / items.length
			const prevIndex = Math.max(currentIndex - 1, 0)
			const prevPosition = -Math.min(prevIndex * itemWidth, width)

			controls.start({
				x: prevPosition,
				transition: { duration: 0.5, ease: 'easeInOut' },
			})

			setCurrentIndex(prevIndex)
		}
	}

	return (
		<div
			className={`relative ${paddingClass} mx-auto overflow-hidden ${className}`}
		>
			{/* Navigation Arrows */}
			{showArrows && items.length > 1 && (
				<>
					<button
						onClick={handlePrev}
						disabled={currentIndex === 0}
						className={`absolute left-2 md:left-4 lg:left-8 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 md:p-2 shadow-lg ${
							currentIndex === 0
								? 'opacity-50 cursor-not-allowed'
								: 'cursor-pointer'
						}`}
						aria-label='Previous slide'
					>
						<ChevronLeft className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary' />
					</button>
					<button
						onClick={handleNext}
						disabled={currentIndex === items.length - 1}
						className={`absolute right-2 md:right-4 lg:right-8 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 md:p-2 shadow-lg ${
							currentIndex === items.length - 1
								? 'opacity-50 cursor-not-allowed'
								: 'cursor-pointer'
						}`}
						aria-label='Next slide'
					>
						<ChevronRight className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary' />
					</button>
				</>
			)}

			<motion.div
				ref={carousel}
				className='overflow-hidden cursor-grab active:cursor-grabbing'
			>
				<motion.div
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					animate={controls}
					className={`flex ${gapClass} items-baseline will-change-transform`}
				>
					{items.map((item, index) => (
						<motion.div
							key={item.id ?? index}
							className={`min-w-[180px] md:min-w-[240px] lg:min-w-[300px] min-h-[180px] md:min-h-[240px] lg:min-h-[300px] p-2 ${itemClassName}`}
						>
							<Image
								src={item.imgSrc}
								alt={item.title || `Carousel item ${index + 1}`}
								className='w-full object-contain pointer-events-none rounded-2xl md:rounded-3xl lg:rounded-4xl'
							/>
							{showTitle && item.title && (
								<div className='font-bold text-lg md:text-xl lg:text-2xl text-primary mt-4 md:mt-6 lg:mt-8'>
									{item.title}
								</div>
							)}
							{item.description && (
								<div className='text-text text-sm md:text-base mt-1 md:mt-2'>
									{item.description}
								</div>
							)}
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	)
}

export default CarouselComponent

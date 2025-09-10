'use client'
import Mobile1 from '@/public/png/mobile-1.png'
import Mobile2 from '@/public/png/mobile-2.png'
import Mobile3 from '@/public/png/mobile-3.png'
import Mobile4 from '@/public/png/mobile-4.png'
import Portfolio1 from '@/public/png/portfolio1.png'
import Portfolio2 from '@/public/png/portfolio2.png'
import Portfolio3 from '@/public/png/portfolio3.png'
import Portfolio4 from '@/public/png/portfolio4.png'
import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import HistoryIMG1 from '../../public/jpeg/HistoryIMG1.jpeg'
import HistoryIMG2 from '../../public/jpeg/HistoryIMG2.jpeg'
import HistoryIMG3 from '../../public/jpeg/HistoryIMG3.jpeg'
import HistoryIMG4 from '../../public/jpeg/HistoryIMG4.jpeg'
import NavbarTitle from '../about-us/components/NavbarTitle'

const items = [
	{
		id: '01',
		imgSrc: Portfolio1,
		img: Mobile1,
		title: 'Tiger IT',
		description: 'DIFFERENT STYLES',
		minidesc: 'Different Styles',
	},
	{
		id: '02',
		imgSrc: Portfolio2,
		img: Mobile2,
		title: 'Software Development',
		description: 'DIFFERENT CAPTIONS',
		minidesc: 'Different Captions',
	},
	{
		id: '03',
		imgSrc: Portfolio3,
		img: Mobile3,
		title: 'App Development',
		description: 'DIFFERENT STYLES',
		minidesc: 'Different Styles',
	},
	{
		id: '04',
		imgSrc: Portfolio4,
		img: Mobile4,
		title: 'Financial Services',
		description: 'DIFFERENT CAPTIONS',
		minidesc: 'Different Captions',
	},
]

const PortfolioStyles = () => {
	const [width, setWidth] = useState(0)
	const carousel = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (carousel.current) {
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
		}
	}, [carousel])
	return (
		<div className='w-full overflow-hidden'>
			<NavbarTitle
				title='Portfolio'
				icon={ChevronRight}
				headlocate='Features'
				locate='Portfolio'
			/>
			{/* our history section */}
			<div className='w-full py-25'>
				{/* header */}
				<div className='lg:w-[65%] px-6 lg:px-0 text-primary text-4xl lg:text-4xl font-semibold mx-auto text-center leading-12 lg:leading-16'>
					Explore our recent client success stories and witness our full 360
					transformations come to life
				</div>
				{/* Project History */}
				<div className='lg:w-full justify-center flex flex-wrap gap-8 mt-30 mx-4 lg:mx-0'>
					<div className='space-y-6'>
						<Image
							className='rounded-4xl cursor-pointer hover:shadow-2xl hover:scale-99 transition-all duration-200'
							src={HistoryIMG1}
							alt='HistoryIMG1'
						/>
						<div className='text-xl font-semibold text-blue-950'>
							UX/UI Design
						</div>
					</div>
					<div className='space-y-6'>
						<Image
							className='rounded-4xl cursor-pointer hover:shadow-2xl hover:scale-99 transition-all duration-200'
							src={HistoryIMG2}
							alt='HistoryIMG2'
						/>
						<div className='text-xl font-semibold text-blue-950'>
							NFT Market UI
						</div>
					</div>
					<div className='space-y-6'>
						<Image
							className='rounded-4xl cursor-pointer hover:shadow-2xl hover:scale-99 transition-all duration-200'
							src={HistoryIMG3}
							alt='HistoryIMG3'
						/>
						<div className='text-xl font-semibold text-blue-950'>
							Health Mobile App
						</div>
					</div>
					<div className='space-y-6'>
						<Image
							className='rounded-4xl cursor-pointer hover:shadow-2xl hover:scale-99 transition-all duration-200'
							src={HistoryIMG4}
							alt='HistoryIMG4'
						/>
						<div className='text-xl font-semibold text-blue-950'>
							Wallet App Development
						</div>
					</div>
				</div>
			</div>
			{/* carousals section */}
			<div className='bg-bg w-full py-20'>
				<div className='w-full py-20'>
					<div className='flex flex-col lg:flex-row gap-10 mx-10 lg:mx-25'>
						<div className='space-y-3'>
							<div className='title font-bold text-xl text-primary'>
								1. Carousel/Grid
							</div>
							<div className='text-zinc-500 text-lg'>
								Allows users to display their portfolio items in either a
								carousel or a grid layout, with different stylings.
							</div>
						</div>
						<div className='space-y-3'>
							<div className='title font-bold text-xl text-primary'>
								2. Carousel Navigation
							</div>
							<div className='text-zinc-500 text-lg'>
								Users can add navigation arrows to allow visitors to navigate
								through the portfolio items more easily.
							</div>
						</div>
						<div className='space-y-3'>
							<div className='title font-bold text-xl text-primary'>
								3. Filters
							</div>
							<div className='text-zinc-500 text-lg'>
								This feature is especially useful for websites with a large
								portfolio where users may want to filter the items to find
								specific one
							</div>
						</div>
					</div>
				</div>
				{/* row 1 */}
				<div className='w-full lg:overflow-hidden mt-14'>
					<motion.div
						ref={carousel}
						drag='x'
						whileDrag={{ scale: 0.95 }}
						dragElastic={0.2}
						dragConstraints={{ right: 0, left: -600 }}
						dragTransition={{ bounceDamping: 30 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						className='flex gap-10 lg:gap-30 items-baseline will-change-transform cursor-grab active:cursor-grabbing'
					>
						{items.map((itemData, index) => {
							return (
								<motion.div
									key={itemData.id ?? index}
									className='min-w-[15rem] lg:min-w-[25rem] min-h-[15rem] lg:min-h-[25rem] p-2'
								>
									<Image
										src={itemData?.imgSrc}
										alt='img'
										className='w-full object-contain pointer-events-none rounded-4xl'
									/>
									<div className='font-bold text-2xl text-primary mt-8'>
										{itemData?.title}
									</div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
				{/* row 2 */}
				<div className='w-full min-h-170 lg:overflow-hidden mt-44 lg:mt-24'>
					<motion.div
						ref={carousel}
						drag='x'
						whileDrag={{ scale: 0.95 }}
						dragElastic={0.2}
						dragConstraints={{ right: 0, left: -600 }}
						dragTransition={{ bounceDamping: 30 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						className='flex gap-10 lg:gap-30 items-baseline will-change-transform cursor-grab active:cursor-grabbing'
					>
						{items.map((itemData, index) => {
							return (
								<motion.div
									key={itemData.id ?? index}
									className='min-w-[15rem] lg:min-w-[25rem] min-h-[15rem] lg:min-h-[25rem] p-2 relative'
								>
									<Image
										src={itemData?.imgSrc}
										alt='img'
										className='w-full object-contain pointer-events-none'
									/>
									<div className='bg-blue-600 text-center h-25 px-10 -bottom-10 absolute z-1111'>
										<div className='font-bold text-2xl text-white mt-8'>
											{itemData?.title}
										</div>
										<div className='text-white text-start text-sm'>
											{itemData?.description}
										</div>
									</div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
				{/* row 3 */}
				<div className='overflow-hidden mt-14 lg:mt-0'>
					<motion.div
						ref={carousel}
						drag='x'
						whileDrag={{ scale: 0.95 }}
						dragElastic={0.2}
						dragConstraints={{ right: 0, left: -600 }}
						dragTransition={{ bounceDamping: 30 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						className='flex gap-10 lg:gap-30 items-baseline will-change-transform cursor-grab active:cursor-grabbing'
					>
						{items.map((itemData, index) => {
							return (
								<motion.div
									key={itemData.id ?? index}
									className='min-w-[15rem] lg:min-w-[25rem] min-h-[15rem] lg:min-h-[25rem] p-2'
								>
									<Image
										src={itemData?.imgSrc}
										alt='img'
										className='w-full object-contain pointer-events-none'
									/>
									<div className='mt-18 space-y-6'>
										<div className='space-x-14'>
											<span className='text-zinc-500 text-sm font-semibold'>
												{itemData?.minidesc}
											</span>
											<span className='text-zinc-500 text-sm font-semibold'>
												{itemData?.description}
											</span>
										</div>
										<div>
											<div className='relative text-8xl font-bold text-zinc-300'>
												{itemData?.id}
											</div>
											<div className='absolute bottom-10 font-bold text-3xl mt-8 text-primary'>
												{itemData?.title}
											</div>
										</div>
									</div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</div>
			{/*  */}
			<div className='w-full py-25 overflow-hidden'>
				<div className='w-[80%] lg:w-[60%] mx-auto text-center text-4xl lg:text-5xl font-medium leading-14 text-primary'>
					Review and comment on all your digital marketing assets
				</div>
				<div className='w-full overflow-hidden mt-14'>
					<motion.div
						ref={carousel}
						drag='x'
						whileDrag={{ scale: 1 }}
						dragElastic={0.2}
						dragConstraints={{ right: 0, left: -width }}
						dragTransition={{ bounceDamping: 30 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
						className='flex gap-15 items-baseline will-change-transform cursor-grab active:cursor-grabbing'
					>
						{items.map((itemData, index) => {
							return (
								<motion.div
									key={itemData.id ?? index}
									className='min-w-[15rem] min-h-[20rem] p-2'
								>
									<Image
										src={itemData?.img}
										alt='img'
										className='w-full object-contain pointer-events-none rounded-4xl'
									/>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioStyles

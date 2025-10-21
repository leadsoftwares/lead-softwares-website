'use client'

import SideImg from '@/public/png/About/journey-img-design.png'
import IMGDown from '@/public/png/About/journey-img-down.jpeg'
import IMGTop from '@/public/png/About/journey-img-top.jpeg'
import Image from 'next/image'
import { OurJourneyData } from '../Data/about'
export default function PortfolioSection() {
	return (
		<section className='py-12 xl:py-45 mt-4 md:mt-30 lg:mt-0'>
			<div className='container mx-auto flex flex-col xl:flex-row gap-50 lg:max-w-7xl px-2'>
				<div className='flex relative xl:w-130 xl:max-h-100 px-4 justify-center items-center rounded-lg'>
					<Image
						src={SideImg}
						alt='Side-Image'
						className='absolute right-30 md:right-50 lg:right-95 xl:right-88 xl:top-50 xl:w-280 xl:h-100'
					/>
					<Image
						src={IMGTop}
						alt='Portfolio'
						className='relative md:w-100 xl:w-full w-70 xl:h-[340px] rounded-lg object-cover z-10'
					/>
					<div className='absolute top-35 md:top-50 xl:top-70 left-30 md:left-70 lg:left-110 xl:left-30 md:w-90 xl:w-110 xl:max-h-100 rounded-lg flex justify-center items-center p-2'>
						<Image
							src={IMGDown}
							alt='Portfolio'
							className='relative w-full xl:h-[340px] rounded-lg object-cover z-10 bg-white p-1.5 shadow-lg'
						/>
					</div>
					<div className='bg-white flex items-center justify-center rounded-xl w-30 h-30 md:w-40 md:h-40 lg:w-45 lg:h-45 xl:w-55 xl:h-55 absolute top-40 md:top-60 xl:top-50 left-5 md:left-35 lg:left-70 xl:left-100 shadow-lg z-20'>
						<h1 className='md:text-lg lg:text-xl xl:text-2xl text-primary font-bold text-center'>
							3 Year of Experience
						</h1>
					</div>
				</div>

				<div className='xl:w-160 space-y-10 px-4'>
					<h2 className='text-4xl font-bold leading-tight'>Our Journey</h2>

					<div className='space-y-12'>
						{OurJourneyData.map((item, i) => (
							<div key={i}>
								<h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
								<p className='text-gray-600'>{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

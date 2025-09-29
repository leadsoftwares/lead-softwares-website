'use client'

import Crazy from '@/public/png/Crazy By Rasel App M.png'
import TigerIT from '@/public/png/mobile-3.png'
import Barq from '@/public/png/mobile-4.png'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const MobileProjects = () => {
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

	return (
		<div className='w-full py-10'>
			{/* Project History - Desktop View */}
			<div className='lg:w-full justify-center hidden md:flex flex-wrap gap-8 mt-30 mx-4 lg:mx-0'>
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
			</div>

			{/* Mobile Projects - Mobile View (Full-width Swipe Slider) */}
			<div className='md:hidden mt-8 w-full relative'>
				{/* Swiper Slider */}
				<Swiper
					modules={[Pagination]}
					spaceBetween={20} // gap between slides
					slidesPerView={1} // show one full slide
					pagination={{ clickable: true }} // dots enabled
					className='w-full'
				>
					{ProjectView.map((project) => (
						<SwiperSlide key={project.id}>
							<a
								href={project.href}
								target='_blank'
								className='relative space-y-4 block w-full px-6 mb-8'
							>
								<div className='relative rounded-xl overflow-hidden'>
									<Image
										width={200}
										height={400}
										src={project.img}
										alt={project.alt}
										className='transition-transform duration-300'
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
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default MobileProjects

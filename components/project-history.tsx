'use client'

import Crazy from '@/public/png/Crazy By Rasel D.png'
import TigerIT from '@/public/png/portfolio1.png'
import Barq from '@/public/png/portfolio4.png'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const ProjectHistory = () => {
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
		<div className='w-full py-6 lg:py-25 md:mt-16'>
			{/* header */}
			<div className='lg:w-[75%] xl:w-[65%] px-6 lg:px-0 text-primary text-3xl md:text-4xl lg:text-4xl font-semibold mx-auto text-center lg:leading-14 xl:leading-16'>
				Explore our recent client success stories and witness our full 360
				transformations come to life
			</div>
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
								width={500}
								height={500}
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

			{/* Project History - Mobile View (Full-width Swipe Slider) */}

			<div className='md:hidden mt-16 w-full relative'>
				<Swiper
					modules={[Pagination]}
					spaceBetween={20} // gap between slides
					slidesPerView={1} // 1 full slide per view
					pagination={{ clickable: true }}
					className='w-full'
				>
					{ProjectView.map((project) => (
						<SwiperSlide key={project.id}>
							<a
								href={project.href}
								target='_blank'
								className='relative space-y-4 block w-full px-2 mb-6'
							>
								<div className='relative rounded-xl overflow-hidden'>
									<Image
										src={project.img}
										alt={project.alt}
										width={500}
										height={500}
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

export default ProjectHistory

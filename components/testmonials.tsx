'use client'

import Avatar1 from '@/public/webp/avatar-1.webp'
import Avatar2 from '@/public/webp/avatar-2.webp'
import Avatar3 from '@/public/webp/avatar-3.webp'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const testimonials = [
	{
		text: '"Working with Lead Softwares has been a game-changer for us. Their team delivered a seamless, scalable solution ahead of schedule and communicated proactively throughout. They truly went the extra mile to ensure the final product exceeded our expectations."',
		name: 'Jamie Brandon',
		role: 'CTO',
		img: Avatar1,
	},
	{
		text: '"Lead Softwares turned our idea into a powerful e-learning platform with flawless performance. They were always available for feedback and quick changes, helping us launch on time and attract thousands of users right away."',
		name: 'Farhan Nadeem',
		role: 'CTO',
		img: Avatar3,
	},
	{
		text: '"The custom CRM by Lead Softwares transformed how we manage customers and boosted our sales pipeline. They deeply understood our workflows and built a user-friendly solution that improved team efficiency."',
		name: 'Sara Johnson',
		role: 'Marketer',
		img: Avatar2,
	},
    {
		text: '"Lead Softwares turned our idea into a powerful e-learning platform with flawless performance. They were always available for feedback and quick changes, helping us launch on time and attract thousands of users right away."',
		name: 'Amit Verma',
		role: 'CEO',
		img: Avatar3,
	},
     {
		text: '"As a startup, we needed more than just developers — and Lead Softwares delivered. They built a scalable MVP, offered strategic insights, and felt like an extension of our team from day one."',
		name: 'Maria Gonzalez',
		role: 'Marketing Director',
		img: Avatar2,
	},
]

export default function Testimonials() {
	return (
		<section className='md:py-10'>
			<style jsx global>{`
				.testimonial-swiper .swiper-pagination-bullet {
					width: 12px !important;
					height: 12px !important;
					background: rgb(0, 0, 0) !important;
					opacity: 1 !important;
					margin: -14px 8px !important;
					transition: all 0.3s ease !important;
				}
				.testimonial-swiper .swiper-pagination-bullet-active {
					background: #3b82f6 !important;
					transform: scale(1.2) !important;
				}
				.testimonial-swiper .swiper-pagination-bullet:hover {
					background: rgba(0, 0, 0, 0.5) !important;
				}
			`}</style>
			<div className='max-w-3xl mx-auto px-0 lg:px-4'>
				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={{
						clickable: true,
						bulletClass: 'swiper-pagination-bullet custom-bullet',
						bulletActiveClass:
							'swiper-pagination-bullet-active custom-bullet-active',
					}}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					loop
					className='testimonial-swiper'
				>
					{testimonials.map((item, i) => (
						<SwiperSlide key={i}>
							<div className='testimonial-item md:p-8 rounded-2xl text-center'>
								{/* Quote Icon */}
								<div className='testimonial-quote mx-auto mb-6 w-10 h-10 md:w-14 md:h-14'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='#5c5ad8'
										viewBox='0 -5 34 34'
										className='w-full h-full'
									>
										<path d='m31.2 0h-7.2l-4.8 9.6v14.4h14.4v-14.4h-7.2zm-19.2 0h-7.2l-4.8 9.6v14.4h14.4v-14.4h-7.2z' />
									</svg>
								</div>

								{/* Description */}
								<p className='testimonial-description text-xl leading-9 md:leading-11 md:text-2xl text-zinc-200 mb-8'>
									{item.text}
								</p>

								{/* Avatar */}
								<div className='testimonial-avatar-wrapper flex items-center justify-center gap-4 mb-10'>
									<div className='testimonial-avatar-thumb w-18 h-18 relative'>
										<Image
											src={item.img}
											alt={item.name}
											fill
											className='object-cover rounded-full'
										/>
									</div>
									<div className='testimonial-avatar-info text-left'>
										<h5 className='testimonial-avatar-title text-2xl font-semibold text-zinc-200'>
											{item.name}
										</h5>
										<span className='testimonial-avatar-designation text-xl text-gray-300'>
											{item.role}
										</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

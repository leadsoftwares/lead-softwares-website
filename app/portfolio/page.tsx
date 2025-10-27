'use client'
import HeroGallery from '@/components/hero-gallery'
import PortfolioImg from '@/public/png/Lead software pages Images/Portfolio.png'
import Image from 'next/image'
import React, { useEffect } from 'react'
import NavbarTitle from '../about/components/NavbarTitle'
import { DesktopProjects } from './Data/Desktop-Projects'
import { MobileProjects } from './Data/Mobile-Projects'

const PortfolioStyles = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
	}, [])
	return (
		<div className='w-full overflow-hidden'>
			<NavbarTitle
				title='Portfolio'
				desc='Every project tells a story — of innovation, collaboration, and success. Explore how Lead Softwares partners with clients to design and develop solutions that make a difference.'
				src={PortfolioImg}
				width={700}
				height={700}
			/>
			<HeroGallery />

			<div className='w-full py-10 md:py-12 lg:py-16 bg-bg overflow-hidden'>
				<div className='w-[100%] md:w-[85%] lg:w-[80%] mx-auto'>
					<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8 lg:mb-10 text-center'>
						Our Multi-Platform Solutions
					</h2>

					<div className='mb-12 md:mb-16'>
						<h3 className='px-4 md:px-4 text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6'>
							Web Applications
						</h3>
						<div className='overflow-hidden py-4'>
							<div
								className='flex whitespace-nowrap animate-marquee'
								style={{ width: 'max-content' }}
							>
								{[...Array(2)].map((_, repeatIndex) => (
									<div key={repeatIndex} className='flex'>
										{DesktopProjects.slice(0, 8).map((item, index) => (
											<div
												key={`web-${repeatIndex}-${index}`}
												className='mx-4 md:mx-6 flex-shrink-0 md:hover:scale-104 transition-all duration-300 bg-gradient-to-br from-[#f0f0fa] to-[#EAEAF9] rounded-xl'
											>
												<a
													href={item.href}
													target='_blank'
													className='w-[340px] md:w-[340px] lg:w-[340px]'
												>
													<Image
														width={340}
														height={340}
														src={item.imgSrc}
														alt={item.title || ''}
														className='object-cover w-full h-[220px] md:h-[210px] lg:h-[240px] rounded-xl'
													/>
												</a>
												{item.title && (
													<div className='font-bold text-lg md:text-[18px] text-black px-4 py-2'>
														{item.title}
													</div>
												)}
											</div>
										))}
									</div>
								))}
							</div>
						</div>
					</div>

					<div className='mb-12 md:mb-16'>
						<h3 className='px-4 md:px-4 text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6'>
							Mobile Applications
						</h3>
						<div className='relative overflow-x-hidden py-4'>
							<div className='flex animate-marquee2 whitespace-nowrap'>
								{[...Array(6)].map((_, repeatIndex) => (
									<React.Fragment key={repeatIndex}>
										{MobileProjects.map((item, index) => (
											<div
												key={`${repeatIndex}-${index}`}
												className='mx-2 flex-shrink-0 bg-gradient-to-br from-[#f0f0fa] to-[#EAEAF9] rounded-xl md:hover:scale-103 transition-all duration-300'
											>
												<a
													href={item.href}
													target='_blank'
													className='block w-[340px] md:w-[200px] lg:w-[300px]'
												>
													<Image
														width={280}
														height={400}
														src={item.img}
														alt={item.title || ''}
														className='object-cover w-full h-[400px] md:h-[340px] lg:h-[400px] rounded-xl'
													/>
												</a>
												{item.title && (
													<div className='font-semibold text-lg md:text-[18px] text-black p-4'>
														{item.title}
													</div>
												)}
											</div>
										))}
									</React.Fragment>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioStyles

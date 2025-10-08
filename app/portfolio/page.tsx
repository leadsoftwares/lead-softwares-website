'use client'
import HeroGallery from '@/components/hero-gallery'
import PortfolioImg from '@/public/png/Lead software pages Images/Portfolio.png'
import Image from 'next/image'
import NavbarTitle from '../about-us/components/NavbarTitle'
import { Items } from './Data/Desktop-Projects'
import { MobileProjects } from './Data/Mobile-Projects'
import { useEffect } from 'react'

const PortfolioStyles = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
	}, [])
	return (
		<div className='w-full overflow-hidden'>
			<NavbarTitle title='Portfolio' src={PortfolioImg} />
			<HeroGallery />
			{/* <ProjectHistory />
			<MobileProject /> */}

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
								className='inline-flex items-center animate-marquee'
								style={{
									whiteSpace: 'nowrap',
								}}
							>
								{Items.slice(0, 8).map((item, index) => (
									<div
										key={`web-${index}`}
										className='mx-4 md:mx-6 flex-shrink-0'
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
											<div className='font-bold text-lg md:text-xl text-primary mt-3'>
												{item.title}
											</div>
										)}
									</div>
								))}

								{Items.slice(0, 8).map((item, index) => (
									<div
										key={`web-dup-${index}`}
										className='mx-4 md:mx-6 flex-shrink-0'
									>
										<div className='w-[340px] md:w-[340px] lg:w-[340px]'>
											<Image
												width={340}
												height={340}
												src={item.imgSrc}
												alt={item.title || ''}
												className='object-cover w-full h-[220px] md:h-[210px] lg:h-[240px] rounded-xl'
											/>
										</div>
										{item.title && (
											<div className='font-bold text-lg md:text-xl text-primary mt-3'>
												{item.title}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>

					<div className='mb-12 md:mb-16'>
						<h3 className='px-4 md:px-4 text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6'>
							Mobile Applications
						</h3>
						<div className='overflow-hidden py-4'>
							<div
								className='inline-flex items-center animate-marquee2'
								style={{
									whiteSpace: 'nowrap',
								}}
							>
								{MobileProjects.map((item, index) => (
									<div key={`mobile-${index}`} className='mx-6 flex-shrink-0'>
										<a
											href={item.href}
											target='_blank'
											className='w-[340px] md:w-[200px] lg:w-[300px]'
										>
											<Image
												width={280}
												height={400}
												src={item.img}
												alt={item.title || ''}
												className='object-cover w-full h-[480px] md:h-[340px] lg:h-[400px] rounded-xl'
											/>
										</a>
										{item.title && (
											<div className='font-bold text-lg md:text-xl text-primary mt-3'>
												{item.title}
											</div>
										)}
									</div>
								))}

								{MobileProjects.map((item, index) => (
									<div
										key={`mobile-dup-${index}`}
										className='mx-6 flex-shrink-0'
									>
										<a
											href={item.href}
											target='_blank'
											className='w-[340px] md:w-[200px] lg:w-[300px]'
										>
											<Image
												width={280}
												height={400}
												src={item.img}
												alt={item.title || ''}
												className='object-cover w-full h-[480px] md:h-[340px] lg:h-[400px] rounded-xl'
											/>
										</a>
										{item.title && (
											<div className='font-bold text-lg md:text-xl text-primary mt-3'>
												{item.title}
											</div>
										)}
									</div>
								))}

								{MobileProjects.map((item, index) => (
									<div
										key={`mobile-triple-${index}`}
										className='mx-6 flex-shrink-0'
									>
										<a
											href={item.href}
											target='_blank'
											className='w-[180px] md:w-[200px] lg:w-[240px]'
										>
											<Image
												width={240}
												height={400}
												src={item.img}
												alt={item.title || ''}
												className='object-cover w-full h-[320px] md:h-[340px] lg:h-[400px] rounded-xl'
											/>
										</a>
										{item.title && (
											<div className='font-bold text-lg md:text-xl text-primary mt-3'>
												{item.title}
											</div>
										)}
									</div>
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

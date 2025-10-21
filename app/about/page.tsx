'use client'

import JourneyScroll from '@/app/about/components/JourneyScroll'
import Team from '@/app/team/components/team'
import SectionBG from '@/public/jpeg/about-us-section-bg.jpg'
import WhyIMG from '@/public/png/about-us-why-section-img.png'
import AboutSectionImg from '@/public/png/Lead software pages Images/about uss.png'
import { Check } from 'lucide-react'
import Image from 'next/image'
import ProjectsLogos from '../../components/partners-components'
import NavbarTitle from './components/NavbarTitle'
import WhyChooseThree from './components/whychooseus'
import { useEffect } from 'react'

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
	}, [])
	return (
		<div className='w-full overflow-hidden'>
			<NavbarTitle title='About Us' src={AboutSectionImg} />
			<WhyChooseThree />
			<JourneyScroll />
			<div
				style={{
					backgroundImage: `url(${SectionBG.src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
				className='relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center'
			>
				<div className='relative z-10 text-center text-black px-6'>
					<p className='flex items-center justify-center gap-2 mb-3 bg-blue-800 text-white w-30 py-2 rounded-md mx-auto'>
						<span className='h-2 w-2 bg-white rounded'></span>
						<span className='font-medium tracking-wider uppercase text-sm'>
							About Us
						</span>
					</p>
					<h1 className='text-3xl md:text-6xl font-bold leading-tight space-y-2'>
						<span className='block'>Discover who we are</span>
						<span className='block'>what drives us every day</span>
					</h1>

					<p className='mt-4 text-zinc-500 md:text-lg font-medium'>
						We&apos;re driven by passion, innovation, and a commitment to making
						a positive impact
					</p>
				</div>
			</div>
			{/*  */}
			<div className='text-white md:pb-20'>
				<div className='bg-[#edf3ff] mx-auto md:w-[66vw] flex flex-col gap-12 px-8 py-8 md:px-12'>
					<div className='w-full flex justify-center'>
						<Image
							src={WhyIMG}
							alt='Why collaborate with us'
							className='object-contain'
							priority
						/>
					</div>

					<div className='w-full'>
						<p className='text-zinc-800 font-bold text-2xl mb-3'>
							Why you need to Collaborate with Us?
						</p>
						<div className='space-y-4 text-zinc-500 font-medium'>
							<p className='block md:hidden'>
								We deliver innovative, tailored IT solutions that drive your
								business growth. Our expert team combines technology and
								experience to create scalable, seamless, and results-driven
								outcomes.
							</p>
							<p className='hidden md:block'>
								We offer unparalleled expertise and innovative IT solutions
								tailored to meet the unique needs of your business. Our team of
								professionals combines cutting-edge technology with years of
								experience to deliver results that drive success and growth. We
								prioritize understanding your objectives and challenges to
								provide customized, scalable solutions that ensure seamless
								integration and sustainable outcomes.
							</p>
						</div>
						<div className='w-full h-[1px] bg-zinc-200 my-6' />
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-y-4 max-w-md'>
							{[
								'Tailored IT Solutions',
								'Scalability & Flexibility',
								'Expertise & Innovation',
								'Seamless Integration',
							].map((item, i) => (
								<div key={i} className='flex items-center gap-3'>
									<div className='bg-blue-800 p-0.5 rounded'>
										<Check className='text-white w-4 h-4' />
									</div>
									<p className='text-zinc-500 font-medium'>{item}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			{/*  */}
			<Team />
			<ProjectsLogos />
		</div>
	)
}

export default About

'use client' // important for Next.js App Router

import IMG from '@/public/png/IDN Network D.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function PortfolioSection() {
	const sectionRef = useRef<HTMLDivElement>(null)
	const leftRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		if (sectionRef.current && leftRef.current) {
			ScrollTrigger.create({
				trigger: sectionRef.current,
				start: 'top top', // when section hits top of viewport
				end: 'bottom bottom', // until text finishes scrolling
				pin: leftRef.current, // pin the left image
				scrub: true,
			})
		}

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
		}
	}, [])

	return (
		<section ref={sectionRef} className='hidden md:block bg-black text-white py-12 xl:py-66 mt-4 md:mt-30 lg:mt-0'>
			<div className='container mx-auto flex flex-col xl:flex-row gap-20 lg:max-w-6xl px-2'>
				
				<div ref={leftRef} className='hidden xl:flex w-480 max-h-100 px-4 justify-center items-center rounded-lg'>
                   
					<Image
						src={IMG} 
						width={200}
						height={50}
						alt='Portfolio'
						className='relative w-full h-[340px] rounded-lg object-cover z-10'
					/>
                     <div className='hidden xl:block absolute w-158 border-1 border-zinc-800 h-96 rounded-lg top-2 -left-2'></div>
				</div>
                	<div  className='block xl:hidden w-full max-h-100 px-4 rounded-lg'>
                   
					<Image
						src={IMG}
						width={200}
						height={50}
						alt='Portfolio'
						className='relative w-full h-[200px] md:h-[400px] rounded-lg object-cover z-10'
					/>
				</div>

			
				<div className='xl:w-300 space-y-10 px-4'>
					<h2 className='text-4xl font-bold leading-tight'>Our Journey</h2>

					<div className='space-y-12'>
						{[
							{
								title: 'May 2023 – The Beginning',
								text: 'Lead Softwares was established with a vision to deliver innovative and reliable digital solutions. Starting as a small team of passionate developers and designers, we began offering custom software development, UI/UX design, and mobile app solutions for startups and growing businesses. Our focus was clear — build technology that empowers success.'
							},
							{
								title: 'March 2024 – Growing Stronger',
								text: 'Within less than a year, Lead Softwares expanded its service line to include end-to-end product deployment and quality assurance testing. We introduced agile development practices and partnered with several local and international clients. Our portfolio grew rapidly as we gained recognition for timely delivery and modern software design.',
							},
							{
								title: 'January 2025 – Going Global',
								text: 'Lead Softwares entered the global market, delivering custom enterprise solutions across multiple industries. With a growing team of software engineers, UI/UX experts, and project managers, we began offering cloud-based systems, mobile app development, and digital transformation consulting for businesses worldwide.',
							},
							{
								title: 'June 2025 – Leading with Innovation',
								text: 'Today, Lead Softwares stands as a trusted IT partner for clients across different regions. With a strong focus on innovation, design excellence, and user satisfaction, we continue to shape the future of technology — developing powerful, scalable, and secure digital products that drive real-world impact.',
							},
						].map((item, i) => (
							<div key={i}>
								<h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
								<p className='text-gray-300'>{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

'use client'

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
				start: 'top top',
				end: 'bottom bottom',
				pin: leftRef.current,
				scrub: true,
			})
		}

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
		}
	}, [])

	return (
		<section
			ref={sectionRef}
			className='hidden md:block bg-black text-white py-12 xl:py-66 mt-4 md:mt-30 lg:mt-0'
		>
			<div className='container mx-auto flex flex-col xl:flex-row gap-20 lg:max-w-6xl px-2'>
				<div
					ref={leftRef}
					className='hidden xl:flex w-480 max-h-100 px-4 justify-center items-center rounded-lg'
				>
					<Image
						src={IMG}
						width={200}
						height={50}
						alt='Portfolio'
						className='relative w-full h-[340px] rounded-lg object-cover z-10'
					/>
					<div className='hidden xl:block absolute w-158 border-1 border-zinc-800 h-96 rounded-lg top-2 -left-2'></div>
				</div>
				<div className='block xl:hidden w-full max-h-100 px-4 rounded-lg'>
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
								title: 'May 2023 - The Beginning',
								text: 'Lead Softwares began with a vision to create innovative, reliable digital solutions. From a small team of passionate developers, we grew by delivering custom software, UI/UX design, and mobile apps that empower business success.',
							},
							{
								title: 'March 2024 - Growing Stronger',
								text: 'Within a year, Lead Softwares expanded into full product deployment and QA testing, adopting agile methods and partnering with local and international clients. Our portfolio grew quickly through timely delivery and modern software design.',
							},
							{
								title: 'January 2025 - Going Global',
								text: 'Lead Softwares entered the global market, delivering enterprise solutions across industries. With an expanding team, we introduced cloud systems, mobile apps, and digital transformation services for businesses worldwide.',
							},
							{
								title: 'June 2025 - Leading with Innovation',
								text: 'Today, Lead Softwares is a trusted global IT partner, delivering innovative, scalable, and secure digital solutions that combine design excellence with real-world impact.',
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

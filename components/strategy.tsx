'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import StrategyImage from '../public/webp/strategyIMG.webp'
import StrategyImage2 from '../public/webp/strategyIMG2.webp'
import StrategyImage3 from '../public/webp/strategyIMG3.webp'

export default function Strategy() {
	const images = [StrategyImage, StrategyImage2, StrategyImage3]
	const [activeIndex, setActiveIndex] = useState(0)

	const sectionRef = useRef<HTMLDivElement>(null)
	const scrollTriggerRef = useRef<ScrollTrigger | null>(null)
	const steps = images.length

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		// Only enable GSAP scroll animation on desktop
		if (window.innerWidth >= 1024) {
			const ctx = gsap.context(() => {
				const panels = gsap.utils.toArray('.step') as HTMLElement[]

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: sectionRef.current,
						start: 'top top',
						end: `+=${panels.length * 40}%`,
						scrub: true,
						pin: true,
						anticipatePin: 1,
						onUpdate: (self) => {
							const index = Math.round(self.progress * (steps - 1))
							setActiveIndex(index)
						},
					},
				})

				panels.forEach(() => {
					tl.to({}, { duration: 1 })
				})

				scrollTriggerRef.current = tl.scrollTrigger as ScrollTrigger
			}, sectionRef)

			return () => ctx.revert()
		}
	}, [steps])

	const handleClick = (index: number) => {
		// Scroll animation only if GSAP trigger exists (desktop)
		if (scrollTriggerRef.current) {
			const st = scrollTriggerRef.current
			const scrollDistance = st.end - st.start
			const target = st.start + (scrollDistance / (steps - 1)) * index
			window.scrollTo({
				top: target,
				behavior: 'smooth',
			})
		}
		setActiveIndex(index)
	}

	return (
		<section
			ref={sectionRef}
			className='w-full relative bg-gradient-to-br from-[#F7F9FC] to-[#EAEAF9] mt-8 py-10 md:py-20'
		>
			<h1 className='text-3xl md:text-5xl font-bold text-center text-primary'>
				Building Success Step by Step
			</h1>

			<div className='container mx-auto flex flex-col lg:flex-row px-6 py-14 md:py-24 gap-16'>
				{/* LEFT SIDE */}
				<div className='w-full lg:w-1/2 flex flex-col justify-center space-y-10'>
					{[
						'Assessment and Planning',
						'Implementation and Integration',
						'Monitoring and Optimization',
					].map((title, i) => (
						<button
							key={i}
							type='button'
							onClick={() => handleClick(i)}
							className={`step text-left rounded-2xl p-6 transition-all duration-300 focus:outline-none ${
								activeIndex === i
									? 'bg-white shadow-xl scale-105'
									: 'bg-transparent hover:bg-white/40'
							}`}
						>
							<div className='text-2xl font-semibold text-primary'>{title}</div>
							<p className='mt-3 text-zinc-500'>
								{i === 0 &&
									'We conduct thorough consultations to understand and document client requirements.'}
								{i === 1 &&
									'We develop and rigorously test software applications for top-notch quality.'}
								{i === 2 &&
									'We monitor results closely and optimize continuously for better outcomes.'}
							</p>
						</button>
					))}
				</div>

				{/* RIGHT SIDE */}
				<div className='w-full lg:w-1/2 relative h-[22rem] lg:h-[36rem] border-4 border-black rounded-2xl overflow-hidden'>
					<div
						className='flex h-full w-full transition-transform duration-700 ease-in-out'
						style={{ transform: `translateX(-${activeIndex * 100}%)` }}
					>
						{images.map((img, i) => (
							<div key={i} className='w-full flex-shrink-0 relative'>
								<Image
									src={img}
									alt={`Slide ${i + 1}`}
									fill
									className='object-cover'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

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
		} // clean up on unmount
	}, [])

	return (
		<section ref={sectionRef} className='bg-black text-white py-12 xl:py-66 mt-4 md:mt-30 lg:mt-0'>
			<div className='container mx-auto flex flex-col xl:flex-row gap-20 lg:max-w-6xl px-2'>
				{/* LEFT IMAGE (Pinned) */}
				<div ref={leftRef} className='hidden xl:flex w-480 max-h-100 px-4 justify-center items-center rounded-lg'>
                   
					<Image
						src={IMG} // place an image in /public/images/
						width={200}
						height={50}
						alt='Portfolio'
						className='relative w-full h-[340px] rounded-lg object-cover z-10'
					/>
                     <div className='hidden xl:block absolute w-158 border-1 border-zinc-800 h-96 rounded-lg top-2 -left-2'></div>
				</div>
                	<div  className='block xl:hidden w-full max-h-100 px-4 rounded-lg'>
                   
					<Image
						src={IMG} // place an image in /public/images/
						width={200}
						height={50}
						alt='Portfolio'
						className='relative w-full h-[200px] md:h-[400px] rounded-lg object-cover z-10'
					/>
				</div>

				{/* RIGHT SCROLLING TEXT */}
				<div className='xl:w-300 space-y-10 px-4'>
					<h2 className='text-4xl font-bold leading-tight'>Our Journey</h2>

					<div className='space-y-12'>
						{[
							{
								title: '18 Pre-Defined Grids',
								text: 'Display your projects in unique grids and see what works best for you. Display your projects in unique grids and see what works best for you. Display your projects in unique grids and see what works best for you. Parallax effects, adaptive colors, RGB effects, 3D depth, custom cursor & more. Display your projects in unique grids and see what works best for you. Display your projects in unique grids and see what works best for you.',
							},
							{
								title: 'Always-on-Modules',
								text: 'Show extra content without distraction using vertical header modules. Display your projects in unique grids and see what works best for you. Display your projects in unique grids and see what works best for you. Parallax effects, adaptive colors, RGB effects, 3D depth, custom cursor & more. Display your projects in unique grids and see what works best for you. Display your projects in unique grids and see what works best for you.',
							},
							{
								title: 'Custom Detail Pages',
								text: 'Create fully customizable portfolio detail pages. Display your projects in unique grids and see what works best for you. Display your projects in unique grids and see what works best for you. Parallax effects, adaptive colors, RGB effects, 3D depth, custom cursor & more. Display your projects in unique grids and see what works best for you. Display your projects in unique grids and see what works best for you.',
							},
							{
								title: 'Impressive Animations',
								text: 'Parallax effects, adaptive colors, RGB effects, 3D depth, custom cursor & more. Display your projects in unique grids and see what works best for you. Display your projects in unique grids and see what works best for you.Parallax effects, adaptive colors, RGB effects, 3D depth, custom cursor & more. Display your projects in unique grids and see what works best for you. Display your projects in unique grids and see what works best for you. ',
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

'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'

import { galleryData } from './data/hero-gallery-data'

export default function HeroGallery() {
	const containerRef = useRef<HTMLDivElement | null>(null)

	useLayoutEffect(() => {
		if (!containerRef.current) return

		gsap.registerPlugin(ScrollTrigger)
		const ctx = gsap.context(() => {
			const items = containerRef.current!.querySelectorAll(
				'.tp-hero-gallery-item'
			) as NodeListOf<HTMLElement>

			if (!items.length) return

			items.forEach((el) => {
				const speedAttr = el.dataset.speed
				const speed = speedAttr ? Number(speedAttr) : 0.6

				gsap.to(el, {
					yPercent: -30 * (1 - speed),
					ease: 'none',
					scrollTrigger: {
						trigger: containerRef.current,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 1,
						invalidateOnRefresh: true,
					},
				})
			})
		}, containerRef.current)

		const refreshTimer = setTimeout(() => {
			ScrollTrigger.refresh()
		}, 100)

		const handleLoad = () => ScrollTrigger.refresh()
		window.addEventListener('load', handleLoad)

		return () => {
			window.removeEventListener('load', handleLoad)
			clearTimeout(refreshTimer)
			ctx.revert()
		}
	}, [])

	return (
		<div className='w-full py-10 flex justify-center'>
			<div
				ref={containerRef}
				className='
          w-[95%] max-w-10xl
          border-4 border-zinc-700 rounded-3xl md:rounded-4xl bg-zinc-900
          p-2 
          md:p-6
          shadow-lg
          overflow-hidden
          relative
          h-100
          md:h-200
          lg:h-screen
        '
			>
				<div className='hidden md:grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6'>
					{galleryData.map((item, colIndex) => (
						<div key={colIndex} className='flex justify-center'>
							<div
								data-speed={item.speed}
								className='
                  tp-hero-gallery-item
                  flex flex-col gap-4
                  will-change-transform
                '
							>
								{Array.from({ length: 8 }).map((_, i) => (
									<Image
										key={i}
										src={item.src}
										alt={`hero-thumb-${colIndex + 1}`}
										width={350}
										height={150}
										className='
                      rounded-md
                      border border-gray-200
                      shadow
                      object-cover
                      transition
                      duration-300
                      hover:scale-[1.001]
                    '
									/>
								))}
							</div>
						</div>
					))}
				</div>

				<div className='grid md:hidden grid-cols-3 gap-2'>
					{galleryData.map((item, colIndex) => (
						<div key={colIndex} className='flex justify-center'>
							<div
								data-speed={item.speed}
								className='
                  tp-hero-gallery-item
                  flex flex-col gap-4
                  will-change-transform
                '
							>
								{Array.from({ length: 8 }).map((_, i) => (
									<Image
										key={i}
										src={item.src}
										alt={`hero-thumb-${colIndex + 1}`}
										width={600}
										height={200}
										className='
                      rounded-md
                      border border-gray-200
                      shadow
                      object-cover
                      transition
                      duration-300
                      hover:scale-[1.001]
                    '
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

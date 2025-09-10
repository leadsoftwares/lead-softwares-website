'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import LandingIMG from '../public/png/portfolio2.png'

type BannerProps = {
	images: string[]
}

export default function Banner({ images }: BannerProps) {
	return (
		// <section className='w-full h-[650px] bg-[#120330] flex justify-center items-center overflow-hidden'>
		// 	{/* Two Columns */}
		// 	<div className='grid grid-cols-2 gap-6 opacity-20'>
		// 		{/* Left Column */}
		// 		<motion.div
		// 			className='flex flex-col gap-6'
		// 			animate={{ y: ['0', '-100%'] }}
		// 			transition={{
		// 				duration: 20,
		// 				repeat: Infinity,
		// 				ease: 'linear',
		// 			}}
		// 		>
		// 			{[0, 1, 2, 3, 4].map((src, idx) => (
		// 				<Image
		// 					key={idx}
		// 					src={LandingIMG}
		// 					alt={`banner-img-${idx}`}
		// 					width={400}
		// 					height={300}
		// 					className='shadow-lg'
		// 				/>
		// 			))}
		// 		</motion.div>

		// 		{/* Right Column (opposite direction) */}
		// 		<motion.div
		// 			className='flex flex-col gap-6'
		// 			animate={{ y: ['-100%', '0'] }}
		// 			transition={{
		// 				duration: 20,
		// 				repeat: Infinity,
		// 				ease: 'linear',
		// 			}}
		// 		>
		// 			{[0, 1, 2, 3, 4].map((src, idx) => (
		// 				<Image
		// 					key={idx}
		// 					src={LandingIMG}
		// 					alt={`banner-img-${idx}`}
		// 					width={400}
		// 					height={300}
		// 					className='shadow-lg'
		// 				/>
		// 			))}
		// 		</motion.div>
		// 	</div>
		// </section>
        <section className="relative w-full h-[500px] bg-[#120330] overflow-hidden text-white flex justify-center gap-10">
  {/* Left column (scrolls UP) */}
  <div className="flex flex-col gap-6 animate-scroll-up">
    <Image className="rounded-lg" width={200} height={200} src={LandingIMG} alt="" />
    <Image className="rounded-lg" width={200} height={200} src={LandingIMG} alt="" />
    <Image className="rounded-lg" width={200} height={200} src={LandingIMG} alt="" />
    <Image className="rounded-lg" width={200} height={200} src={LandingIMG} alt="" />
  </div>

  {/* Right column (scrolls DOWN) */}
  <div className="flex flex-col gap-6 animate-scroll-down">
    <Image className="rounded-lg" width={200} height={200} src={LandingIMG} alt="" />
    <Image className="rounded-lg" width={200} height={200} src={LandingIMG} alt="" />
    <Image className="rounded-lg" width={200} height={200} src={LandingIMG} alt="" />
    <Image className="rounded-lg" width={200} height={200} src={LandingIMG} alt="" />
  </div>
</section>

	)
}

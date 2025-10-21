'use client'
import { whyChooseUsData } from '@/app/about/Data/about'
import MidIMG from '@/public/png/About/WhyImg.png'
import SectionBG from '@/public/png/why-choose-three-bg-shape.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WhyChooseThree() {
	return (
		<section className='relative py-20 bg-white overflow-hidden'>
			<div
				className='absolute bottom-0 left-0 right-0 h-1/2 opacity-50 bg-contain bg-bottom bg-no-repeat animate-float-bob-x'
				style={{
					backgroundImage: `url(${SectionBG.src})`,
				}}
			/>
			<div className='absolute top-80 left-10 w-140 h-140 rounded-full bg-blue-400/15 blur-3xl' />
			<div className='absolute top-80 right-60 w-140 h-140 rounded-full bg-red-400/15 blur-3xl' />

			<div className='relative container mx-auto px-4'>
				<div className='text-center mb-16'>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: 'easeInOut' }}
						className='inline-flex items-center gap-3 mb-4'
					>
						<div className='w-10 h-0.5 bg-blue-600' />
						<span className='text-blue-500 font-medium'>Why Choose Us</span>
						<div className='w-10 h-0.5 bg-blue-600' />
					</motion.div>
					<h2 className='text-3xl md:text-5xl font-bold leading-snug text-zinc-800'>
						Your Business with{' '}
						<span className='text-primary'>
							Reliable &amp; <br className='hidden md:block' />
							Future-Ready{' '}
						</span>
						IT Solutions
					</h2>
				</div>

				<div className='grid grid-cols-1 xl:grid-cols-3 gap-10'>
					<div className='space-y-10'>
						{whyChooseUsData.map((box, index) => (
							<div key={index} className='rounded-xl p-6'>
								<div className='mb-4 text-4xl flex justify-center'>
									{box.icon}
								</div>
								<h3 className='text-xl font-semibold mb-2 text-center'>
									{box.title}
								</h3>
								<div className='w-10 h-0.5 bg-blue-500 mb-3 mx-auto' />
								<p className='text-zinc-800 text-center text-lg'>
									{box.description}
								</p>
							</div>
						))}
					</div>

					<div className='flex justify-center'>
						<div className='relative w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden'>
							<Image
								src={MidIMG}
								alt='Why Choose Lead Softwares'
								// fill
								className='object-cover'
								priority
							/>
						</div>
					</div>

					<div className='space-y-10'>
						{whyChooseUsData.map((box, index) => (
							<div key={index} className='rounded-xl p-6'>
								<div className='mb-4 text-4xl flex justify-center'>
									{box.icon2}
								</div>
								<h3 className='text-xl font-semibold mb-2 text-center'>
									{box.title2}
								</h3>
								<div className='w-10 h-0.5 bg-blue-500 mb-3 mx-auto' />
								<p className='text-zinc-800 text-center text-lg'>
									{box.description2}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

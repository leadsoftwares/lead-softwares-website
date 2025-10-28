'use client'
import SectionBG from '@/public/section-bg.jpg'
import { motion } from 'framer-motion'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
interface TitleProps {
	title: string
	desc?: string
	src?: string | StaticImageData
	width?: number
	height?: number
	bgSrc?: string
	className?: string
}

const NavbarTitle = ({
	title,
	desc,
	src,
	width = 500,
	height = 500,
	bgSrc = `url(${SectionBG.src})`,
	className = '',
}: TitleProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className={`w-full h-[80vh] pt-26 relative ${className}`}
			style={{
				backgroundImage: bgSrc,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{!src && (
				<div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 pointer-events-none'></div>
			)}
			{src && (
				<div className='w-full h-full flex justify-evenly items-center lg:pb-10 gap-10 md:px-10 relative z-20'>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='w-170'
					>
						<div className='md:hidden mx-auto flex justify-center mb-6'>
							<Image width={400} height={400} src={src} alt='' />
						</div>
						<div className='px-6 z-20'>
							<div
								className={`text-center md:text-left lg:w-full title text-primary font-bold text-4xl md:text-7xl`}
							>
								{title}
							</div>
							<div
								className={`text-text text-center md:text-left mt-6 text-md md:text-xl mb-12`}
							>
								{desc}
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='hidden md:block mb-10'
					>
						{src && <Image width={width} height={height} src={src} alt='' />}
					</motion.div>
				</div>
			)}
			{!src && (
				<div className='w-full h-full flex items-center lg:mx-20 lg:pb-10 gap-10 md:px-10 relative z-20'>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='w-170'
					>
						<div className='px-6 z-20'>
							<div
								className={`text-center md:text-left lg:w-full title text-white font-bold text-5xl md:text-7xl`}
							>
								{title}
							</div>
							<div
								className={`text-center md:text-left mt-6 text-md md:text-xl mb-12 text-zinc-200`}
							>
								{desc}
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</motion.div>
	)
}

export default NavbarTitle

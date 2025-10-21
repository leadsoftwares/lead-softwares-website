'use client'
import SectionBG from '@/public/section-bg.jpg'
import { motion } from 'framer-motion'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
interface TitleProps {
	title: string
	src: string | StaticImageData
}

const NavbarTitle = ({ title, src }: TitleProps) => {
	return (
		<div
			className='w-full h-[70vh] pt-26'
			style={{
				backgroundImage: `url(${SectionBG.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='w-full h-full flex justify-evenly items-center lg:pb-10 gap-10 md:px-10'>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='w-170'
				>
					<div className='md:hidden mx-auto flex justify-center mb-6'>
						<Image width={300} height={300} src={src} alt='' />
					</div>
					<div className='px-6'>
						<div className='text-center md:text-left lg:w-full title text-primary font-bold text-3xl md:text-7xl'>
							{title}
						</div>
						<div className=' text-text text-center md:text-left mt-6 text-md md:text-xl mb-12'>
							The Engitech Token is the key to unlocking the full potential of
							Engitech. Get eve higher earning rates and our lowest rates
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='hidden md:block'
				>
					<Image width={500} height={500} src={src} alt='' />
				</motion.div>
			</div>
		</div>
	)
}

export default NavbarTitle

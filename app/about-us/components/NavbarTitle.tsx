'use client'
import CustomButton from '@/components/custom-btn'
import SectionBG from '@/public/section-bg.jpg'
import { motion } from 'framer-motion'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
interface TitleProps {
	title: string
	src: string | StaticImageData
}

const NavbarTitle = ({ title, src }: TitleProps) => {
	return (
		<div
			className='w-full max-h-[100vh] pt-26'
			style={{
				backgroundImage: `url(${SectionBG.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* About us title */}
			<div className='w-full h-full flex justify-evenly items-center lg:pb-10 gap-10 md:px-10'>
				{/* left */}
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='w-170'
				>
					{/* mobile-view img */}
					<div className='md:hidden mx-auto flex justify-center mb-6'>
						<Image width={300} height={300} src={src} alt='' />
					</div>
					{/* title */}
					<div className='px-6'>
						<div className='text-center lg:text-left lg:w-full title text-primary font-bold text-5xl md:text-7xl'>
							{title}
						</div>
						{/* desc */}
						<div className=' text-text text-center lg:text-left mt-6 text-xl mb-12'>
							The Engitech Token is the key to unlocking thefull potential of
							Engitech. Get eve higher earning rates and our lowest rates
						</div>
						<Link className='hidden lg:block' href={'/consultation'}>
							<CustomButton title='Get Started' />
						</Link>
					</div>
				</motion.div>
				{/* right */}
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='hidden md:block'
				>
					<Image width={700} height={700} src={src} alt='' />
				</motion.div>
			</div>
		</div>
	)
}

export default NavbarTitle

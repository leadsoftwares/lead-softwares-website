import Barq from '@/public/png/Brand Logo/Barq e Shop.png'
import City17 from '@/public/png/Brand Logo/City 17.png'
import Crazy from '@/public/png/Brand Logo/Crazy By Rasel.png'
import IDN from '@/public/png/Brand Logo/IDN Network.png'
import SolaBran from '@/public/png/Brand Logo/SolaBran.png'
import SuperA from '@/public/png/Brand Logo/Super Aurora.png'
import Tiger from '@/public/png/Brand Logo/Tiger it.png'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ProjectsLogos = () => {
	const [isVisible, setIsVisible] = useState(true)
	const ourProjectsLogos = [
		{ src: Barq, alt: 'Barq e Shop' },
		{ src: Crazy, alt: 'Crazy By Rasel' },
		{ src: IDN, alt: 'IDN Network' },
		{ src: SolaBran, alt: 'SolaBran' },
		{ src: Tiger, alt: 'Tiger IT' },
		{ src: City17, alt: 'City 17' },
		{ src: SuperA, alt: 'Super Aurora' },
	]
	useEffect(() => {
		const handleVisibilityChange = () => {
			setIsVisible(!document.hidden)
		}

		document.addEventListener('visibilitychange', handleVisibilityChange)
		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [])
	return (
		<div className='w-full space-y-12 md:space-y-20'>
			<div className='text-primary text-center mx-4 lg:mx-0 text-2xl md:text-3xl font-semibold mt-8 lg:mt-30'>
				Trusted by nearly 5000+ customers & startups
			</div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='hidden lg:flex w-full flex-wrap justify-center lg:flex-row items-center gap-26 md:gap-20 lg:gap-26 mt-10 pb-28'
			>
				{ourProjectsLogos.map((partner, index) => (
					<Image
						key={index}
						width={100}
						height={100}
						src={partner.src}
						alt={partner.alt}
					/>
				))}
			</motion.div>

			<div className='lg:hidden overflow-hidden pb-14 md:pb-28'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className={`inline-flex items-center ${
						isVisible ? 'animate-marquee' : ''
					}`}
					style={{
						whiteSpace: 'nowrap',
					}}
				>
					{ourProjectsLogos.map((partner, index) => (
						<div
							key={`partner-${index}`}
							className='mx-8 flex-shrink-0 hover:scale-110 transition-transform duration-300'
						>
							<Image
								width={100}
								height={100}
								src={partner.src}
								alt={partner.alt}
								className='object-contain'
							/>
						</div>
					))}

					{ourProjectsLogos.map((partner, index) => (
						<div
							key={`partner-dup-${index}`}
							className='mx-8 flex-shrink-0 hover:scale-110 transition-transform duration-300'
						>
							<Image
								width={100}
								height={100}
								src={partner.src}
								alt={partner.alt}
								className='object-contain'
							/>
						</div>
					))}

					{ourProjectsLogos.map((partner, index) => (
						<div
							key={`partner-triple-${index}`}
							className='mx-8 flex-shrink-0 hover:scale-110 transition-transform duration-300'
						>
							<Image
								width={100}
								height={100}
								src={partner.src}
								alt={partner.alt}
								className='object-contain'
							/>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	)
}

export default ProjectsLogos

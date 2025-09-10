import { motion } from 'motion/react'
import Image from 'next/image'
import AWS from '../public/webp/aws.webp'
import Brandlogo from '../public/webp/brandlogo.webp'
import Forbes from '../public/webp/forbes.webp'
import Spotify from '../public/webp/spotify.webp'
import Trustpilot from '../public/webp/trustpilot.webp'
const Partners = () => {
	return (
		<div className='w-full'>
			<div className='text-[#321270] text-center mx-4 lg:mx-0 text-2xl font-semibold mt-38'>
				Trusted by nearly 5000+ customers & startups
			</div>
			{/* logos */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='flex w-full flex-wrap justify-center lg:flex-row items-center gap-26 md:gap-20 lg:gap-26 mt-10 pb-28'
			>
				<Image src={Trustpilot} alt='trustpilot' />
				<Image src={AWS} alt='AWS' />
				<Image src={Spotify} alt='Spotify' />
				<Image src={Brandlogo} alt='Brandlogo' />
				<Image src={Forbes} alt='Forbes' />
			</motion.div>
		</div>
	)
}

export default Partners

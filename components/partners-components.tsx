import { motion } from 'motion/react'
import Image from 'next/image'
import Barq from '@/public/png/Brand Logo/Barq e Shop.png'
import Crazy from '@/public/png/Brand Logo/Crazy By Rasel.png'
import SolaBran from '@/public/png/Brand Logo/SolaBran.png'
import Tiger from '@/public/png/Brand Logo/Tiger it.png'
import IDN from '@/public/png/Brand Logo/IDN Network.png'
import SuperA from '@/public/png/Brand Logo/Super Aurora.png'
import City17 from '@/public/png/Brand Logo/City 17.png'
const Partners = () => {
	return (
		<div className='w-full space-y-20'>
			<div className='text-primary text-center mx-4 lg:mx-0 text-2xl font-semibold mt-30'>
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
				<Image width={100} height={100} src={Barq} alt='Barq' />
				<Image width={100} height={100} src={Crazy} alt='Crazy' />
				<Image width={100} height={100} src={IDN} alt='IDN' />
				<Image width={100} height={100} src={SolaBran} alt='SolaBran' />
				<Image width={100} height={100} src={Tiger} alt='Tiger' />
				<Image width={100} height={100} src={City17} alt='City17' />
				<Image width={100} height={100} src={SuperA} alt='Super Aurora' />
			</motion.div>
		</div>
	)
}

export default Partners

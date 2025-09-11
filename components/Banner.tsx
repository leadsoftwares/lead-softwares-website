import CustomButton from '@/components/custom-btn'
import Typewriter from '@/components/typewriter'
import Bannerbg from '@/public/png/banner-bg.png'
import LandingIMG from '@/public/png/portfolio1.png'
import LandingIMG2 from '@/public/png/portfolio2.png'
import LandingIMG3 from '@/public/png/portfolio3.png'
import LandingIMG4 from '@/public/png/portfolio4.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Banner = () => {
	return (
		<div className='relative overflow-hidden'>
			{/* Banner Section (blue background + text) */}

			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				style={{
					backgroundImage: `url(${Bannerbg.src})`, // ✅ correct
				}}
				className='relative w-full max-h-[85vh] bg-no-repeat bg-cover text-white flex items-center'
			>
				<div className='container mx-auto px-6 lg:px-20 py-20 lg:py-40 flex flex-col items-center lg:items-start space-y-10 z-90'>
					<div className='font-bold text-4xl lg:text-7xl text-center lg:text-left'>
						<h1 className='hidden md:block'>
							We manage your{' '}
							<span>
								<Typewriter
									words={[
										'IT',
										'Marketing',
										'Development',
										'Business',
										'Sales',
										'Software',
									]}
								/>
							</span>
						</h1>
						<h1 className='block md:hidden leading-tight'>
							We manage your <br />
							<span>
								<Typewriter
									words={[
										'IT',
										'Marketing',
										'Development',
										'Business',
										'Sales',
										'Software',
									]}
								/>
							</span>
						</h1>

						<h1>You handle success</h1>
					</div>
					<p className='max-w-2xl text-zinc-300 text-lg text-center lg:text-left'>
						An incredible theme for modern Software and SaaS businesses. With a
						sleek and professional design, customizable layouts, and
						integrations with popular plugins.
					</p>
					<div className='flex gap-5 cursor-pointer'>
						<CustomButton title={'Get Started'} />
						<button className='hidden md:block bg-white text-blue-500 py-2 px-4 rounded-md cursor-pointer hover:bg-zinc-100 font-semibold'>
							See All Demos
						</button>
					</div>
				</div>
			</motion.section>

			{/* Column 1 (scroll UP) */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='absolute top-0 -right-50 lg:right-30 overflow-hidden scale-130 md:scale-107 -rotate-32 md:-rotate-12 z-80'
			>
				<div className='flex flex-col gap-6 animate-scroll-up opacity-10 md:opacity-10 z-20'>
					{[...Array(2)].map((_, dup) => (
						<div key={dup} className='flex flex-col gap-6'>
							<Image
								className='hidden md:block rounded-lg'
								width={400}
								height={300}
								src={LandingIMG}
								alt='1'
							/>
							<Image
								className='block md:hidden rounded-lg'
								width={150}
								height={50}
								src={LandingIMG}
								alt='1'
							/>
							<Image
								className='hidden md:block rounded-lg'
								width={400}
								height={300}
								src={LandingIMG2}
								alt='2'
							/>
							<Image
								className='block md:hidden rounded-lg'
								width={150}
								height={50}
								src={LandingIMG2}
								alt='2'
							/>
							<Image
								className='hidden md:block rounded-lg'
								width={400}
								height={300}
								src={LandingIMG3}
								alt='3'
							/>
							<Image
								className='block md:hidden rounded-lg'
								width={150}
								height={50}
								src={LandingIMG3}
								alt='3'
							/>
							<Image
								className='hidden md:block rounded-lg'
								width={400}
								height={300}
								src={LandingIMG4}
								alt='4'
							/>
							<Image
								className='block md:hidden rounded-lg'
								width={150}
								height={50}
								src={LandingIMG4}
								alt='4'
							/>
						</div>
					))}
				</div>
			</motion.div>

			{/* Column 2 (scroll DOWN) */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='absolute top-0 -right-110 lg:-right-90 overflow-hidden scale-130 md:scale-107 -rotate-32 md:-rotate-12 z-90'
			>
				<div className='flex flex-col gap-6 animate-scroll-down opacity-10 z-20'>
					{[...Array(2)].map((_, dup) => (
						<div key={dup} className='flex flex-col gap-6'>
							<Image
								className='hidden md:block rounded-lg'
								width={400}
								height={300}
								src={LandingIMG}
								alt='1'
							/>
							<Image
								className='block md:hidden rounded-lg'
								width={150}
								height={50}
								src={LandingIMG}
								alt='1'
							/>
							<Image
								className='hidden md:block rounded-lg'
								width={400}
								height={300}
								src={LandingIMG2}
								alt='2'
							/>
							<Image
								className='block md:hidden rounded-lg'
								width={150}
								height={50}
								src={LandingIMG2}
								alt='2'
							/>
							<Image
								className='hidden md:block rounded-lg'
								width={400}
								height={300}
								src={LandingIMG3}
								alt='3'
							/>
							<Image
								className='block md:hidden rounded-lg'
								width={150}
								height={50}
								src={LandingIMG3}
								alt='3'
							/>
							<Image
								className='hidden md:block rounded-lg'
								width={400}
								height={300}
								src={LandingIMG4}
								alt='4'
							/>
							<Image
								className='block md:hidden rounded-lg'
								width={150}
								height={50}
								src={LandingIMG4}
								alt='4'
							/>
						</div>
					))}
				</div>
			</motion.div>
		</div>
	)
}

export default Banner

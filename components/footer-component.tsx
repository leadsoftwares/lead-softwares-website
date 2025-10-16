'use client'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/png/Lead Logo White with white Text-02-02.png'
const Footer = () => {
	return (
		<div>
			<div className='relative overflow-hidden w-full bg-[#12032F] h-196 md:h-155 lg:h-110'>
				{/* gradient */}
				<div className='ml-30 h-110 w-120 flex items-center'>
					<div className='hidden lg:block h-100 w-120 blur-3xl bg-[#31096A] rounded-full'></div>
				</div>

				<div className='absolute left-0 top-0 flex flex-wrap gap-16 flex-col md:flex-row justify-between w-full z-110 py-18 px-8  md:py-20 md:px-30'>
					{/* left-side */}
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='flex flex-col items-center md:items-start text-center md:text-left'
					>
						<Image width={150} height={150} src={Logo} alt='Lead-softwares' />
						<div className='text-zinc-300 text-sm font-light mt-6 max-w-[380px]'>
							Let us take care of your IT challenges so you can focus on achieving your goals. Seamless technology, smarter solutions, and dedicated support — all in one place.
						</div>
					</motion.div>
					{/* right side */}
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='flex flex-col text-center md:flex-row gap-10 md:gap-30 md:pr-20 relative z-110 md:pb-14'
					>
						<ul className='flex flex-col gap-6 text-zinc-400 text-sm'>
							<a className='text-zinc-200 font-semibold' href='#'>
								Products
							</a>
							<Link href='/about-us'>About Us</Link>
							<Link href='/portfolio'>Portfolio</Link>
							<Link href='/services'>Services</Link>
							<Link href='/team'>Team</Link>
						</ul>
						<ul className='flex flex-col gap-6 text-zinc-400 text-sm'>
							<a className='text-zinc-200 font-semibold' href='#'>
								Resources
							</a>
							<Link href='/consultation'>Quote</Link>
							<Link href='/contact'>Contact Us</Link>
							<Link href='/career'>Career</Link>
						</ul>
					</motion.div>
					{/* gradient */}
					<div className='hidden lg:block absolute right-50 top-10 blur-3xl h-90 w-100 bg-[#412855] rounded-full'></div>
					<footer className='w-[80vw] border-t border-zinc-600 z-110 flex justify-between'>
						<div className='text-zinc-400 text-xs mt-2'>
							© Lead Softwares 2024. All rights reserved.
						</div>
						<div className='flex gap-6 mt-2'>
							<a href='https://www.facebook.com/leadsoft' target='_blank'>
								<Facebook color='white' size={18} />
							</a>
							<a href='#'>
								<Twitter color='white' size={18} />
							</a>
							<a href='#'>
								<Youtube color='white' size={18} />
							</a>
						</div>
					</footer>
				</div>
			</div>
		</div>
	)
}

export default Footer

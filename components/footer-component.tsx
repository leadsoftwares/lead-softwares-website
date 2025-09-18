import { Facebook, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import Logo from '../public/png/Lead Logo White with white Text-02-02.png'

const Footer = () => {
	return (
		<div>
			<div
				// initial={{ opacity: 0, x: 50 }}
				// whileInView={{ opacity: 1, x: 0 }}
				// viewport={{ once: true }}
				// transition={{ duration: 0.8, ease: 'easeOut' }}
				className='relative overflow-hidden w-full bg-[#12032F] h-290 md:h-175 lg:h-110'
			>
				{/* gradient */}
				<div className='ml-30 h-110 w-120 flex items-center'>
					<div className='hidden lg:block h-100 w-120 blur-3xl bg-[#31096A] rounded-full'></div>
				</div>

				<div className='absolute left-0 top-0 flex flex-wrap gap-16 flex-col md:flex-row justify-between w-full z-110 py-18 px-8  md:py-20 md:px-30'>
					{/* left-side */}
					<div className='flex flex-col items-center md:items-start text-center md:text-left'>
						<Image width={150} height={150} src={Logo} alt='Leadsoftwares' />
						{/* desc */}
						<div className='text-zinc-300 text-sm font-light mt-6'>
							Creative-powered to fuel your growth goals. We build world-class
							digital <br /> products, software and branding.
						</div>
					</div>
					{/* right side */}
					<div className='flex flex-col text-center md:flex-row gap-10 md:gap-30 md:pr-20 relative z-110 pb-14'>
						<ul className='flex flex-col gap-6 text-zinc-400 text-sm'>
							<a className='text-zinc-200 font-semibold' href='#'>
								Products
							</a>
							<a href='#'>Unify App</a>
							<a href='#'>Page Builder</a>
							<a href='#'>Templates</a>
							<a href='#'>Pricing</a>
						</ul>
						<ul className='flex flex-col gap-6 text-zinc-400 text-sm'>
							<a className='text-zinc-200 font-semibold' href='#'>
								Resources
							</a>
							<a href='#'>Design</a>
							<a href='#'>Inspiration</a>
							<a href='#'>Blog</a>
							<a href='#'>Jobs</a>
						</ul>
						<ul className='flex flex-col gap-6 text-zinc-400 text-sm'>
							<a className='text-zinc-200 font-semibold' href='#'>
								Support
							</a>
							<a href='#'>Documentation</a>
							<a href='#'>Help Desk</a>
							<a href='#'>Video Guides</a>
							<a href='#'>Security</a>
						</ul>
					</div>
					{/* gradient */}
					<div className='hidden lg:block absolute right-0 top-10 blur-3xl h-90 w-100 bg-[#412855] rounded-full'></div>
					<footer className='w-[80vw] border-t border-zinc-600 z-110 flex justify-between'>
						<div className='text-zinc-400 text-xs mt-2'>
							© Lead Softwares 2024. All rights reserved.
						</div>
						{/* icons */}
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

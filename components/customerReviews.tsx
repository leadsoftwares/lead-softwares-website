import Stars from '@/public/svg/stars.svg'
import Avatar1 from '@/public/webp/avatar-1.webp'
import Avatar2 from '@/public/webp/avatar-2.webp'
import Avatar3 from '@/public/webp/avatar-3.webp'
import AboutStaff1 from '@/public/webp/about-staff-1.webp'
import AboutStaff2 from '@/public/webp/about-staff-2.webp'
import AboutStaff3 from '@/public/webp/about-staff-3.webp'
import { motion } from 'framer-motion'
import Image from 'next/image'
const customers = [
	{
		name: 'Ernest Smith',
		info: 'Developer at Unixity',
		img: Avatar1,
		review:
			'Outstanding dedication to excellence, exceptional support,received. Impressive service!',
	},
	{
		name: 'Stella Smith',
		info: 'Engineer at Unify',
		img: Avatar2,
		review:
			'Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations.',
	},
	{
		name: 'Thomas Smith',
		info: 'Developer at Unixity',
		img: Avatar3,
		review:
			'I highly recommend this agency. Testing for our project was done everything top-notch',
	},
	{
		name: 'Jorden Lawrence',
		info: 'Developer at Unixity',
		img: AboutStaff2,
		review:
			'Outstanding dedication to excellence, exceptional support,received. Impressive service!',
	},
	{
		name: 'Jolly Lara',
		info: 'Engineer at Unify',
		img: AboutStaff1,
		review:
			'Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations.',
	},
	{
		name: 'Alizabeth Urman',
		info: 'Developer at Unixity',
		img: AboutStaff3,
		review:
			'I highly recommend this agency. Testing for our project was done everything top-notch',
	},
]

const customerReviews = () => {
	return (
		<div className='py-30 bg-bg'>
			<motion.div
				initial={{ opacity: 0, x: -120 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: 'easeInOut' }}
				className='px-4 text-4xl lg:text-5xl font-bold text-primary text-center'
			>
				What our customers are saying
			</motion.div>
			{/* cards */}
			<motion.div
				initial={{ opacity: 0, x: 120 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: 'easeInOut' }}
				className='px-4 lg:px-30 flex justify-center flex-wrap gap-10 mt-20 '
			>
				{customers.map((customer, index) => (
					<div
						key={index}
						className='w-90 border border-zinc-300 rounded-4xl bg-white p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500'
					>
						<div className='flex items-center gap-2'>
							<Image className='rounded-full' width={80} height={80} src={customer.img} alt={customer.name} />
							<div className='space-y-1'>
								<div className='font-bold'>{customer.name}</div>
								<p className='text-text'>{customer.info}</p>
								<Image src={Stars} alt='' />
							</div>
						</div>
						<div className='text-text text-lg mt-6'>{customer.review}</div>
					</div>
				))}
			</motion.div>
		</div>
	)
}

export default customerReviews

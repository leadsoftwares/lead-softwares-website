import Icon1 from '@/public/svg/icons/ai-commentary.svg'
import Icon2 from '@/public/svg/icons/like-1.svg'
import Icon6 from '@/public/svg/icons/like-tag.svg'
import Icon3 from '@/public/svg/icons/quote-down (1).svg'
import Icon5 from '@/public/svg/icons/quote-down.svg'
import Icon7 from '@/public/svg/icons/ratings-rate-svgrepo-com.svg'
import Icon4 from '@/public/svg/icons/star.svg'
import SectionBG from '@/public/testimonial-bg.png'
import Image from 'next/image'
import Testimonials from './testmonials'

const customerReviews = () => {
	return (
		<div
			className='py-30 relative'
			style={{
				backgroundImage: `url(${SectionBG.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* icons */}
			{/* desktop icons */}
			<Image
				className='hidden md:block absolute left-10 opacity-10 filter grayscale'
				width={100}
				height={100}
				src={Icon1}
				alt='Icon1'
			/>
			<Image
				className='hidden md:block absolute right-10 opacity-10 filter grayscale'
				width={80}
				height={80}
				src={Icon2}
				alt='Icon1'
			/>
			<Image
				className='hidden md:block absolute bottom-10 left-10 opacity-10 filter grayscale'
				width={50}
				height={50}
				src={Icon3}
				alt='Icon1'
			/>
			<Image
				className='hidden md:block absolute right-10 bottom-10 opacity-10 filter grayscale'
				width={70}
				height={70}
				src={Icon4}
				alt='Icon1'
			/>
			<Image
				className='hidden md:block absolute left-50 top-80 opacity-10 filter grayscale'
				width={70}
				height={70}
				src={Icon5}
				alt='Icon1'
			/>
			<Image
				className='hidden md:block absolute right-50 top-80 opacity-10 filter grayscale'
				width={70}
				height={70}
				src={Icon6}
				alt='Icon1'
			/>
			<Image
				className='hidden md:block absolute right-50 top-120 opacity-10 filter invert'
				width={140}
				height={140}
				src={Icon7}
				alt='Icon1'
			/>
			{/* mobile icons */}
				<Image
				className='block md:hidden absolute left-10 opacity-10 filter grayscale'
				width={70}
				height={70}
				src={Icon1}
				alt='Icon1'
			/>
			<Image
				className='block md:hidden absolute right-10 opacity-10 filter grayscale'
				width={50}
				height={50}
				src={Icon2}
				alt='Icon1'
			/>
			<Image
				className='block md:hidden absolute bottom-10 left-10 opacity-10 filter grayscale'
				width={30}
				height={30}
				src={Icon3}
				alt='Icon1'
			/>
			<Image
				className='block md:hidden absolute right-10 bottom-10 opacity-10 filter grayscale'
				width={40}
				height={40}
				src={Icon4}
				alt='Icon1'
			/>
			<Image
				className='block md:hidden absolute left-50 top-80 opacity-10 filter grayscale'
				width={40}
				height={40}
				src={Icon5}
				alt='Icon1'
			/>
			<Image
				className='block md:hidden absolute right-50 top-80 opacity-10 filter grayscale'
				width={40}
				height={40}
				src={Icon6}
				alt='Icon1'
			/>
			<Image
				className='block md:hidden absolute right-40 top-12 opacity-10 filter invert'
				width={80}
				height={80}
				src={Icon7}
				alt='Icon1'
			/>
			<Testimonials />
			{/* cards */}
			{/* <motion.div
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
							<Image
								className='rounded-full'
								width={80}
								height={80}
								src={customer.img}
								alt={customer.name}
							/>
							<div className='space-y-1'>
								<div className='font-bold'>{customer.name}</div>
								<p className='text-text'>{customer.info}</p>
								<Image src={Stars} alt='' />
							</div>
						</div>
						<div className='text-text text-lg mt-6'>{customer.review}</div>
					</div>
				))}
			</motion.div> */}
		</div>
	)
}

export default customerReviews

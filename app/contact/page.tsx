'use client'
import Form from '@/app/contact/components/form'
import { CustomButton } from '@/components/custom-btn'
import Box1 from '@/public/svg/box1.svg'
import Box2 from "@/public/svg/box2.svg"
import Box3 from "@/public/svg/box3.svg"
import Email from '@/public/svg/email.svg'
import Location from '@/public/svg/location.svg'
import Phone from '@/public/svg/phone.svg'
import Contact1 from '@/public/webp/contact-1.webp'
import Image from 'next/image'
import NavbarTitle from '../about-us/components/NavbarTitle'
import FAQPage from './components/faq-box'

const Contact = () => {
	return (
		<div className='w-full'>
			<NavbarTitle title='Contact Us' locate='Contact Us' />
			{/*  */}
			<div className='flex flex-col lg:flex-row items-center gap-35 px-4 lg:px-25 py-30'>
				<div>
					<Image src={Contact1} alt='Contact' />
				</div>
				<div className='lg:w-[35%] space-y-12'>
					<div className='text-4xl font-bold text-primary'>
						Growth strategies to be effective & competitive
					</div>
					<div className='w-[90%] lg:w-[80%] text-zinc-500 text-lg'>
						Everything we do and dream up has a solid design impact. We create
						human-centered enterprise software that has the polished, snappy
						feel of the best consumer apps.
					</div>
					<CustomButton title='Get Started' />
				</div>
			</div>
			{/*  */}
			<div className='bg-bg lg:px-30 py-30'>
				<div className='text-primary text-center text-5xl lg:text-6xl font-bold'>
					Have some questions?
				</div>
				<div className='mt-20 px-4 flex gap-20 flex-col lg:flex-row'>
					<div className='lg:w-[50%] h-140 lg:h-[500px]'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160972569!2d72.74109918983905!3d33.684420199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf2fda0895f1%3A0x999f9db6e49389c!2sIslamabad!5e0!3m2!1sen!2s!4v1693946400000!5m2!1sen!2s'
							width='100%'
							height='100%'
							style={{ border: 0, borderRadius: 10 }}
							allowFullScreen
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
					<Form />
				</div>
				{/* cards */}
				<div className='mt-30 flex gap-10 flex-col lg:flex-row'>
					{/* card 1 */}
					<div className='bg-white rounded-2xl shadow-xl w-100 py-10 text-center mx-auto'>
						<div className='w-16 h-16 rounded-full bg-blue-500 mx-auto mb-2 flex items-center justify-center'>
							<Image src={Location} alt='location' />
						</div>
            <h2 className='font-extrabold text-2xl mb-4'>Location</h2>
            <p className='text-zinc-600 mb-4'>Find us at our office</p>
						<p className='text-black font-bold'>7901 4th St N STE 300 Saint</p>
						<p className='text-black font-bold'>Petersburg, FL 33702 US</p>
					</div>
					{/* card 2 */}
					<div className='bg-white rounded-2xl shadow-xl w-100 py-10 text-center mx-auto'>
						<div className='w-16 h-16 rounded-full bg-blue-500 mx-auto mb-2 flex items-center justify-center'>
							<Image src={Phone} alt='location' />
						</div>
             <h2 className='font-extrabold text-2xl mb-4'>Phone</h2>
            <p className='text-zinc-600 mb-4'>Reach out to us by phone</p>
						<p className='text-black font-bold'>+92 316 6072132</p>
					</div>
					{/* card 3 */}
					<div className='bg-white rounded-2xl shadow-xl w-100 py-10 text-center mx-auto'>
						<div className='w-16 h-16 rounded-full bg-blue-500 mx-auto mb-2 flex items-center justify-center'>
							<Image src={Email} alt='location' />
						</div>
             <h2 className='font-extrabold text-2xl mb-4'>Email</h2>
						<p className='text-zinc-600 mb-4'>Contact us at</p>
						<p className='text-black font-bold'>contact@leadsoftwares.com</p>
					</div>
				</div>
			</div>
			{/*  */}
			<div className='py-25'>
				<div className='px-6 lg:w-[70%] text-4xl lg:text-5xl text-primary font-semibold leading-11 lg:leading-14 text-center mx-auto'>
					A proficient software development boutique focuses on cutting-edge
					technologies
				</div>
				<div className='flex flex-col lg:flex-row gap-10 justify-center mt-20 px-4 lg:px-30'>
          {/* box1 */}
					<div className='bg-blue-500 text-white rounded-2xl px-8 py-10 space-y-6'>
						<div>
							<Image src={Box1} alt='box1' />
						</div>
						<div className='font-bold text-2xl'>Technology Services</div>
						<div className='text-md leading-7'>
							If you’re looking for a dedicated partner to entrust your software
							& app development someone reliable and skilled enough to accompany
							you through your technical blockage, we are the one.
						</div>
            <button className='bg-white cursor-pointer text-blue-500 p-4 px-8 rounded-md'>Learn More</button>
					</div>
          {/* box2 */}
          	<div className=' bg-blue-500 text-white rounded-2xl px-8 py-10 space-y-6'>
						<div>
							<Image src={Box2} alt='box1' />
						</div>
						<div className='font-bold text-2xl'>Technology Services</div>
						<div className='text-md leading-7'>
							If you’re looking for a dedicated partner to entrust your software
							& app development someone reliable and skilled enough to accompany
							you through your technical blockage, we are the one.
						</div>
            <button className='bg-white cursor-pointer text-blue-500 p-4 px-8 rounded-md'>Learn More</button>
					</div>
          {/* box3 */}
          	<div className=' bg-blue-500 text-white rounded-2xl px-8 py-10 space-y-6'>
						<div>
							<Image src={Box3} alt='box1' />
						</div>
						<div className='font-bold text-2xl'>Technology Services</div>
						<div className='text-md leading-7'>
							If you’re looking for a dedicated partner to entrust your software
							& app development someone reliable and skilled enough to accompany
							you through your technical blockage, we are the one.
						</div>
            <button className='bg-white cursor-pointer text-blue-500 p-4 px-8 rounded-md'>Learn More</button>
					</div>
				</div>
			</div>
      {/*  */}
      <FAQPage />
		</div>
	)
}

export default Contact

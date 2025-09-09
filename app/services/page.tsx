'use client'

import Avatar1 from '@/public/webp/avatar-1.webp'
import Avatar2 from "@/public/webp/avatar-2.webp"
import Avatar3 from "@/public/webp/avatar-3.webp"
import Image from 'next/image'
import { CustomButton } from '../../components/custom-btn'
import Partners from '../../components/partners-components'
import Strategy from '../../components/strategy'
import File from '../../public/svg/services.svg'
import Shop from '../../public/svg/shop.svg'
import Speaker from '../../public/svg/speaker.svg'
import NavbarTitle from '../about-us/components/NavbarTitle'
import FAQ from './components/faq'
import Stars from "@/public/svg/stars.svg"

const services = () => {
	return (
		<div className='w-full'>
			<NavbarTitle title='Services' locate='Services' />
			{/*  */}
			<div className='py-30'>
				<div className='text-center w-full space-y-2 mx-auto'>
					<div className='subTitle text-blue-500 text-xs'>
						We work mainly with digital agencies and software companies
					</div>
					<div className='w-[55%] mx-auto text-5xl leading-14 font-semibold text-primary'>
						Outstanding software and services that solve your hassle
					</div>
				</div>
				<div className='flex gap-10 justify-center px-30 mt-20'>
					{/* box1 */}
					<div className='p-8 border border-zinc-300 rounded-xl space-y-6 hover:shadow-2xl transition-all duration-500'>
						<div>
							<Image src={File} alt='File' />
						</div>
						<div className='font-bold'>Technology Services</div>
						<p className='text-zinc-500'>
							Together we transform your business from the people to the
							processes.
						</p>
						<CustomButton title='Learn More' />
					</div>
					{/* box2 */}
					<div className='p-8 border border-zinc-300 rounded-xl space-y-6 hover:shadow-2xl transition-all duration-500'>
						<div>
							<Image src={Shop} alt='File' />
						</div>
						<div className='font-bold'>Technology Services</div>
						<p className='text-zinc-500'>
							Together we transform your business from the people to the
							processes.
						</p>
						<CustomButton title='Learn More' />
					</div>
					{/* box3 */}
					<div className='p-8 border border-zinc-300 rounded-xl space-y-6 hover:shadow-2xl transition-all duration-500'>
						<div>
							<Image src={Speaker} alt='File' />
						</div>
						<div className='font-bold'>Technology Services</div>
						<p className='text-zinc-500'>
							Together we transform your business from the people to the
							processes.
						</p>
						<CustomButton title='Learn More' />
					</div>
				</div>
				<div className='w-full px-30 flex gap-10 mt-20 text-blue-950'>
					<div className='bg-green-100 flex items-center justify-center gap-4 p-6'>
						<div className='font-bold text-6xl'>50k</div>
						<div className='font-bold'>Total Users</div>
					</div>
					<div className='bg-blue-100 flex items-center justify-center gap-4 p-6'>
						<div className='font-bold text-6xl'>32k</div>
						<div className='font-bold'>Downloads</div>
					</div>
					<div className='bg-red-100 flex items-center justify-center gap-4 p-6'>
						<div className='font-bold text-6xl'>90k</div>
						<div className='font-bold'>Social Likes</div>
					</div>
					<div className='bg-pink-100 flex items-center justify-center gap-4 p-6'>
						<div className='font-bold text-6xl'>25k</div>
						<div className='font-bold'>Subscribers</div>
					</div>
				</div>
			</div>
			{/* strategy */}
			<Strategy />
			{/*  */}
			<div className='py-30 bg-bg'>
				<div className='text-5xl font-bold text-primary text-center'>
					What our customers are saying
				</div>
                {/* cards */}
				<div className='px-30 flex gap-10 mt-20'>
					{/* card1 */}
					<div className='border border-zinc-300 rounded-4xl bg-white p-8'>
						<div className='flex items-center gap-2'>
							<Image width={80} height={80} src={Avatar1} alt='Avatar' />
							<div className='space-y-1'>
								<div className='font-bold'>Ernest Smith</div>
                                <p className='text-zinc-500'>Developer at Unixity</p>
                                <Image src={Stars} alt=''/>
							</div>
						</div>
                        <div className='text-zinc-600 text-lg mt-6'>"Outstanding dedication to excellence, exceptional support received. Impressive service!"</div>
					</div>
                    {/* card2 */}
                    <div className='border border-zinc-300 rounded-4xl bg-white p-8'>
						<div className='flex items-center gap-2'>
							<Image width={80} height={80} src={Avatar2} alt='Avatar' />
							<div className='space-y-1'>
								<div className='font-bold'>Stella Smith</div>
                                <p className='text-zinc-500'>Engineer at Unify</p>
                                <Image src={Stars} alt=''/>
							</div>
						</div>
                        <div className='text-zinc-600 text-lg mt-6'>"Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations."</div>
					</div>
                    {/* card3 */}
                    <div className='border border-zinc-300 rounded-4xl bg-white p-8'>
						<div className='flex items-center gap-2'>
							<Image width={80} height={80} src={Avatar3} alt='Avatar' />
							<div className='space-y-1'>
								<div className='font-bold'>Thomas Smith</div>
                                <p className='text-zinc-500'>Developer at Unixity</p>
                                <Image src={Stars} alt=''/>
							</div>
						</div>
                        <div className='text-zinc-600 text-lg mt-6'>"I highly recommend this agency. Testing for our project was done everything top-notch"</div>
					</div>
				</div>
			</div>
			{/*  */}
			<div className='pt-30 px-25'>
				<div className='flex items-center justify-between'>
					<div className='space-y-8'>
						<div className='text-5xl font-bold text-primary'>
							Frequently asked questions
						</div>
						<p className='text-zinc-400'>
							We hope this section will help you better understand the issues
							related to software
						</p>
					</div>
					<div>
						<CustomButton title='Contact Us' />
					</div>
				</div>
				<div>
					<FAQ />
				</div>
			</div>
			{/* Partners */}
			<Partners />
			{/*  */}
			<div className="bg-[url('https://preview.codeless.co/converta/default/wp-content/uploads/2023/03/bg-footer-sub-min.png')] bg-cover bg-center py-30 text-center space-y-6 mx-25 rounded-3xl mb-10">
				<div className='text-white text-5xl font-bold'>
					Subscribe to Our Newsletter
				</div>
				<p className='w-[35%] text-white text-lg mx-auto'>
					Receive the latest technology & business news in your inbox. Select
					the newsletters you’d like to receive.
				</p>
				<div className='w-full text-center'>
					<input
						className='bg-white py-3 w-60 lg:w-80 px-3 rounded'
						type='text'
						placeholder='Your Email Address'
					/>
					<CustomButton title='Sign Up' />
				</div>
			</div>
		</div>
	)
}

export default services

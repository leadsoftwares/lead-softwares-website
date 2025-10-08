'use client'

import Banner from '@/components/Banner'
import CustomerReviews from '@/components/customerReviews'
import Number from '@/components/numbers'
import MobileView from '@/public/png/mobileview.webp'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../components/custom-btn'
import Partners from '../components/partners-components'
import Strategy from '../components/strategy'
import MobileViewCard from '../public/png/mobileviewCard.png'
import Account from '../public/svg/account.svg'
import Briefcase from '../public/svg/briefcase.svg'
import Goal from '../public/svg/goals.svg'
import RoadMap from '../public/svg/roadmap.svg'
import Rocket from '../public/svg/rocket.svg'
import Trophy from '../public/svg/trophy.svg'
import Tv from '../public/svg/tv.svg'

const strategy = [
	{
		icon: Rocket,
		title: 'Design-led digital transformation',
		text: 'We blend innovative design thinking with cutting-edge technology to create seamless digital experiences. Our approach ensures your business stays adaptable, user-focused, and ready to meet future demands with confidence and creativity.',
	},
	{
		icon: Tv,
		title: 'Transition to sustain futures',
		text: 'We guide your business through seamless digital transitions, building scalable and secure systems that adapt as you grow. Our future-ready solutions ensure resilience, efficiency, and sustained success in a rapidly changing world.',
	},
	{
		icon: Trophy,
		title: 'We empower our partners',
		text: 'Collaboration is at our core. We empower partners with customized solutions, expert guidance, and collaborative support — helping you innovate faster, overcome challenges, and thrive in a dynamic and competitive marketplace.',
	},
]
const strategyBoxes = [
	{ icon: Account, title: 'Market Analysis', bg: 'bg-blue-100' },
	{ icon: Goal, title: 'Strategic Roadmap', bg: 'bg-pink-100' },
	{ icon: RoadMap, title: 'Agile Delivery', bg: 'bg-green-100' },
	{ icon: Briefcase, title: 'Success Optimization', bg: 'bg-green-200' },
]

const page = () => {
	return (
		<div className='w-full [scroll-behavior:smooth] overflow-hidden'>
			<Banner />

			<div className='main w-full min-h-196 lg:px-10'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='title text-5xl w-full flex justify-center mt-14  text-primary font-semibold'
				>
					<h2 className='hidden lg:block leading-14'>
						Make your business future-proof <br /> to anticipate the challenges
						to be
					</h2>

					<h2 className='block lg:hidden leading-10 text-center text-3xl md:text-4xl'>
						Make your business <br className='block md:hidden' /> future-proof
						to <br className='block md:hidden' /> anticipate the{' '}
						<br className='block md:hidden' /> challenges to be
					</h2>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='boxes flex flex-col flex-wrap lg:flex-row md:flex-nowrap gap-8 mx-auto items-center lg:justify-center lg::mx-auto mt-24 pb-20 border-b border-gray-300 lg:px-30 xl:px-60'
				>
					{strategy.map((item, i) => (
						<div key={i} className='flex flex-col gap-6 w-80 md:w-160'>
							<Image
								className='w-12 h-12'
								src={item.icon}
								alt={`${item.icon}`}
							/>
							<div className='title font-semibold text-xl md:text-2xl text-primary'>
								{item.title}
							</div>
							<div className='desc text-text font-'>{item.text}</div>
						</div>
					))}
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='details min-h-185 flex flex-col lg:flex-row items-center justify-center gap-10 mt-0 md:mt-10'
				>
					<motion.div
						initial={{ opacity: 0, x: -80 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='relative img mt-10 md:mt-0'
					>
						<Image
							className='w-90 h-90 md:w-145 md:h-150'
							src={MobileView}
							alt='MobileView'
						/>
						<Image
							className='absolute -bottom-10 md:bottom-0'
							src={MobileViewCard}
							alt='MobileViewCard'
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='detail md:w-120 flex flex-col gap-6 md:ml-16 px-4'
					>
						<div className='hidden md:block title text-4xl font-bold text-primary'>
							We&apos;re building business for your digital economy
						</div>
						<div className='block md:hidden title text-3xl font-semibold text-primary text-center'>
							We&apos;re building business <br /> for your digital economy
						</div>
						<div className='desc w-[90vw] md:w-full text-text text-center md:text-left'>
							Your business deserves more than just an online presence — it
							deserves real impact. We build powerful digital solutions that
							drive growth, reach new audiences, and keep you ahead in a
							fast-changing market.
						</div>
						<div className='flex justify-center md:justify-normal gap-12 mt-4'>
							<div className='1 space-y-2'>
								<div className='numbers text-6xl text-[#22c55e] font-bold flex items-center'>
									<Number number={25} />+
								</div>
								<div className='title font-bold text-primary'>
									Business Consultants
								</div>
							</div>
							<div className='2 space-y-2'>
								<div className='numbers text-6xl text-[#22c55e] font-bold flex items-center'>
									<Number number={10} />+
								</div>
								<div className='title font-bold text-primary'>
									Startups in 2023
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
			<Strategy />
			<Partners />
			<div className='goals py-8 md:py-18 px-4 md:px-17 h-full lg:min-h-210 xl:h-210 bg-gradient-to-br from-[#F7F9FC] to-[#EAEAF9]'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='header text-center w-full space-y-4 mx-auto'
				>
					<div className='title text-3xl md:text-5xl leading-9 md:leading-14 font-semibold text-primary'>
						Develop your next business today
					</div>
					<div className='lg:w-[40%] mx-auto text-center subTitle text-text text-lg'>
						We help you turn bold ideas into powerful digital solutions,
						building the foundation for your next successful business venture
						starting today.
					</div>
				</motion.div>
				<div className='main w-full mt-18 mx-auto flex justify-center flex-col lg:flex-row gap-16'>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='left'
					>
						<div className='boxes flex flex-col items-center md:flex-row md:w-160 lg:w-120 xl:w-160 md:flex-wrap gap-6 mx-auto'>
							{strategyBoxes.map((strategyBox, i) => (
								<div
									key={i}
									className={`box h-58 hover:-translate-y-2 transition-all duration-300 pb-18 cursor-pointer hover:shadow-xl shadow-lg bg-white rounded-2xl flex items-center gap-6 flex-col py-12 w-65 sm:w-70 lg:w-50 xl:w-70 mx-auto ${
										i % 2 === 0 ? 'md:-mt-8' : 'md:mt-8'
									}`}
								>
									<div
										className={`icon ${strategyBox.bg} w-14 h-14 rounded-full flex items-center justify-center`}
									>
										<Image src={strategyBox.icon} alt={strategyBox.title} />
									</div>
									<div className='title text-center text-primary text-xl xl:text-2xl font-semibold px-4'>
										{strategyBox.title}
									</div>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='right my-auto lg:w-[30%]'
					>
						<div className='flex flex-col gap-8 w-full'>
							<div className='hidden lg:block text-primary text-4xl font-semibold leading-12'>
								Strategies that get you on <br /> the path to success
							</div>
							<div className='block lg:hidden text-primary text-3xl md:text-4xl font-semibold leading-10 md:leading-12'>
								Strategies that get you on the path to success
							</div>
							<div className='text-text md:text-lg'>
								Our proven strategies put your business on the right track from
								day one. With data-driven insights and creative thinking, we
								help you achieve sustainable growth and long-term success.
							</div>
							<div className='text-blue-500 hover:text-blue-900'>
								<a className='flex items-center gap-4' href='#'>
									See how it works <ArrowRight size={14} />
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
			<CustomerReviews />

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='w-full mt-16 md:mt-26 mb-12 md:mb-22 flex flex-col gap-12 items-center px-2'
			>
				<div className='hidden md:block text-5xl leading-14 font-semibold text-primary text-center'>
					Plan for big expenses, manage profits, <br /> vendors, and much more
				</div>
				<div className='block md:hidden text-3xl leading-9 font-semibold text-primary text-center'>
					Plan for big expenses, manage profits, vendors, and much more
				</div>
				<div className='md:text-lg text-text text-center'>
					We work with organizations of all sizes, from early start-ups to
					global brands, in <br /> the private, public, and social sector.
				</div>
				<Link href='/consultation'>
					<CustomButton title='Get Started' />
				</Link>
			</motion.div>
		</div>
	)
}

export default page

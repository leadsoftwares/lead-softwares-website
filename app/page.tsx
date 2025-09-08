import AccountCard from '@/components/account-card'
import Card from '@/components/card'
import { CustomButton } from '@/components/custom-btn'
import Partners from '@/components/partners'
import MobileView from '@/public/png/mobileview.png'
import MobileViewCard from '@/public/png/mobileviewCard.png'
import Account from '@/public/svg/account.svg'
import Goal from '@/public/svg/goals.svg'
import RoadMap from '@/public/svg/roadmap.svg'
import Rocket from '@/public/svg/rocket.svg'
import Trophy from '@/public/svg/trophy.svg'
import Tv from '@/public/svg/tv.svg'
import { ArrowRight, BriefcaseBusiness } from 'lucide-react'
import Image from 'next/image'
import Strategy from '@/components/strategy'

const page = () => {
	return (
		<div>
			<div className='hero px-2 lg:px-17 flex gap-16 w-full h-120 lg:h-160 bg-bg'>
				<div className='left py-8 md:mx-auto lg:pl-16 flex flex-col gap-6 justify-center h-120 lg:h-160 text-center lg:text-start'>
					<div className='title text-4xl lg:text-6xl font-bold text-primary'>
						We Handle IT, <br /> So you can Handle {' '}
						<span className='bg-gradient-to-r from-[#857FFF] via-[#BB7BFF] to-pink-300 bg-clip-text text-transparent'>
							business.
						</span>
					</div>
					<div className='desc text-lg text-zinc-500'>
					Leveraging technology to turn your business potential <br /> into performance.
					</div>
					<div className='bts mt-5 flex mx-auto lg:mx-0'>
						<CustomButton title='Get Started' />
						<button className='hidden md:block text-blue-500 outline-1 outline-blue-500 hover:outline-purple-900 py-3 px-6 cursor-pointer  rounded-md transition mr-4'>
							Services
						</button>
					</div>
				</div>
				<div className='hidden lg:block'>
					<div className='right h-160 flex items-center justify-center'>
						<div className='relative circle bg-linear-to-br blur-3xl from-[#F2A296] via-[#E68B56] to-[#AD60A9] to-40% border border-amber-400 w-130 h-130 rounded-full flex items-center justify-center'></div>
						<div className='absolute cards flex gap-4 z-100'>
							<Card /> <AccountCard />
						</div>
					</div>
				</div>
			</div>

			{/*  */}
			<div className='main w-full min-h-196'>
				<div className='title text-5xl w-full flex justify-center mt-14  text-[#321270] font-semibold'>
					<h2 className='hidden md:block leading-14'>
						Make your business future-proof <br /> to anticipate the challenges
						to be
					</h2>

					<h2 className='block md:hidden leading-14 text-center text-4xl'>
						Make your business <br /> future-proof to <br /> anticipate the{' '}
						<br /> challenges to be
					</h2>
				</div>
				<div className='boxes flex flex-col flex-wrap md:flex-row md:flex-nowrap gap-8 mx-12 md:mx-24 mt-24 pb-20 border-b border-gray-300'>
					<div className='box1 flex flex-col gap-5 w-80 md:w-120'>
						<Image className='w-12 h-12' src={Rocket} alt='Rocket' />
						<div className='title font-semibold text-xl md:text-2xl text-[#321270]'>
							Design-led digital trasformation
						</div>
						<div className='desc text-zinc-400 font-light'>
							We combine business opportunities with customer expectations to
							design, transform and deliver useful products, and unique brand
							experiences.
						</div>
						<div className='link'>
							<a href='#' className='text-zinc-400 font-light text-xl'>
								Learn More
							</a>
						</div>
					</div>
					<div className='box2 flex flex-col gap-3 w-80 md:w-120'>
						<Image className='w-12 h-12' src={Tv} alt='tv' />
						<div className='title font-semibold text-xl md:text-2xl text-[#321270]'>
							Tansition to sustainable futures
						</div>
						<div className='desc text-zinc-400 font-light'>
							We combine business opportunities with customer expectations to
							design, transform and deliver useful products, and unique brand
							experiences.
						</div>
						<div className='link'>
							<a href='#' className='text-zinc-400 text-xl font-light'>
								Learn More
							</a>
						</div>
					</div>{' '}
					<div className='box3 flex flex-col gap-3 w-80 md:w-120'>
						<Image className='w-12 h-12' src={Trophy} alt='trophy' />
						<div className='title font-semibold text-xl md:text-2xl text-[#321270]'>
							We empower our partners
						</div>
						<div className='desc text-zinc-400 font-light'>
							We combine business opportunities with customer expectations to
							design, transform and deliver useful products, and unique brand
							experiences.
						</div>
						<div className='link'>
							<a href='#' className='text-zinc-400 font-light text-xl'>
								Learn More
							</a>
						</div>
					</div>
				</div>
				<div className='details h-185 flex flex-col lg:flex-row items-center justify-center gap-10 mt-14 md:mt-48'>
					<div className='relative img mt-30 md:mt-0'>
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
					</div>
					<div className='detail w-120 flex flex-col gap-6 ml-16'>
						<div className='hidden md:block title text-4xl font-bold text-[#321270]'>
							We’re building business for <br /> your digital economy
						</div>
						<div className='block md:hidden title text-4xl font-semibold text-[#321270]'>
							We’re building business <br /> for your digital <br /> economy
						</div>
						<div className='desc w-[90vw] md:w-full text-zinc-400'>
							We specialize in creating effective IT solutions tailored for businesses. From enhancing digital presence to optimizing operational efficiency, we empower enterprises to thrive in today's competitive landscape. Partner with us to unlock the potential of your business with innovative technology solutions.
						</div>
						<div className='infos flex gap-12 mt-4'>
							<div className='1 space-y-2'>
								<div className='numbers text-6xl text-green-400 font-bold'>
									25+
								</div>
								<div className='title font-bold text-[#321270]'>
									Business Consultants
								</div>
							</div>
							<div className='2 space-y-2'>
								<div className='numbers text-6xl text-green-400 font-bold'>
									10+
								</div>
								<div className='title font-bold text-[#321270]'>
									Startups in 2023
								</div>
							</div>
						</div>
						<div className='btn mt-8'>
							<button className='bg-blue-500 text-white py-3 px-7 cursor-pointer hover:bg-purple-900 rounded-md transition'>
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>
			{/*  */}
			<Strategy />
			{/*  */}
			<div className='goals py-18 px-10 md:px-17 w-full h-full lg:h-210 bg-[#F4F6FB]'>
				<div className='header text-center w-full space-y-4 mx-auto'>
					<div className='title text-4xl md:text-5xl leading-12 md:leading-14 font-semibold text-[#321270]'>
						Develop your next business today
					</div>
					<div className='hidden md:block subTitle text-zinc-400 text-lg'>
						We design new concepts, prototypes and processes for the next <br />{' '}
						generation of services and experiences, ready for the market.
					</div>
					<div className='block md:hidden subTitle text-zinc-400 text-lg'>
						We design new concepts, prototypes and processes for the next
						generation of services and experiences, ready for the market.
					</div>
				</div>
				<div className='main w-full mt-18 flex justify-evenly flex-col lg:flex-row  gap-16'>
					<div className='left'>
						<div className='boxes flex flex-col items-center w-full md:flex-row md:w-160 md:flex-wrap gap-6'>
							<div className='box1 hover:-translate-y-2 transition-all duration-300 pb-18 cursor-pointer shadow-md bg-white rounded-2xl flex items-center gap-6 flex-col py-12 w-70'>
								<div className='icon bg-blue-200 w-14 h-14 rounded-full flex items-center justify-center'>
									<Image src={Account} alt='Account' />
								</div>
								<div className='title text-center text-[#321270] text-2xl font-semibold'>
									Business Agility & Innovation
								</div>
							</div>

							<div className='box2 hover:-translate-y-2 transition-all duration-300 relative md:top-16 cursor-pointer shadow-md bg-white rounded-2xl flex items-center gap-6 flex-col py-12 w-70'>
								<div className='icon bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center'>
									<Image src={Goal} alt='Image' />
								</div>
								<div className='title text-center text-[#321270] text-2xl font-semibold'>
									Strategic Goal <br /> Definition
								</div>
							</div>

							<div className='box3 hover:-translate-y-2 transition-all duration-300  pb-18 cursor-pointer shadow-md bg-white rounded-2xl flex items-center gap-6 flex-col py-12 w-70'>
								<div className='icon bg-green-100 w-14 h-14 rounded-full flex items-center justify-center'>
									<Image src={RoadMap} alt='RoadMap' />
								</div>
								<div className='title text-center text-[#321270] text-2xl font-semibold'>
									Action Roadmap Definition
								</div>
							</div>
							<div className='box4 hover:-translate-y-2 transition-all duration-300  relative md:top-16 cursor-pointer shadow-md bg-white rounded-2xl flex items-center gap-6 flex-col py-12 w-70'>
								<div className='icon bg-green-200 w-14 h-14 rounded-full flex items-center'>
									<BriefcaseBusiness
										className='mx-auto'
										size={26}
										color='green'
									/>
								</div>
								<div className='title text-center text-[#321270] text-2xl font-semibold'>
									Business Model <br /> Analysis
								</div>
							</div>
						</div>
					</div>
					<div className='right my-auto'>
						<div className='flex flex-col gap-8 w-full'>
							{/* title */}
							<div className='hidden lg:block text-[#321270] text-4xl font-semibold leading-12'>
								Strategies that get you on <br /> the path to success
							</div>
							<div className='block lg:hidden text-[#321270] text-4xl font-semibold leading-12'>
								Strategies that get you on the path to success
							</div>
							{/* desc */}
							<div className='text-zinc-400 text-lg'>
								Through an in-depth knowledge of all industrial sectors and the
								application of approaches such as Lean Strategy, and Business
								Design, we prepare organisations to welcome change, to be ready
								to evolve rapidly while remaining competitive in the market.
							</div>
							{/* btn */}
							<div className='text-blue-500 hover:text-blue-900'>
								<a className='flex items-center gap-4' href='#'>
									See how it works <ArrowRight size={14} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*  */}
			<Partners />
			<div className='w-full mt-16 mb-22 flex flex-col gap-12 items-center'>
				{/* title */}
				<div className='hidden md:block text-5xl leading-14 font-semibold text-[#321270] text-center'>
					Plan for big expenses, manage profits, <br /> vendors, and much more
				</div>
				<div className='block md:hidden text-4xl leading-14 font-semibold text-[#321270] text-center'>
					Plan for big expenses, manage profits, vendors, and much more
				</div>
				{/* desc */}
				<div className='text-lg text-zinc-400 text-center'>
					We work with organizations of all sizes, from early start-ups to
					global brands, in <br /> the private, public, and social sector.
				</div>
				{/* btn */}
				<CustomButton title='Get Started' />
			</div>
		</div>
	)
}

export default page

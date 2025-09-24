'use client'
import City17 from '@/public/png/City 17 D.png'
import City17Mobile from '@/public/png/City 17 M.png'
import Crazy from '@/public/png/Crazy By Rasel D.png'
import IDN from '@/public/png/IDN Network D.png'
import IDNM from '@/public/png/IDN Network M.png'
import Mobile1 from '@/public/png/mobile-1.png'
import Mobile2 from '@/public/png/mobile-2.png'
import Mobile3 from '@/public/png/mobile-3.png'
import Mobile4 from '@/public/png/mobile-4.png'
import TigerIT from '@/public/png/portfolio1.png'
import Quotelyn from '@/public/png/portfolio2.png'
import Lawraze from '@/public/png/portfolio3.png'
import Barq from '@/public/png/portfolio4.png'
import SolaBranM from '@/public/png/SolaBran App M.png'
import SuperA from '@/public/png/Super Aurora D.png'
import Image from 'next/image'
import MobileProject from '@/components/mobile-projects'
import PortfolioImg from "@/public/png/Lead software pages Images/Portfolio.png"
import NavbarTitle from '../about-us/components/NavbarTitle'
import ProjectHistory from '@/components/project-history'
import HeroGallery from '@/components/hero-gallery'
const items = [
	{
		id: '01',
		imgSrc: TigerIT,
		title: 'Tiger IT',
		description: 'DIFFERENT STYLES',
		minidesc: 'Different Styles',
	},
	{
		id: '02',
		imgSrc: Quotelyn,
		title: 'Quotelyn',
		description: 'DIFFERENT CAPTIONS',
		minidesc: 'Different Captions',
	},
	{
		id: '03',
		imgSrc: Lawraze,
		title: 'Lawraze',
		description: 'DIFFERENT STYLES',
		minidesc: 'Different Styles',
	},
	{
		id: '04',
		imgSrc: Barq,
		title: 'Barq-e-Shop',
		description: 'DIFFERENT CAPTIONS',
		minidesc: 'Different Captions',
	},
	{
		id: '05',
		imgSrc: IDN,
		title: 'IDN Network',
		description: 'DIFFERENT CAPTIONS',
		minidesc: 'Different Captions',
	},
	{
		id: '06',
		imgSrc: City17,
		title: 'City 17',
		description: 'DIFFERENT CAPTIONS',
		minidesc: 'Different Captions',
	},
	{
		id: '07',
		imgSrc: Crazy,
		title: 'Crazy by Rasel',
		description: 'DIFFERENT CAPTIONS',
		minidesc: 'Different Captions',
	},
	{
		id: '08',
		imgSrc: SuperA,
		title: 'Super Aurora',
		description: 'DIFFERENT CAPTIONS',
		minidesc: 'Different Captions',
	},
]
const MobileProjects = [
	{ id: 1, img: Mobile1, title: 'Quotelyn' },
	{ id: 2, img: Mobile2, title: 'Lawraze' },
	{ id: 3, img: Mobile3, title: 'Tiger IT' },
	{ id: 4, img: Mobile4, title: 'Barq-e-Shop' },
	{ id: 5, img: City17Mobile, title: 'City 17' },
	{ id: 6, img: SolaBranM, title: 'Sola Bran' },
	{ id: 7, img: IDNM, title: 'IDN Network' },
]

const PortfolioStyles = () => {
	return (
		<div className='w-full overflow-hidden'>
			<NavbarTitle title='Portfolio' src={PortfolioImg}/>
			{/* hero gallery */}
			<HeroGallery/>
			{/* our history section */}
			<ProjectHistory />
			<MobileProject />
			{/*  */}
			{/* <div className='w-full py-25 overflow-hidden'>
				<div className='w-[80%] lg:w-[60%] mx-auto text-center text-4xl lg:text-5xl font-medium leading-14 text-primary'>
					Review and comment on all your digital marketing assets
				</div>
				<div className='w-full overflow-hidden mt-14'>
					<CarouselComponent
						items={MobileProjects.map((item) => ({
							id: item.id,
							imgSrc: item.img,
						}))}
						className='mx-auto max-w-full md:max-w-[95%] lg:max-w-[90%]'
						showArrows={true}
						showTitle={false}
						gapClass='gap-3 md:gap-4 lg:gap-5'
						paddingClass='px-3 md:px-5 lg:px-8'
					/>
				</div>
			</div> */}

			{/* Infinite Scroll Carousel Section */}
			<div className='w-full py-10 md:py-12 lg:py-16 bg-bg overflow-hidden'>
				<div className='w-[100%] md:w-[85%] lg:w-[80%] mx-auto'>
					<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8 lg:mb-10 text-center'>
						Our Multi-Platform Solutions
					</h2>

					{/* Web Apps Infinite Scroll */}
					<div className='mb-12 md:mb-16'>
						<h3 className='px-4 md:px-4 text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6'>
							Web Applications
						</h3>
						<div className='overflow-hidden py-4'>
							<div
								className='inline-flex items-center animate-marquee'
								style={{
									whiteSpace: 'nowrap',
								}}
							>
								{/* First set of web projects */}
								{items.slice(0, 8).map((item, index) => (
									<div
										key={`web-${index}`}
										className='mx-4 md:mx-6 flex-shrink-0'
									>
										<div className='w-[340px] md:w-[340px] lg:w-[340px]'>
											<Image
												width={340}
												height={340}
												src={item.imgSrc}
												alt={item.title || ''}
												className='object-cover w-full h-[220px] md:h-[210px] lg:h-[240px] rounded-xl'
											/>
										</div>
										{item.title && (
											<div className='font-bold text-lg md:text-xl text-primary mt-3'>
												{item.title}
											</div>
										)}
									</div>
								))}

								{/* Duplicate set for seamless looping */}
								{items.slice(0, 8).map((item, index) => (
									<div
										key={`web-dup-${index}`}
										className='mx-4 md:mx-6 flex-shrink-0'
									>
										<div className='w-[340px] md:w-[340px] lg:w-[340px]'>
											<Image
												width={340}
												height={340}
												src={item.imgSrc}
												alt={item.title || ''}
												className='object-cover w-full h-[220px] md:h-[210px] lg:h-[240px] rounded-xl'
											/>
										</div>
										{item.title && (
											<div className='font-bold text-lg md:text-xl text-primary mt-3'>
												{item.title}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Mobile Apps Infinite Scroll */}
					<div className='mb-12 md:mb-16'>
						<h3 className='px-4 md:px-4 text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6'>
							Mobile Applications
						</h3>
						<div className='overflow-hidden py-4'>
							<div
								className='inline-flex items-center animate-marquee2'
								style={{
									whiteSpace: 'nowrap',
								}}
							>
								{/* First set of mobile projects */}
								{MobileProjects.map((item, index) => (
									<div key={`mobile-${index}`} className='mx-6 flex-shrink-0'>
										<div className='w-[340px] md:w-[200px] lg:w-[300px]'>
											<Image
												width={280}
												height={400}
												src={item.img}
												alt={item.title || ''}
												className='object-cover w-full h-[480px] md:h-[340px] lg:h-[400px] rounded-xl'
											/>
										</div>
										{item.title && (
											<div className='font-bold text-lg md:text-xl text-primary mt-3'>
												{item.title}
											</div>
										)}
									</div>
								))}

								{/* Duplicate set for seamless looping */}
								{MobileProjects.map((item, index) => (
									<div
										key={`mobile-dup-${index}`}
										className='mx-6 flex-shrink-0'
									>
										<div className='w-[340px] md:w-[200px] lg:w-[300px]'>
											<Image
												width={280}
												height={400}
												src={item.img}
												alt={item.title || ''}
												className='object-cover w-full h-[480px] md:h-[340px] lg:h-[400px] rounded-xl'
											/>
										</div>
										{item.title && (
											<div className='font-bold text-lg md:text-xl text-primary mt-3'>
												{item.title}
											</div>
										)}
									</div>
								))}

								{/* Add a third set for extra smoothness in the loop */}
								{MobileProjects.map((item, index) => (
									<div
										key={`mobile-triple-${index}`}
										className='mx-6 flex-shrink-0'
									>
										<div className='w-[180px] md:w-[200px] lg:w-[240px]'>
											<Image
												width={240}
												height={400}
												src={item.img}
												alt={item.title || ''}
												className='object-cover w-full h-[320px] md:h-[340px] lg:h-[400px] rounded-xl'
											/>
										</div>
										{item.title && (
											<div className='font-bold text-lg md:text-xl text-primary mt-3'>
												{item.title}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioStyles

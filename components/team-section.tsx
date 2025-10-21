"use client"
import SectionBG from '@/public/jpeg/team-section-bg.jpg'
import AhmadIMG from '@/public/png/Lead Software Team Images Transparent/Ahmad.png'
import SectionBorder from '@/public/png/Lead Software Team Images Transparent/border-o.png'
import FazeelIMG from '@/public/png/Lead Software Team Images Transparent/Fazeel.png'
import HassanIMG from '@/public/png/Lead Software Team Images Transparent/Hassan.png'
import JunaidIMG from '@/public/png/Lead Software Team Images Transparent/Juniad.png'
import RimshaIMG from '@/public/png/Lead Software Team Images Transparent/Rimsha.png'
import RomanIMG from '@/public/png/Lead Software Team Images Transparent/Roman.png'
import ShahzadIMG from '@/public/png/Lead Software Team Images Transparent/Shehzad.png'
import ZaeemIMG from '@/public/png/Lead Software Team Images Transparent/Zaeem.png'
import Image from 'next/image'

const teamStaff = [
	{
		id: 1,
		name: 'Ahmad Yar',
		role: 'Web Team Lead',
		img: AhmadIMG,
	},
	{
		id: 2,
		name: 'Junaid Mureed',
		role: 'Backend Team Lead',
		img: JunaidIMG,
	},
	{
		id: 3,
		name: 'Ume Roman',
		role: 'UI/UX Designer',
		img: RomanIMG,
	},
	{
		id: 4,
		name: 'Rimsha Ramzan',
		role: 'Mobile Developer',
		img: RimshaIMG,
	},
	{
		id: 5,
		name: 'Hassan Sajjad',
		role: 'Web Developer',
		img: HassanIMG,
	},
	{
		id: 6,
		name: 'Muhammad Shahzad',
		role: 'Mobile Developer',
		img: ShahzadIMG,
	},
	{
		id: 7,
		name: 'Muhammad Zaeem',
		role: 'Web Developer',
		img: ZaeemIMG,
	},
	{
		id: 8,
		name: 'Fazeel Ahmad',
		role: 'QA Engineer',
		img: FazeelIMG,
	},
]

export default function TeamSection() {

	return (
		<div>
		<section
			className='w-full py-16'
			style={{
				backgroundImage: `url(${SectionBG.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div>
				<h3 className='text-center text-3xl md:text-5xl font-bold text-primary mt-10 md:mt-30 max-w-4xl mx-auto'>
					Our awesome technology Team experts
				</h3>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-center gap-8 md:gap-20 max-w-[80%] mx-auto mt-10 md:mt-30 px-4'>
				{teamStaff.map((staff) => (
					<div
						key={staff.id}
						className='group rounded-xl overflow-hidden z-10 cursor-pointer transition-all duration-500'
					>
						<div
							style={{
								backgroundImage: `url(${SectionBorder.src})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
							className='p-[26px] rounded-full relative z-10 overflow-hidden'
						>
							<div className='rounded-full bg-white z-10'>
								<div className='relative top-3 rounded-full overflow-hidden aspect-square'>
									<div className='absolute -left-8 top-30 bottom-0 w-1/3 -rotate-40 bg-blue-700 -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-40 transition-all duration-500 ease-out delay-[0ms] z-0 rounded-l-full' />

									<div className='absolute -right-8 top-30 bottom-0 w-1/3 rotate-40 bg-blue-700 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-40 transition-all duration-500 ease-out delay-[200ms] z-0 rounded-r-full' />
									<Image
										src={staff.img}
										alt={staff.name}
										fill
										className='object-cover rounded-full'
									/>
								</div>
							</div>
						</div>
						<div className='p-4 text-center space-y-1 relative z-10'>
							<h3 className='text-2xl font-bold text-primary'>{staff.name}</h3>
							<p className='text-gray-500 text-lg'>{staff.role}</p>
						</div>
					</div>
				))}
			</div>
		</section>
		</div>
	)
}

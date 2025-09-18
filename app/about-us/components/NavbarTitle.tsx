import SectionBG from '@/public/section-bg.jpg'
import CustomButton from '@/components/custom-btn'
import Image from 'next/image'
import MobileBG from '@/public/Services illustration png.png'
import Link from 'next/link'
interface TitleProps {
	title: string
}

const NavbarTitle = ({ title }: TitleProps) => {
	return (
		<div
			className='w-full max-h-[100vh] pt-26'
			style={{
				backgroundImage: `url(${SectionBG.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* About us title */}
			<div className='w-full h-full flex justify-evenly items-center lg:pb-10 gap-10 md:px-10'>
				{/* left */}
				<div className='w-170'>
					{/* mobile-view img */}
					<div className='md:hidden mx-auto flex justify-center mb-6'>
						<Image width={400} height={400} src={MobileBG} alt='' />
					</div>
					{/* title */}
					<div className='px-6'>
					<div className='text-left lg:w-full title text-primary font-bold text-5xl md:text-7xl'>
						{title}
					</div>
					{/* desc */}
					<div className=' text-text mt-6 text-xl mb-12'>
						The Engitech Token is the key to unlocking thefull potential of
						Engitech. Get eve higher earning rates and our lowest rates
					</div>
					<Link href={'/consultation'}>
					<CustomButton title='Get Started' />
					</Link>
					</div>
				</div>
				{/* right */}
				<div className='hidden md:block'>
					<Image width={700} height={700} src={MobileBG} alt='' />
				</div>
				{/* <div className='flex items-center gap-1'>
					{' '}
					<a className='text-lightBlue cursor-pointer font-light'>Home</a>{' '}
					<span>
						{' '}
						<ChevronRight color='gray' size={14} />
					</span>{' '}
					<span className='text-lightBlue cursor-pointer font-light'>
						{headlocate}{' '}
					</span>{' '}
					<span>{Icon && <Icon size={14} color='gray' />}</span>{' '}
					<span className='text-zinc-500 font-light'>{locate}</span>{' '}
				</div> */}
			</div>
		</div>
	)
}

export default NavbarTitle

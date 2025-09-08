import { ChevronRight, type LucideIcon } from 'lucide-react'

interface TitleProps {
	title: string
	headlocate?: string
	icon?: LucideIcon
	locate: string
}

const NavbarTitle = ({ title, headlocate,icon: Icon, locate }: TitleProps) => {
	return (
		<div className='w-full h-100 bg-bg'>
			{/* About us title */}
			<div className='w-full h-full flex flex-col justify-center items-center lg:pb-10 gap-10'>
				<div className='w-[90%] lg:w-full text-center title text-primary font-bold text-6xl'>{title}</div>
				<div className='flex items-center gap-1'>
					{' '}
					<a
						className='text-lightBlue cursor-pointer font-light'
					>
						Home
					</a>{' '}
					<span>
						{' '}
						<ChevronRight color='gray' size={14} />
					</span>{' '}
					<span className='text-lightBlue cursor-pointer font-light'  >{headlocate} </span>{' '}
                    <span>{Icon && <Icon size={14} color='gray'/>}</span>{' '}
					<span className='text-zinc-500 font-light'>{locate}</span>{' '}
				</div>
			</div>
		</div>
	)
}

export default NavbarTitle

import Image, { StaticImageData } from 'next/image'

interface CardProps {
	name: string
	info: string
	img: string | StaticImageData
}

const Card = ({ name, info, img }: CardProps) => {
	return (
		<div className='mx-auto w-64 lg:w-64 h-auto lg:h-80 border border-zinc-300 rounded-xl md:rounded-2xl lg:rounded-3xl xl:rounded-4xl p-5 transition-all duration-400 hover:scale-103 hover:shadow-2xl flex flex-col'>
			{/* img */}
			<div className='flex-1 flex items-center justify-center'>
				<Image
					className='mx-auto object-contain max-h-48'
					src={img}
					alt='Staff Img'
				/>
			</div>
			<div className='space-y-1 mt-4 flex-shrink-0'>
				{/* name */}
				<div className='font-bold text-primary text-center'>{name}</div>
				{/* info */}
				<div className='text-zinc-400 font-light text-sm text-center'>
					{info}
				</div>
			</div>
		</div>
	)
}

export default Card

import Image, { StaticImageData } from "next/image";

interface CardProps  {
		name: string;
        info: string;
       img: string | StaticImageData; 
	}

const Card = ({name , info, img}: CardProps) => {
	
	return (
		<div className='mx-8 lg:w-64 border border-zinc-300 rounded-4xl p-5 transition-all duration-400 hover:scale-103 hover:shadow-2xl'>
			{/* img */}
           <Image className='mx-auto' src={img} alt="Staff Img" />
			<div className='space-y-1 mt-8'>
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

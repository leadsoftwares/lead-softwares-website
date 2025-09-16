/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import Form from "@/app/consultation/components/form"


const Page = () => {
	

	return (
		<div className='w-full overflow-hidden select-none'>
			<div className='w-full h-100 bg-bg'>
				<div className='w-full h-full flex flex-col justify-center items-center lg:pb-10 gap-10'>
					<div className='w-[90%] lg:w-full text-center title text-primary font-bold text-4xl lg:text-6xl'>
						Let&apos;s discuss your project
					</div>
				</div>
			</div>

			<Form/>
		</div>
	)
}

export default Page

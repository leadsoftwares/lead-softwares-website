
'use client'

import Form from '@/app/consultation/components/form'
import NavbarTitle from '../about-us/components/NavbarTitle'
import SectionBg from "@/public/png/Lead software pages Images/Portfolio 2.png"

const Page = () => {
	return (
		<div className='w-full overflow-hidden select-none'>
			<NavbarTitle title="Let's discuss your Project" src={SectionBg} />

			<Form />
		</div>
	)
}

export default Page

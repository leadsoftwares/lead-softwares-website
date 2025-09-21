/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import Form from '@/app/consultation/components/form'
import NavbarTitle from '../about-us/components/NavbarTitle'

const Page = () => {
	return (
		<div className='w-full overflow-hidden select-none'>
			<NavbarTitle title="Let's discuss your Project" />

			<Form />
		</div>
	)
}

export default Page

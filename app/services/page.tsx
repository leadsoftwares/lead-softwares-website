import React from 'react'
import NavbarTitle from '../about-us/components/NavbarTitle'

const services = () => {
  return (
    <div className='w-full'>
<NavbarTitle title='Services' locate='Services' />
{/*  */}
<div className='py-30'>
    <div className='text-center w-full space-y-2 mx-auto'>
				<div className='subTitle text-blue-500 text-xs'>
					We work mainly with digital agencies and software companies
				</div>
				<div className='text-5xl leading-14 font-semibold text-[#321270]'>
					Outstanding software and services that solve your hassle
				</div>
			</div>
</div>
    </div>
  )
}

export default services
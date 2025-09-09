import React from 'react'
import NavbarTitle from '../about-us/components/NavbarTitle'
import File from "@/public/svg/services.svg"
import Shop from "@/public/svg/shop.svg"
import Speaker from "@/public/svg/speaker.svg"
import Image from 'next/image'
import { CustomButton } from '@/components/custom-btn'

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
				<div className='w-[55%] mx-auto text-5xl leading-14 font-semibold text-[#321270]'>
					Outstanding software and services that solve your hassle
				</div>
			</div>
            <div className='flex gap-10 justify-center px-30 mt-20'>
                {/* box1 */}
                <div className='p-8 border border-zinc-300 rounded-xl space-y-6 hover:shadow-2xl transition-all duration-500'>
                <div>
                    <Image src={File} alt="File" />
                </div>
                <div className='font-bold'>Technology Services</div>
                <p className='text-zinc-500'>Together we transform your business from the people to the processes.</p>
                <CustomButton title='Learn More' />
                </div>
                {/* box2 */}
                 <div className='p-8 border border-zinc-300 rounded-xl space-y-6 hover:shadow-2xl transition-all duration-500'>
                <div>
                    <Image src={Shop} alt="File" />
                </div>
                  <div className='font-bold'>Technology Services</div>
                <p className='text-zinc-500'>Together we transform your business from the people to the processes.</p>
                <CustomButton title='Learn More' />
                </div>
                {/* box3 */}
                 <div className='p-8 border border-zinc-300 rounded-xl space-y-6 hover:shadow-2xl transition-all duration-500'>
                <div>
                    <Image src={Speaker} alt="File" />
                </div>
              <div className='font-bold'>Technology Services</div>
                <p className='text-zinc-500'>Together we transform your business from the people to the processes.</p>
                <CustomButton title='Learn More' />
                </div>
            </div>
            <div className='w-full px-30 flex gap-20'>
                <div className='bg-green-200'>
                    <div className='font-bold'>50k</div>
                    <div>Total Users</div>
                </div>
                <div className='bg-blue-200'>
                    <div className='font-bold'>50k</div>
                    <div>Total Users</div>
                </div>
                <div className='bg-red-200'>
                    <div className='font-bold'>50k</div>
                    <div>Total Users</div>
                </div>
                <div className='bg-pink-200'>
                    <div className='font-bold'>50k</div>
                    <div>Total Users</div>
                </div>
            </div>
</div>
    </div>
  )
}

export default services
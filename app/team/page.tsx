
"use client"
import React from 'react'
import NavbarTitle from '../about-us/components/NavbarTitle'
import TeamSection from '@/components/team-section'
import TeamImg from "@/public/png/Lead software pages Images/Our Team.png"
import { useEffect } from 'react'
const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      window.scrollTo(0, 0)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 50)
    }, [])
  return (
    <div className='w-full overflow-hidden select-none'>
        <NavbarTitle title='Our Team' src={TeamImg}
         />
         <TeamSection/>
    </div>
  )
}

export default page
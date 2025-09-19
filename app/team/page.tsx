
import React from 'react'
import NavbarTitle from '../about-us/components/NavbarTitle'
import TeamSection from '@/components/team-section'
import TeamImg from "@/public/png/Lead software pages Images/Our Team.png"

const page = () => {
  return (
    <div>
        <NavbarTitle title='Our Team' src={TeamImg}
         />
         {/* team section */}
         <TeamSection/>
    </div>
  )
}

export default page
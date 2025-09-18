
import React from 'react'
import NavbarTitle from '../about-us/components/NavbarTitle'
import TeamSection from '@/components/team-section'

const page = () => {
  return (
    <div>
        <NavbarTitle title='Our Team'
         />
         {/* team section */}
         <TeamSection/>
    </div>
  )
}

export default page
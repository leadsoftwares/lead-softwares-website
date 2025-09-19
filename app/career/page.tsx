import React from 'react'
import NavbarTitle from '../about-us/components/NavbarTitle'
import Form from './components/career-form'
import CareerImg from "@/public/png/Lead software pages Images/Careers.png"
const page = () => {
  return (
    <div className='w-full overflow-hidden select-none'>
        <NavbarTitle title='Career' src={CareerImg} />
        <Form/>
    </div>
  )
}

export default page
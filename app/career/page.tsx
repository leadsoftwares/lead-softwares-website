/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect } from 'react'
import NavbarTitle from '../about-us/components/NavbarTitle'
import Form from './components/career-form'
import CareerImg from "@/public/png/Lead software pages Images/Careers.png"

 

const page = () => {

   useEffect(() => {
      window.scrollTo(0, 0)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 50)
    }, [])

  return (
    <div className='w-full overflow-hidden select-none'>
        <NavbarTitle title='Career' src={CareerImg} />
        <Form/>
    </div>
  )
}

export default page
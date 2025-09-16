import React from 'react'
import NavbarTitle from '../about-us/components/NavbarTitle'
import Form from './components/career-form'

const page = () => {
  return (
    <div className='w-full overflow-hidden select-none'>
        <NavbarTitle title='Career' locate='Career' />
        <Form/>
    </div>
  )
}

export default page
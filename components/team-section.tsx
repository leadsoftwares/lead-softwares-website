import React from 'react'
import AboutStaff1 from '@/public/webp/about-staff-1.webp'
import AboutStaff2 from '@/public/webp/about-staff-2.webp'
import AboutStaff3 from '@/public/webp/about-staff-3.webp'
import AboutStaff4 from '@/public/webp/about-staff-4.webp'
import Card from '@/app/about-us/components/Card'
const TeamSection = () => {
    const staffData = [
        { name: 'Marta Smith', info: 'Product Designer', img: AboutStaff1 },
        { name: 'Thomas Smith', info: 'Developer', img: AboutStaff2 },
        { name: 'Stella Smith', info: 'Project Manager', img: AboutStaff3 },
        { name: 'Martin Smith', info: 'Artificial Intelligence', img: AboutStaff4 },
    ]
  return (
    <div className='lg:px-20 py-15'>
				{/* title */}
				<div className='text-4xl lg:text5xl font-semibold text-primary text-center'>
					Meet our awesome and professional team
				</div>
				{/* team members */}
				<div className='flex flex-col lg:flex-row justify-center space-y-8 mt-20'>
					{staffData.map((person, index) => (
						<Card
							key={index}
							name={person.name}
							info={person.info}
							img={person.img}
						/>
					))}
				</div>
			</div>
  )
}

export default TeamSection
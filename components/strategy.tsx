'use client'
import { motion } from 'motion/react'
import StrategyImage from '../public/webp/strategyIMG.webp'
import StrategyImage2 from '../public/webp/strategyIMG2.webp'
import StrategyImage3 from '../public/webp/strategyIMG3.webp'

import Image from 'next/image'
import { useState } from 'react'

const Strategy = () => {
  const images = [StrategyImage, StrategyImage2, StrategyImage3]
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (newIndex: number) => {
    if (newIndex === activeIndex) return
    setActiveIndex(newIndex)
  }

  return (
    <div className='strategy mx-6 py-18 px-10 md:px-18 mt-60 lg:mt-0 min-h-160 bg-linear-to-br from-[#F7F9FC] from-40% to-[#EAEAF9] to-60%'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='header text-center w-full space-y-2 mx-auto'
      >
        <div className='subTitle text-blue-500 text-xs'>
          HELPING ENTREPRENEURS MAKE MORE MONEY
        </div>
        <div className='title text-4xl md:text-5xl md:leading-14 font-bold text-primary'>
          Customizing IT Solutions to Fit <br />
          Your Business Needs
        </div>
      </motion.div>

      {/* Main */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='main w-full mt-18 flex flex-col lg:flex-row gap-18 lg:justify-center'
      >
        {/* LEFT SIDE - clickable boxes */}
        <div className='left'>
          <div className='boxes space-y-8'>
            <div
              onClick={() => handleClick(0)}
              className={`space-y-6 w-full lg:w-120 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                activeIndex === 0 ? 'bg-white shadow-xl scale-105' : ''
              }`}
            >
              <div className='title text-2xl text-primary font-semibold'>
                Assessment and Planning
              </div>
              <div className='desc text-zinc-400'>
                We Conduct thorough consultations to understand and document
                client requirements comprehensively.
              </div>
            </div>

            <div
              onClick={() => handleClick(1)}
              className={`space-y-6 w-full lg:w-120 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                activeIndex === 1 ? 'bg-white shadow-xl scale-105' : ''
              }`}
            >
              <div className='title text-2xl text-primary font-semibold'>
                Implementation and Integration
              </div>
              <div className='desc text-zinc-400'>
                We Develop and rigorously test software applications, ensuring
                top-notch quality.
              </div>
            </div>

            <div
              onClick={() => handleClick(2)}
              className={`space-y-6 w-full lg:w-120 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                activeIndex === 2 ? 'bg-white shadow-xl scale-105' : ''
              }`}
            >
              <div className='title text-2xl text-primary font-semibold'>
                Monitoring and Optimization
              </div>
              <div className='desc text-zinc-400'>
                We Conduct regular audits, scale infrastructure, and uphold
                industry standards for ongoing efficiency and excellence.
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - horizontal slide image */}
        <div className='right w-full max-w-220'>
          <div className='box w-full h-100 lg:w-full lg:h-140 border-6 border-black rounded overflow-hidden relative'>
            <div
              className="flex h-full w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {images.map((img, i) => (
                <div key={i} className="w-full flex-shrink-0 relative">
                  <Image
                    src={img}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Strategy

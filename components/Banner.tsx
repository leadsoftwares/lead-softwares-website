import React from 'react'
import Image from 'next/image'
import Curveline from '@/public/gruy30-removebg-preview.png'
import LandingIMG from '@/public/png/portfolio1.png'
import LandingIMG2 from '@/public/png/portfolio2.png'
import LandingIMG3 from '@/public/png/portfolio3.png'
import LandingIMG4 from '@/public/png/portfolio4.png'
import { motion } from 'framer-motion'
import Typewriter from '@/components/typewriter'
import CustomButton from '@/components/custom-btn'

const Banner = () => {
  return (
		<div className="relative overflow-hidden">
  {/* Banner Section (blue background + text) */}
   <Image
    className="hidden lg:block absolute -left-90 opacity-3 z-10"
    width={2000}
    height={2000}
    src={Curveline}
    alt=""
  />
  
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative w-full h-[85vh] bg-[#120330] text-white gap-10 z-0"
  >
	
    <div className="lg:px-20 py-20 lg:py-40 text-white space-y-14 flex flex-col items-center lg:items-start md:items-center md:justify-center">
      <div className="px-15 lg:px-20 font-bold text-4xl lg:text-7xl text-center lg:text-left md:text-left">
        <h1>
          Empower your{" "}
          <span>
            <Typewriter words={["Technology", "Startup", "SaaS", "Software"]} />
          </span>
        </h1>
        <h1>Website with Lead Software</h1>
      </div>
      <p className="px-8 lg:px-20 lg:w-[60%] text-zinc-300 text-lg text-center md:w-[80%] lg:text-left">
        An incredible theme for modern Software and SaaS businesses. With a
        sleek and professional design, customizable layouts, and integrations
        with popular plugins.
      </p>
      <div className="px-20 btns flex gap-5 cursor-pointer z-90">
        <CustomButton title={"Get Started"} />
        <button className="hidden md:block bg-white text-blue-500 py-2 px-4 rounded-md cursor-pointer hover:bg-zinc-100 font-semibold">
          See All Demos
        </button>
      </div>
    </div>
  </motion.section>

  {/* Column 1 (scroll UP) */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="absolute top-0 -right-30 lg:right-30 overflow-hidden scale-107 -rotate-12 z-20"
  >
    <div className="flex flex-col gap-6 animate-scroll-up opacity-15 md:opacity-20 z-20">
      {[...Array(2)].map((_, dup) => (
        <div key={dup} className="flex flex-col gap-6">
          <Image className="hidden md:block rounded-lg" width={400} height={300} src={LandingIMG} alt="1" />
          <Image className="block md:hidden rounded-lg" width={200} height={100} src={LandingIMG} alt="1" />
          <Image className="hidden md:block rounded-lg" width={400} height={300} src={LandingIMG2} alt="2" />
          <Image className="block md:hidden rounded-lg" width={200} height={100} src={LandingIMG2} alt="2" />
          <Image className="hidden md:block rounded-lg" width={400} height={300} src={LandingIMG3} alt="3" />
          <Image className="block md:hidden rounded-lg" width={200} height={100} src={LandingIMG3} alt="3" />
          <Image className="hidden md:block rounded-lg" width={400} height={300} src={LandingIMG4} alt="4" />
          <Image className="block md:hidden rounded-lg" width={200} height={100} src={LandingIMG4} alt="4" />
          
        </div>
      ))}
    </div>
  </motion.div>

  {/* Column 2 (scroll DOWN) */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="hidden lg:block absolute top-0 -right-90 overflow-hidden scale-107 -rotate-12 z-20"
  >
    <div className="flex flex-col gap-6 animate-scroll-down opacity-20 z-20">
      {[...Array(2)].map((_, dup) => (
        <div key={dup} className="flex flex-col gap-6">
          <Image className="rounded-lg" width={400} height={300} src={LandingIMG} alt="1" />
          <Image className="rounded-lg" width={400} height={300} src={LandingIMG2} alt="2" />
          <Image className="rounded-lg" width={400} height={300} src={LandingIMG3} alt="3" />
          <Image className="rounded-lg" width={400} height={300} src={LandingIMG4} alt="4" />
        </div>
      ))}
    </div>
  </motion.div>
</div>

  )
}

export default Banner
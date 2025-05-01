'use client'
import { VerifiedUser, Work } from '@mui/icons-material'
import { Button, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { PiTrolleySuitcaseBold } from 'react-icons/pi'
import { motion } from "motion/react"
const BioBanner = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start invisible
      transition={{ duration: 2 }} // Animation duration (1 second)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
      viewport={{ once: false, margin: "-20% 0px" }} // Trigger every time, with 20% margin
      className=' shadow-lg rounded-md border-slate-300 px-5 grid lg:grid-cols-2 py-3  '>
      <Image
        src='/myself.jpg'
        alt='Bishawjit'
        width={350}
        height={350}
        className='rounded-full p-2 border-2 mx-auto cover  mb-4'
      />

      <div className='flex '>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <div >
            <h1 className='text-4xl text-red-700 font-bold'>Hi, I&#39m Bishawjit Dey</h1>
          </div>
          <div className='border-2 italic px-5 shadow-lg py-3 '>
            <h1 className='text-red-500 font-bold'>MERN Stack Developer</h1>
          </div>
          <div>
            <p className='text-lg font-semibold text-justify text-gray-600 mt-2'>
            I build fast, modern web applications with Next.js, backed by robust APIs using Express.js and scalable databases with MongoDB. With a passion for clean code and intuitive user experiences, I turn ideas into performant, dynamic digital solutions.
            </p>

          </div>
          <div className='mt-4 flex flex-col  md:flex md:flex-row w-full  md:justify-center gap-4'>
            <Button variant='contained' size={isSmallScreen ? 'small' : 'large'} startIcon={<PiTrolleySuitcaseBold />}>
              <span className={isSmallScreen ? 'text-md' : 'text-lg'}>
                 My Projects </span>
            </Button>
            <Button href='/' variant='contained' size={isSmallScreen ? 'small' : 'large'} startIcon={<VerifiedUser />}>
              <span className={isSmallScreen ? 'text-md' : 'text-lg'}>
                Hire Me

              </span>
            </Button>
            <Button variant='contained' href="Resume-Bishawjit Dey.pdf" download={'Resume-Bishawjit Dey.pdf'}  size={isSmallScreen ? 'small' : 'large'} startIcon={<Work></Work>}>
              <span className={isSmallScreen ? 'text-md' : 'text-lg'}>
                Download Resume
              </span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BioBanner

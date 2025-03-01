'use client'
import { VerifiedUser, Work } from '@mui/icons-material'
import { Button, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { PiTrolleySuitcaseBold } from 'react-icons/pi'

const BioBanner = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <section className=' px-5 grid lg:grid-cols-2 py-3  '>
        <Image
          src='/myself.jpg'
          alt='Bishawjit'
          width={250}
          height={200}
          className='rounded-md mx-auto cover  mb-4'
        />
      
      <div className='flex '>
        <div className='flex flex-col justify-center items-center'>

        <h1 className='text-4xl font-bold'>Hi, Im Bishawjit Dey 👋</h1>
        <p className='text-lg text-gray-600 mt-2'>
          A Web Developer specializing in React, Next.js, and modern web
          technologies.
        </p>
        <div className='mt-4  flex w-full  md:justify-center gap-4'>
          <Button variant='outlined' size={isSmallScreen?'small':'large'} startIcon={<PiTrolleySuitcaseBold />}>
            <span className={isSmallScreen ? 'text-xs':'text-lg'}>
              View My Works              </span>
          </Button>
          <Button href='/' variant='outlined' size={isSmallScreen?'small':'large'} startIcon={<VerifiedUser />}>
            <span className={isSmallScreen ? 'text-xs':'text-lg'}>
            Hire Me

            </span>
          </Button>
          <Button href="Resume-Bishawjit Dey.pdf" download={'Resume-Bishawjit Dey.pdf'} variant='outlined' size={isSmallScreen?'small':'large'} startIcon={<Work></Work>}>
          <span className={isSmallScreen ? 'text-xs':'text-md'}>
            Download Resume

          </span>
          </Button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default BioBanner

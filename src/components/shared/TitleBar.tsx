'use client'
import { motion } from 'motion/react'
const TitleBar = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: '100%' }}
    >
      <h2 className='text-2xl  shadow-lg border-t-2 border-b-orange-600 border-t-orange-600 rounded-lg font-semibold mb-4 border-b-2 py-4'>
        {title}
      </h2>
    </motion.div>
  )
}

export default TitleBar

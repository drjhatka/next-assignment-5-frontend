"use client"
import { motion } from 'motion/react'

type SkillCardProperties ={
    xValue:number;
    yValue:number;
    zIndex:number;
    rotate:number;
    duration:number;
    delay:number;
    initialRotate:number;
}

const SkillCard = ({ title, properties }: { title: string, properties:SkillCardProperties }) => {
    const {xValue, yValue, duration, delay} = properties;
    return (
            < motion.div   animate={{x: xValue, y:yValue, zIndex:1}} transition={{duration:duration, delay:delay}} className='shadow-2xl  lg:w-[250px] border-2  h-[150px] flex items-center justify-center'>
                <motion.h1   initial={{rotate:90 }} animate={{rotate:360}} className=' font-blod text-2xl text-red-700 font-bold px-5 py-4 '   >{title}</motion.h1>
            </motion.div>
        
    );
};

export default SkillCard;
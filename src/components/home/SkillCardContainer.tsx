 'use client'

//import { Badge, Container } from "@mui/material";
import {motion} from 'motion/react'
import SkillCard from "../shared/modules/SkillCard";

const SkillCardContainer = () => {
    return (
        
            <section className='mt-12 w-full '>
          <h2 className='text-2xl py-5 rounded-md text-white font-semibold mb-4 bg-[#a69eeb]'>
            Technology Skills
          </h2>
          <motion.div animate={{}} className="flex flex-col md:flex md:flex-row gap-2 md:justify-center py-2 px-4">
            <SkillCard properties={{xValue:10, yValue:0, zIndex:0,initialRotate:90, rotate:0, duration:3000, delay:1000}} title={"React"} ></SkillCard>
            <SkillCard properties={{xValue:100, yValue:0, zIndex:0,initialRotate:90, rotate:0, duration:3000, delay:2000}} title={"NextJs"}></SkillCard>
            <SkillCard properties={{xValue:100, yValue:0, zIndex:0,initialRotate:90, rotate:0, duration:3000, delay:2000}} title={"Express Js"}></SkillCard>
            <SkillCard properties={{xValue:100, yValue:0, zIndex:0,initialRotate:90, rotate:0, duration:3000, delay:2000}} title={"MongoDB"}></SkillCard>
            <SkillCard properties={{xValue:100, yValue:0, zIndex:0,initialRotate:90, rotate:0, duration:3000, delay:2000}} title={"Redux"}></SkillCard>
            {/* <SkillCard xValue={50}title={"MongoDB"}></SkillCard>
            <SkillCard xValue={0} title={"Express"}></SkillCard> */}
            {/* <Badge  color={"info"} badgeContent="TypeScript" ></Badge>
            <Badge  color={"success"} badgeContent="Mongoose" ></Badge>
            <Badge  color={"secondary"} badgeContent="Next JS" ></Badge>
            <Badge  color={"success"} badgeContent="Prisma" ></Badge> */}
            {/* <span className='badge badge-outline'>Next.js</span>
            <span className='badge badge-outline'>TypeScript</span>
            <span className='badge badge-outline'>TailwindCSS</span>
            <span className='badge badge-outline'>MongoDB</span>
            <span className='badge badge-outline'>Node.js</span> */}
          </motion.div>
        </section>
        
    );
};

export default SkillCardContainer;
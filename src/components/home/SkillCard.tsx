import { Badge, Container } from "@mui/material";

const SkillCard = () => {
    return (
        
            <section className='mt-12 w-full '>
          <h2 className='text-2xl py-5 rounded-md text-white font-semibold mb-4 bg-[#a69eeb]'>
            Tech Stack
          </h2>
          <Container className="grid grid-cols-5 gap-4">
            <Badge  color={"error"} badgeContent="REACT" ></Badge>
            <Badge  color={"info"} badgeContent="TypeScript" ></Badge>
            <Badge  color={"success"} badgeContent="Mongoose" ></Badge>
            <Badge  color={"secondary"} badgeContent="Next JS" ></Badge>
            <Badge  color={"success"} badgeContent="Prisma" ></Badge>
            {/* <span className='badge badge-outline'>Next.js</span>
            <span className='badge badge-outline'>TypeScript</span>
            <span className='badge badge-outline'>TailwindCSS</span>
            <span className='badge badge-outline'>MongoDB</span>
            <span className='badge badge-outline'>Node.js</span> */}
          </Container>
        </section>
        
    );
};

export default SkillCard;
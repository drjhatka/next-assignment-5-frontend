"use client"
import InputGroup from "@/components/shared/Form/InputGroup";
import TextInputField from "@/components/shared/Form/TextInputField";
import MultipleSelectChip from "@/components/shared/Form/MultiSelect";


const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10 ">Welcome To Dashboard Page</h1>
       <div className=' shadow-xl py-3'>
           <InputGroup elements ={
               [
               <TextInputField key={'project-name'} config={{label:'Project Name', defaultValue:'React Finance Project', colSpan:'2'}}/>,
               <TextInputField key={'project-description'} config={{label:'Project Description', defaultValue:'Project Description Here'}}/>,
                ]
           }/>
           <InputGroup elements={[
                   <MultipleSelectChip key={'multi'} />

           ]}/>

       </div>
    </div>
  );
};

export default DashboardPage;

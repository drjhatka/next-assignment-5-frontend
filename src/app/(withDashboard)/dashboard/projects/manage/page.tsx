"use server"
import React from 'react';
import {getAllProjects} from "@/app/actions/ProjectActions";
import ProjectCardAdmin from "@/components/shared/ProjectCardAdmin";
import Project from "@/types/types";

const ManageProjectPage = async() => {
    const projects = await  getAllProjects();
    console.log("Pro",projects);
    return (
        <div className={'grid lg:grid-cols-2 gap-4'}>
            {
                projects?.data.map((project:Project) => {
                   return <ProjectCardAdmin key={project.title} project={project}></ProjectCardAdmin>
                })
            }
        </div>
    );
};

export default ManageProjectPage;
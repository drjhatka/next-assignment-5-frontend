"use client"
import React, {useEffect, useState} from 'react';
import ProjectUpdateForm from "@/components/shared/ProjectUpdateForm";
import PageHeader from "@/components/shared/PageHeader";
import {useParams} from "next/navigation";
import {getAProject} from "@/app/actions/ProjectActions";
import Project from "@/types/types";

const ProjectUpdatePage = () => {
    const {projectId} = useParams();
    const [project, setProject] = useState<Project|undefined>(undefined);
    const [loading, setLoading] = useState(false);

    //fetch project related to this projectId
    useEffect(() => {
        if (!projectId) return; // Ensure projectId exists before fetching
        const fetchProject = async ():Promise<void> => {
            try {
               const  data = await getAProject(projectId as string); // Call server action
                return data
            } catch (error) {
                console.error("Failed to fetch project:", error);
            } finally {
                setLoading(false);
            }
        };
         fetchProject().then((data) => {
             // @ts-expect-error data does exist and it does
             setProject(data.data)
         });
    }, [projectId]);

    return (
    <div>
        {
            !loading &&
            <><PageHeader title={'Edit Project'} ></PageHeader>
            <ProjectUpdateForm  project={project as Project} />
            </>
            }
        </div>
    );
};

export default ProjectUpdatePage;
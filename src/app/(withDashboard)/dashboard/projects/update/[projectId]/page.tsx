import React from 'react';
import ProjectUpdateForm from "@/components/shared/ProjectUpdateForm";
import PageHeader from "@/components/shared/PageHeader";

const ProjectUpdatePage = () => {
    return (
        <div>
            <PageHeader title={'Edit Project'} ></PageHeader>
            <ProjectUpdateForm/>
        </div>
    );
};

export default ProjectUpdatePage;
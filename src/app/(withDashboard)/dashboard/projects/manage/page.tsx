import React from 'react';
import MUIButton from "@/components/shared/ShinyMenu";

const ManageProjectPage = () => {
    return (
        <div>
            <MUIButton href={'/dashboard/projects/manage'  }  >Manage Projects</MUIButton>
        </div>
    );
};

export default ManageProjectPage;
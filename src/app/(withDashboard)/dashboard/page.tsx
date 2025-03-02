"use client"

import MUIButton from "@/components/shared/ShinyMenu";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10 ">Welcome To Dashboard Page</h1>
        <div className={'grid  lg:grid-col-1  md:grid-cols-2 md:gap-4 mt-5'}>
            <MUIButton href={'/dashboard/projects/manage'  }  >Manage Projects</MUIButton>
            <MUIButton href={'/dashboard/blogs/manage'  }  >Manage Blogs</MUIButton>
            <MUIButton href={'/dashboard/messages/manage'  }  >Manage Messages</MUIButton>
            <MUIButton href={'/dashboard/users/manage'  }  >Manage User</MUIButton>
        </div>
    </div>
  );
};

export default DashboardPage;

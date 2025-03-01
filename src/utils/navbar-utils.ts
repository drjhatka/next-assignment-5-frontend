const userNavMenus = [
    {
        text:'Home', route:'/', key:'public-home'
    },
    {
        text:'Projects', route:'/projects', key:'public-projects'
    },
    {
        text:'Blogs', route:'/blogs', key:'public-blogs'
    },
    {
        text:'Contact', route:'/contact',key:'public-contact'
    }

];

 const adminNavMenus = [
    {
        text:'Dashboard', route:'/admin/dashboard', key:'admin-dashboard'
    },
    {
        text:'Manage Products', route:'/admin/manage-projects', key:'admin-manage-projects'
    },
    {
        text:'Manage Blogs', route:'/admin/manage-blogs',  key:'admin-manage-blogs'
    },
    {
        text:'Manage Messages', route:'/admin-manage-messages', key:'admin-manage-messages'
    }
];

export const NavUtils ={ 
    userNavMenus,
    adminNavMenus
}
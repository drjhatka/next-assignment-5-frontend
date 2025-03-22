export default interface Project extends Document{
    _id?: string;
    name:string;
    description:string;
    technologies: string[];
    repositoryUrl: string;
    liveUrl?: string;
    imageUrl?: string;
    category: string[]; // e.g., "Web App", "Mobile App", "Open Source"
    features?: string[]; // List of key features
    contributors?: string[]; // List of contributors' names or user IDs
    status: "In Progress" | "Completed" | "Maintenance"; // Project status
    tags?: string[]; // Additional tags for filtering/searching
    createdAt: Date;
    updatedAt: Date;
}

export interface Comments{
    blogId: string;
    userId: string;
    name: string;
    body: string;
}

export interface Blog{
    title:string;
    body:string;
    author:TUser;
    comments?:Comments[];
    category?:string;
    externalLink?:string;
    rating?:string;
    imageUrl:string;
    tags?:string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface TUser extends Document{
    name:string;
    email:string;
    password:string;
    role?:'admin'
    phone?:string;
    address?:string;
    city?:string;
    status?:'active'|'blocked';
    isDeleted?:boolean;
}

export type FormValues = {
    email: string;
    password: string;
};
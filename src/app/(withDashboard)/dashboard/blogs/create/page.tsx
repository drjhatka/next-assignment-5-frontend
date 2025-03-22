"use client"
import PageHeader from "@/components/shared/PageHeader";
import CreateBlogForm from "@/components/blogs/CreateBlogForm";
import {useAppSelector} from "@/lib/hooks";
import {getUser} from "@/app/actions/UserActions";
import {createBlog} from "@/app/actions/BlogActions";
import {toast, ToastContainer} from "react-toastify";
import { AuthUserState } from "@/lib/features/auth/authSlice";

const Page = () => {
    const reduxUser:AuthUserState|null = useAppSelector(state => state.auth)as AuthUserState|null;
    //console.log('Redxu ,',reduxUser);

    const onSubmit = async(formData:FormData) => {
        const currentUser = await getUser(reduxUser?.email as string);
        //@ts-ignore
        const blog:any = {...formData, user:currentUser.data._id};
        const createdBlog = await  createBlog(blog)
        if(createdBlog.success){
            toast.success("Blog Successfully created");
            return;
        }
        toast.error("Error creating blog post");
    }
    return (
        <div>
            <ToastContainer autoClose={1500}></ToastContainer>
            <PageHeader title={'Create Blog'}></PageHeader>
            <CreateBlogForm eventHandler={onSubmit} ></CreateBlogForm>
        </div>
    );
};

export default Page;
"use client"
import PageHeader from "@/components/shared/PageHeader";
import CreateBlogForm from "@/components/blogs/CreateBlogForm";
import {useAppSelector} from "@/lib/hooks";
import {getUser} from "@/app/actions/UserActions";
import {createBlog} from "@/app/actions/BlogActions";
import {toast, ToastContainer} from "react-toastify";

const Page = () => {
    const reduxUser = useAppSelector(state => state.auth);
    //console.log('Redxu ,',reduxUser);

    const onSubmit = async(formData:FormData) => {
        const currentUser = await getUser(reduxUser.email);
        const blog = {...formData, user:currentUser.data._id};
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
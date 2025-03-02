
import {getAllBlogs} from "@/app/actions/BlogActions";
import PageHeader from "@/components/shared/PageHeader";
import BlogCardAdmin from "@/components/shared/BlogCardAdmin";

const ManageBlogPage = async () => {
    const blogs = await getAllBlogs();
    console.log(blogs);
    return (
        <>
            <PageHeader title={'Manage Blogs'}></PageHeader>
            <div className={'grid md:grid-cols-2 lg:grid-cols-3 gap-5'}>
                {
                    //@ts-expect-error mongoose _id cant be defined
                    blogs?.data?.map((blog) => (<BlogCardAdmin key={blog._id} blog={blog} />))
            }
        </div>
        </>
    );
};

export default ManageBlogPage;
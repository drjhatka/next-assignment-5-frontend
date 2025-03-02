
import {getAllBlogs} from "@/app/actions/BlogActions";
import BlogCardUI from "@/components/shared/BlogCard";

const Page = async() => {
    const blogs = await getAllBlogs();
    return (
        <div className={'grid md:grid-cols-2 lg:grid-cols-3 gap-5'}>
            {
                blogs?.data?.map((blog) => (<BlogCardUI key={blog.id} blog={blog} />))
            }
        </div>
    );
};

export default Page;
import BlogCardUI from "@/components/shared/BlogCard";
import {getAllBlogs} from "@/app/actions/BlogActions";
import PageHeader from "@/components/shared/PageHeader";
import * as React from "react";

const AllBlogsPage = async () => {
    const blogs = await getAllBlogs();
    return (
        <div>
            <PageHeader title={'All Blogs'}></PageHeader>
            <div className={'grid md:grid-cols-2 lg:grid-cols-3 gap-5'}>
                {
                    // @ts-expect-error because Mongoose _id cannot be defined in frontend
                    blogs?.data?.map((blog ) => (<BlogCardUI key={blog._id} blog={blog} />))
                }
            </div>
        </div>
    );
};

export default AllBlogsPage;

"use client"
import {useForm} from "react-hook-form";

const CreateBlogForm = ({eventHandler}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className={'mx-10'}>
            <form onSubmit={handleSubmit(eventHandler)} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-center text-gray-700 font-medium mb-1">Blog Title</label>
                    <input
                        type="text"
                        {...register("title", { required: "Title is required" })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                {/* Body */}
                <div>
                    <label className="block text-center text-gray-700 font-medium mb-1">Body</label>
                    <textarea
                        rows={4}
                        {...register("body", { required: "Body is required", minLength: { value: 20, message: "Body must be at least 20 characters" } })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    {errors.body && <p className="text-red-500 text-sm">{errors.body.message}</p>}
                </div>

                {/* User ID */}
                {/*<div>
                    <label className="block text-gray-700 font-medium mb-1">User ID</label>
                    <input
                        type="text"
                        {...register("user", { required: "User ID is required" })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.user && <p className="text-red-500 text-sm">{errors.user.message}</p>}
                </div>*/}

                {/* Image URL */}
                <div>
                    <label className="block text-centertext-gray-700 font-medium mb-1">Image URL</label>
                    <input
                        type="text"
                        {...register("imageUrl", { required: "Image URL is required" })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-200"
                >
                    Submit Blog
                </button>
            </form>
        </div>
    );
};

export default CreateBlogForm;
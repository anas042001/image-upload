const blogModel = require("../model/blog.model")

exports.getAllBlogs = async () => {
    return await blogModel.find();
}

exports.createBlog = async (blog) => {
    return await blogModel.create(blog);
}

exports.getBlogById = async (id) => {
    return await blogModel.findById(id);
}

exports.updateBlog = async (id,blog) => {
    return await blogModel.findByIdAndUpdate(id,blog);
}

exports.deleteBlog = async (id) => {
    return await blogModel.findByIdAndDelete(id);
}


const blogService = require("../services/blogService");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json({ data: blogs, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.json({ data: blog, status: "successs" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {  
    const blog = await blogService.deleteBlog(req.params.id);
    return res.send("Blog Deleted Successfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

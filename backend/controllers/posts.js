const Post = require('../models/Post');

//Get all posts
exports.getAllPosts=async(req,res) => {
    try{
        const posts = await Post.find().sort({createdAt: -1});
        res.json(posts);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

//Get a single post
exports.getPost=async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post) return res.status(404).json({error: 'Post not found'});
        res.json(post);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

//Create a new post
exports.createPost=async(req,res) => {
    try{
        const {title, content} = req.body;
        const newPost = new Post({title, content});
        await newPost.save();
        res.status(201).json(newPost);
    }catch(err){
        res.status(400).json({error: err.message});
    }
};

//Update a post
exports.updatePost=async(req,res) => {
    try{
        const {title, content} = req.body;
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, 
            {title, content},
             {new: true});
        if(!updatedPost) return res.status(404).json({error: 'Post not found'});
        res.json(updatedPost);
    }catch(err){
        res.status(400).json({error: err.message});
    }
};

//Delete a post
exports.deletePost=async(req,res) => {
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if(!deletedPost) return res.status(404).json({error: 'Post not found'});
        res.json({message: 'Post deleted successfully'});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};
const Post = require('../models/Post');

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .populate('author', 'username');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get single post
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'username');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create post
exports.createPost = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const newPost = new Post({
            title,
            content,
            tags,
            author: req.user.id
        });
        const post = await newPost.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update post
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check if user owns the post
        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({ message: 'User not authorized' });
        }

        const { title, content, tags } = req.body;
        post.title = title || post.title;
        post.content = content || post.content;
        post.tags = tags || post.tags;
        post.updatedAt = Date.now();

        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check if user owns the post
        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({ message: 'User not authorized' });
        }

        await post.remove();
        res.json({ message: 'Post removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

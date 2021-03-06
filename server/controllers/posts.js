import  mongoose  from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts  =  async (req, res) => {
    try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({message : error.message})
    }

}

export const createPost  = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try{
       await newPost.save()

       res.status(201).json(newPost);

    }catch(error){
        res.status(409).json({message : error.message})

    }

}

export const updatePost = async (req, res) => {
    const { id : _id} = req.params;
    const post = req.body; // receive the data for the update from the font-end

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new : true}); // if id is valid we update the post

    res.json(updatedPost);

}


export const getPost = async (req, res) => { 
    const { id } = req.params; // getting id

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params; // getting id

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id); 

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id); // we are finding the post

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true }); // we are updating the post found by incrementing the like count
    
    res.json(updatedPost);
}




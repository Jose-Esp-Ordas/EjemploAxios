import React, { useState, useEffect } from 'react'
import { getPosts } from '../services/post'
import Post from './Post.jsx'

const ListPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        const data = await getPosts();
        setPosts(data);
    };
        fetchPosts();
    }, [])
    
  return (

        <>
            {posts.map(post => (
                <Post key={post.id} post={post} params={post.id%2 ? "mr-80 text-blue-800"  :  "bg-green-500 flex flex-row ml-80 mr-auto" } />
            ))}
        </>
  )
}

export default ListPosts
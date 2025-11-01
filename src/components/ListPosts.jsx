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
                <Post key={post.id} post={post} params={post.id%2 ? "mr-[40vw] text-blue-900 hover:shadow-lg hover:my-8"  :  "bg-green-500 ml-[40vw] hover:shadow-lg hover:my-8" } />
            ))}
        </>
  )
}

export default ListPosts
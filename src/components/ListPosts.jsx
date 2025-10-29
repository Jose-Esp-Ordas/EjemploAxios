import React, { useState, useEffect } from 'react'
import { getPosts } from '../services/post'

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
        <ul>
            {posts.map(post => (
                <li key={post.id} className="mb-4 p-4 border border-gray-300 rounded">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-700">{post.body}</p>
                </li>
            ))}
        </ul>
    </>
  )
}

export default ListPosts
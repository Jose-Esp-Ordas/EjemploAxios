import React from 'react'

const Post = ({ post, params }) => {
  return (
    <div className={`m-4 p-4 border border-blue-500 rounded ${params} shadow shadow-blue-300`}>
        <div className={`max-w-[65vw] `}>
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
        </div>
    </div>
  )
}

export default Post
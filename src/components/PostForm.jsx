import { useState } from 'react'
import { createPost } from '../services/post'
import CreateModal from './modals/CreateModal'

const PostForm = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [visibi, setVisibi] = useState(false)
    const [modal, setModal] = useState(false)
    const [Post, setPost] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, body };
        if(await createPost(newPost)){
          setPost(x)
          setModal(true)
          setTitle("");
          setBody("");
        } 
    };

  return (
    <>
      <CreateModal open={modal} onClose={() => {setModal(false), setPost({}), setVisibi(false)}}>
        <span>Id del Post: {Post ? Post.id : "Cargando..."}</span>
        <h4 className=' max-w-4/5'>Título: {Post ? Post.title : "Cargando..."}</h4>
        <p className=' max-w-4/5 text-clip'>Contenido: {Post ? Post.body : "Cargando..."}</p>
      </CreateModal>
      <div className='m-4 p-4 border border-gray-300 rounded shadow shadow-gray-300'>
        <div className='flex'>
          <h3 className='text-lg font-semibold'>{visibi && "Nuevo Post"}</h3>
          <button onClick={() => setVisibi(!visibi)} className='ml-auto mb-4 bg-gray-500 hover:bg-gray-700 cursor-pointer text-white rounded py-2 px-4'>
            {visibi ? "Ocultar" : "Agregar nuevo Post"}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={`mb-4 ${!visibi && "hidden"}`}>
            <label htmlFor="title">Título del post</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              />
          </div>
          <div className={`mb-4 ${!visibi && "hidden"}`}>
            <label htmlFor="body">Contenido del post</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              rows="4"
              />
          </div>
          <button type="submit" className={(!visibi && "hidden") + " mb-4 bg-green-500 text-white rounded py-2 px-4 cursor-pointer hover:bg-green-700"}>Create Post</button>
        </form>
      </div>
    </>
  )
}

export default PostForm
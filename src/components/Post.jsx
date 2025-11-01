import { use, useState } from 'react'
import {editPost, deletePost} from '../services/post'
import CreateModal from './modals/CreateModal'

const Post = ({ post, params }) => {
  const [modalEdit, setModalEdit] = useState(false)
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)
  const [error, setError] = useState("")
  const [show, setShow] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)

  const handleEditPost = async () => {
    const updatedPost = { id: post.id, title, body };
    if(await editPost(updatedPost)){
      setError("")
      setModalEdit(false)
    }else{
      setError("Error actualizando post")
    }
  }

  const handleDeletePost = async () => {
    if(await deletePost(post.id)){
      setError("")
      setModalDelete(false)
    }else{
      setError("Error eliminando post")
    }
  }

  return (
    <>
      <CreateModal open={modalEdit} onClose={() => {setModalEdit(false), setError("")}}>
        <div className=' flex flex-col gap-4 min-w-[60vw]'>
          <h3 className=' text-2xl font-bold'>Editando Post</h3>
          <p>Id del Post: {post.id}</p>
          <span>Título:</span>
          <textarea value={title} onChange={(e) => setTitle(e.target.value)} className='border border-gray-300 rounded px-2 w-full'/>
          <span>Contenido:</span>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={5} className='border border-gray-300 rounded px-2 w-full' />
          <button onClick={handleEditPost} className='mt-4 bg-amber-500 text-white rounded py-2 px-4 cursor-pointer hover:bg-amber-700 mx-auto'>Guardar Cambios</button>
          {error && <p className=' text-red-500'>{error}</p>}
        </div>
      </CreateModal>
      <CreateModal open={modalDelete} onClose={() => {setModalDelete(false), setError("")}}>
        <div className=' flex flex-col gap-4 min-w-[60vw]'>
          <h3 className=' text-2xl font-bold'>Eliminando Post</h3>
          <p>Título: {post.title}</p>
          <p>¿Estás seguro que deseas eliminar el post con Id: {post.id}?</p>
          <div className=' flex flex-row gap-4 justify-center'>
            <button onClick={handleDeletePost} className=' mt-4 bg-red-500 text-white rounded py-2 px-4 cursor-pointer hover:bg-red-700'>Eliminar</button>
          </div>
          {error && <p className=' text-red-500'>{error}</p>}
        </div>
      </CreateModal>
      <div onClick={() => setShow(!show)}
      className={`m-4 p-4 *:max-w-[65vw] border border-blue-500 rounded ${params} shadow shadow-blue-300 cursor-pointer`}>
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
        <div className=' w-full flex flex-row justify-center gap-8 mt-1'>
          {show && 
            <>
              <button onClick={() => setModalEdit(true)} className=' shadow-gray-300 shadow cursor-pointer border-gray-700 hover:animate-pulse hover:px-5 hover:border-gray-600 p-2 rounded-2xl'>Modificar</button>
              <button onClick={() => setModalDelete(true)} className=' shadow-gray-300 shadow cursor-pointer border-gray-700 hover:animate-pulse hover:px-5 hover:border-gray-600 p-2 rounded-2xl'>Eliminar</button>
            </>
          }
        </div>
    </div>
    </>
  )
}

export default Post
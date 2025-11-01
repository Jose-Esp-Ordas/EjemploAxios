import ListPosts from './components/ListPosts.jsx'
import PostForm from './components/PostForm.jsx'

function App() {
  return (
    <>
      <div>
       
        <h1 className=' text-amber-300 ml-4'> Axios la librería para fetch</h1> 
        <PostForm />
        <ListPosts />
      </div>
    </>
  )
}

export default App

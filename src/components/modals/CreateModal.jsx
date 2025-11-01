const CreateModal = ({open, onClose, children}) => {
  if (!open) return null;
  return (
    <>
      <div className='h-full w-full fixed top-0 left-0 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-gray-800 p-4 rounded shadow-md'>
          {children}
          <div className='flex justify-end'>
            <button className='mt-4 bg-blue-500 text-white rounded py-2 px-4 cursor-pointer hover:bg-blue-700' 
            onClick={() => onClose()}>Cerrar</button>
          </div>
        </div>  
      </div>
    </>
  )
}

export default CreateModal
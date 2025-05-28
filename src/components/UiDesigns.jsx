import React, { useEffect } from 'react'
import { getUiProject } from '../features/projects/projectSlice';
import { useDispatch, useSelector } from 'react-redux';

const UiDesigns = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, message, uiProjects } = useSelector(state => state.project)

  const gradientButton = {
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(15, 24, 41),rgb(35, 64, 97))", // Gradient
  }
  const gradientStyle = {
    background: "#141E30", // Fallback color
    backgroundImage: "linear-gradient(to right,rgb(35, 64, 97),rgb(15, 24, 41))", // Gradient
    color: "white"
  }

  useEffect(() => {
    dispatch(getUiProject());
  }, [])

  if (isLoading)
    return (
      <div className=' flex items-center my-10 justify-center z-0'>
        <h1 className="text-xl font-bold text-white">UI design Laoding...</h1>

        <div role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )


  return (
    <>
      <div id='UI' className='p-10 border-y border-gray-700'>
        <h2 className="font-bold text-5xl text-center my-5  text-white p-4 ">UI Designs Clones</h2>
        <div className="flex flex-row flex-wrap    ">

          {
            uiProjects.map((data, index) => (
              <div key={index} style={gradientButton} className="max-w-sm mx-auto m-3 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img className="w-full h-48 object-cover" src={data.img} alt={data.title} />
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-300 mb-2">{data.title}</h2>
                  <p className="text-sm text-gray-200 mb-2">Category: <span className="font-medium text-indigo-400">{data.category}</span></p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {data.techStack.map((t, idx) => (
                      <span key={idx} className="bg-indigo-100 text-indigo-700 uppercase text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-100 mb-4">{data.description}</p>

                  <a href={data.url} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-[#A18877] text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-[#776559] transition-colors">
                    Visit Project
                  </a>
                </div>
              </div>
            ))

          }
        </div>
      </div>

      
    </>
  )
}

export default UiDesigns

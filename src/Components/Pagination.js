import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

const Pagination = () => {

	const {page, totalPage, pageChangeHandler} = useContext(AppContext) ;

  return (
	<div className='flex justify-evenly items-center w-full bg-white fixed bottom-0 border-2 border-t-gray-400 shadow-2xl '>

		<div className=' '>
			{
				page > 1 &&
				<button 
				onClick={ () => pageChangeHandler(page-1)}
				className='m-2 p-1 px-4 rounded-md border border-black '>Previous</button>
			}

			{
				page < totalPage &&
				<button 
				onClick={ () => pageChangeHandler(page+1)}
				className='m-2 p-1 px-4 rounded-md border border-black'>Next</button>
			}
		
		</div>

		<div className='font-bold text-sm'>Page {page} of {totalPage} </div>
	  
	</div>
  )
}

export default Pagination ;

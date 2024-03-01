import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {

    // Step 3 : Consumer of context
	const {loading, posts, imageUrl} = useContext(AppContext) ;
	

  return (
	<div className='w-11/12 max-w-[650px] py-4 flex flex-col gap-y-10 my-[6rem]'>

	{
        loading ? 

		(<Spinner />) : 

		(
			posts.length === 0 ?
			(
				<div className='text-center mt-10 ml-20'>
					<p>No Blog Found</p>
				</div>
			) : 

			( posts.map( (post) => (
				<div className='w-[650]'
				key={post.id}>

					<p className='font-bold text-xl '> {post.title} </p>

					<img src={imageUrl} alt='post-img'
					className='w-100 h-30 rounded-md m-2'  />

					<p className='mt-2'>By <span className='italic '>{post.author}</span> on <span className='font-semibold underline cursor-pointer '>{post.category}</span> </p>

                    <p className='mb-2'>Posted On {post.date} </p>

					<p> {post.content} </p>

					<div className='text-blue-600 underline text-xs flex gap-x-2 font-semibold mt-2 '>
						{ post.tags.map( (tag, index) => {
                            return <span key={index} className='cursor-pointer'> {`#${tag}`} </span>
						} ) }
					</div>

				</div>
			)   ) )
		)
	}
	  
	</div>
  )
}

export default Blogs ;

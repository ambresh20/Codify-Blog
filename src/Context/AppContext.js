import { createContext, useState} from "react";
import { baseUrl } from "../baseUrl";
import { API_KEY } from '../baseUrl';  // image api


export const AppContext = createContext() ;   // step : 1 --> creation

export function AppContextProvider({children}) {
	
	const [loading, setLoading] = useState(false) ;
	const [page, setPage] = useState(1) ;
	const [totalPage, setTotalPage] = useState(null) ;
	const [posts, setPosts] = useState([])

	// data filling
	async function fetchBlogsPost(page = 1){
		setLoading(true) ;
		const url = `${baseUrl}?page=${page}` ;

		try {
			const result = await fetch(url) ;
		    const data = await result.json() ;

			console.log(data) ;
			setPage(data.page) ;
			setTotalPage(data.totalPages) ;
			setPosts(data.posts) ;
			
		} catch (error) {
			console.log("Error in fetch data") ;
			setPage(1) ;
			setPosts([]) ;
			setTotalPage(null) ;
		}

		setLoading(false) ;
	}

	function pageChangeHandler(page){
		setPage(page) ;
		fetchBlogsPost(page) ;
	}


	const [imageUrl, setImageUrl] = useState('') ;

	async function fetchImageUrl(){
	const url = `https://api.unsplash.com/search/photos?page=1&query=coding&client_id=${API_KEY}` ;

		try {
			const response = await fetch(url) ;
		    const data = await response.json() ;
			console.log(data) ;
			setImageUrl(data.results[1].urls.small) ;
			// console.log(data.results[1].urls.small) ;
		} catch (error) {
			console.log("Error in fetch data of Image") ;
		}

	}

	const value = {
		loading,
		setLoading,
		page,
		setPage,
		totalPage,
		setTotalPage,
		posts,
		setPosts,
		fetchBlogsPost,
		pageChangeHandler ,
		imageUrl,
		setImageUrl,
		fetchImageUrl
	}


    // step : 2 --> provider 
	return (
            <AppContext.Provider value={value} >
				{children}
			</AppContext.Provider>
	) ;


}

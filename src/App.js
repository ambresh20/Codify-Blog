import './App.css';
import Headers from './Components/Headers';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';
import React, {useEffect, useContext} from 'react' ;
import { AppContext } from './Context/AppContext';

function App() {
   
  const {fetchBlogsPost, page, fetchImageUrl} = useContext(AppContext) ;

  useEffect( () => {
    fetchBlogsPost(page) ;
    fetchImageUrl() ;
  } , []) ;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center  ">
      
      <Headers />
      <Blogs />
      <Pagination />
  
    </div>
  );
}

export default App;

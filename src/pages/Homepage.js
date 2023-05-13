import React, { useContext } from 'react'
import ShowsContext from "../context/shows/showsContext";
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";


const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  return (
    <div className='homepage'>
      <Searchbar />
    </div>
  )
}

export default Homepage
import React, { useContext } from 'react'
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";


const Homepage = () => {
  return (
    <div className='homepage'>
      <Searchbar />
    </div>
  )
}

export default Homepage
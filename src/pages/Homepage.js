import React, { useContext } from 'react'
import ShowsContext from "../context/shows/showsContext";
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";


const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const {loading,shows}=showsContext;

  return (
    <div className='homepage'>
      <Searchbar />
      {loading?(<Loader />):
      (<div>{shows.map((item)=>(
        <ListItem key={item.show.id}
        id={item.show.id}
        image={item.show.image?item.show.image.medium:"https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg" }
        name={item.show.name}
        rating={item.show.rating.average?item.show.rating.average:"No rating"}
        />
      ))}
        </div>)
      }
    </div>
  )
}

export default Homepage
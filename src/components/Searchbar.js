import React ,  { useState, useContext } from 'react'
import Alert from './Alert';
import ShowsContext from "../context/shows/showsContext";
import AlertsContext from '../context/alerts/alertsContext';


const Searchbar = () => {
 const [searchTerm, setsearchTerm] = useState("");
 const showsContext = useContext(ShowsContext);
 const {searchShows} =useContext(ShowsContext)
 const { alert, setAlert } = useContext(AlertsContext);
 

 const onSearchHandler = (e) => {
  e.preventDefault();
  if (searchTerm === "") {
    setAlert("Please enter something", "danger");
  } else {
    searchShows(searchTerm);
  }
};
  return (
    <div className='searchbar'>
       {alert ? <Alert message={alert.message} type={alert.type} /> : null}
      <Alert message="Please enter something"  type="danger"/>
      <form className="searchbar__form">
        <input type="text" placeholder='Search For Shows' value={searchTerm}
        onChange={(e)=> setsearchTerm(e.target.value)}/>
        <button className="btn btn-block" onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
    </div>
  )
}

export default Searchbar
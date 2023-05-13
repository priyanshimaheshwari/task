import React ,  { useState, useContext } from 'react'
import Alert from './Alert';

const Searchbar = () => {
 const [searchTerm, setsearchTerm] = useState("");

 const onSearchHandler = (e) => {
  e.preventDefault();
  console.log("Searching for term "+searchTerm);
 };
  return (
    <div className='searchbar'>
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
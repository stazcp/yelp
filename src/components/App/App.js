import React, { useState, useEffect } from 'react'
import './App.css'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import searchYelp from '../../util/Yelp'

// want to initiate a default search or recommendations for the user
function App(_props) {
  const[businesses,setBusinesses] = useState([])

  // instead of componentDidMount = () => {} 
  // renders a default search on homepage
  useEffect(() =>{
    searchYelp('pizza', 'SF', 'rating').then(businesses => {
      setBusinesses(businesses);
    })
  },[]) // using empty array to make it run only once

  const search = (term, location, sortBy) => {
    searchYelp(term, location, sortBy).then(businesses => {
      setBusinesses(businesses);
    });
  }

  return (
    <div className='App'>
      <h1>ravenous</h1>
      <SearchBar searchYelp={search}/>
      <BusinessList businesses={businesses}/>
    </div>
  )
}

export default App

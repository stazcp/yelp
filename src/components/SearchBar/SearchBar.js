import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar(props) {
  const[term, setTerm] = useState("");
  const[location, setLocation] = useState("");
  const[sortBy, setSortBy] = useState("");

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const getSortByClass = (sortByOption)=> {
    if (sortBy === sortByOption) {
      return 'active';
    }
    return ' ';
  }

  // setter/handler
  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  }

  const handleTermChange = (event) =>{
    setTerm(event);
  }

  const handleLocationChange = (event) =>{
    setLocation(event.target.value.value);
  }

  const handleSearch = (event) =>{
    props.searchYelp(term,location,sortBy)
    event.preventDefault();
  }

  //will render a 'active' class to the current option selected.
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul style={{ 'listStyleType': 'none'  }}>
          {/* <!-- Use .renderSortByOptions() to sort the businesses by their options --> */}
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input onChange={handleTermChange} placeholder="Search Businesses" />
        <input onChange={handleLocationChange} placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
}



export default SearchBar
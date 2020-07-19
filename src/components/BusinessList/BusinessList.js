import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business'

function BusinessList(props) {
  console.log('BusinessList props')
  console.log(props.businesses)
  // in case no businesses were found
  if (!Array.isArray(props.businesses) || props.businesses.length === 0) {
    return (
      <div className="BusinessList">
        <span>Nothing here yet!</span>
      </div>
    )
  }
  return (
    <div className="BusinessList">
    {
      props.businesses.map(business => {
        return <Business key={business.id} business={business} />
      })
    }
    </div>
  )
}

export default BusinessList
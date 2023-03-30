import React from 'react'

import "./ParkSearchSearchContainer.css"

import Searchbar from 'components/common/Searchbar/Searchbar'

const ParkSearchSearchContainer = () => {
  return (
    <div className="ParkSearchSearchContainer">

    <h1 className="ParkSearchSearchContainerTitle">Find Parks</h1>
    <Searchbar />
    </div>
  )
  
}

export default ParkSearchSearchContainer
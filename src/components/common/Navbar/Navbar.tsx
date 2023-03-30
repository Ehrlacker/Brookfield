

import React from 'react'
import NavItem from 'components/common/Navitem/Navitem'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className = "Navbar">
         <NavItem 
    page="/" title="Home"/>

<NavItem 
    page="/Parks" title="Parks"/>

    {/* <NavItem
    page="/CardFinder" title="Card Finder" />

<NavItem
    page="/CardLibrary" title="Card Library" /> */}

    </div>
  )
}

export default Navbar
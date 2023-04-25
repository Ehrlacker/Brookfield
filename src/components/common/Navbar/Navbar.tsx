import React from "react"
import NavItem from "components/common/Navitem/Navitem"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavItem page="/Parks" title="Parks" />
      <NavItem page="/plans" title="Plans" />
    </div>
  )
}

export default Navbar

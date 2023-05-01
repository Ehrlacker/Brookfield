import { useState } from "react"
import Hamburger from "hamburger-react"
import NavItem from "components/common/Navitem/Navitem"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  if (isOpen) {
    return (
      <div className="NavbarHidden">
        <Hamburger color="#C84B31" toggled={isOpen} toggle={setOpen} />
        <NavItem page="/Parks" title="Parks" />
        <NavItem page="/plans" title="Plans" />
        <NavItem page="/signin" title="sign in" />
      </div>
    )
  }
  return (
    <div className="Navbar">
      <Hamburger color="#C84B31" toggled={isOpen} toggle={setOpen} />
    </div>
  )
}

export default Navbar

import { useState } from "react"
import Hamburger from "hamburger-react"
import NavItem from "components/common/Navitem/Navitem"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  if (isOpen) {
    return (
      <div className="NavbarHidden">
        <div className="Hamburger">
        <Hamburger color="#C84B31" toggled={isOpen} toggle={setOpen} />
        </div>
        <NavItem page="/Parks" title="Parks" />
        <NavItem page="/plans" title="Plans" />
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

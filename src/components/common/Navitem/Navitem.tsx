import { Link } from "react-router-dom"
import "./Navitem.css"

type navItem = {
  page: string
  title: string
}

const Navitem = ({ page, title }: navItem) => {
  return (
    <>
      <p className="NavItem">
        <Link className="Link" to={page}>
          {title}
        </Link>
      </p>
    </>
  )
}

export default Navitem

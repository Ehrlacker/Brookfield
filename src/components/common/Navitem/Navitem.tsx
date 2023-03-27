

import React from 'react'
import {Link} from "react-router-dom"
import './Navitem.css'

type navItem = {
page:string,
title:string,
// clickHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>)=> void,
}

const Navitem = ({page, title}:navItem) => {
  return (
    <>
    <p
        className="NavItem"
        // onClick={clickHandler}
    >
        <Link className="Link" to={page}>{title}</Link>
      
    </p>
</>
  )
}

export default Navitem
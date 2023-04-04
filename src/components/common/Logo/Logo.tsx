
import BrookfieldLogo from 'assets/Untitled design (26).png'
import {Link, useNavigate} from "react-router-dom"
import './Logo.css'

const Logo = () => {
  const navigate = useNavigate()
  return (
    <div className="Logo" onClick={()=>{navigate(`/`)}}>
        <img className="LogoImg" src={BrookfieldLogo} alt="a logo of a tent"></img>
        <h1 className="LogoName">Brookfield</h1>
    </div>
  )
}

export default Logo


// navigate(`/`)
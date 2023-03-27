
import BrookfieldLogo from 'assets/Untitled design (26).png'
import './Logo.css'

const Logo = () => {
  return (
    <div className="Logo">
        <img className="LogoImg" src={BrookfieldLogo} alt="a logo of a tent"></img>
        <h1 className="LogoName">Brookfield</h1>
    </div>
  )
}

export default Logo
import "./Footer.css"

const Footer = () => {
  return (
    <div className="Footer">
      <p className="FooterText">
        Matthew Ehrlich &copy; {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer

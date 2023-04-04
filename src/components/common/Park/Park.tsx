
import {useNavigate} from 'react-router-dom'

import "./Park.css"
import RectangleButton from "components/common/Rectanglebutton/Rectanglebutton"

type park = {
  image: string
  name: string
  location: string
  id: string
  clickHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Park = ({ image, name, location, id, clickHandler }: park) => {
  const navigate = useNavigate()
  return (
    <div className="Park">
      <img
        onClick={clickHandler}
        className="Parkimage"
        src={image}
        alt="a picture of a park"
      />

      <div className="ParkNameButtonContainer">
        <h3 className="ParkName">{name}</h3>
      </div>
      <p className="ParkLocation">State: {location}</p>

      <div className="ParkButtonDiv">
        <RectangleButton
          name="Details"
          clickHandler={() =>  navigate(`/parks/${id}`)}
        />
      </div>
    </div>
  )
}

export default Park

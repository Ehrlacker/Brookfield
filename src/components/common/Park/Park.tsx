import "./Park.css"
import RectangleButton from "components/common/Rectanglebutton/Rectanglebutton"

type park = {
  image: string
  name: string
  location: string
  clickHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Park = ({ image, name, location, clickHandler }: park) => {
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
          clickHandler={() => console.log("clicked")}
        />

{/* <RectangleButton
          name="Plan"
          clickHandler={() => console.log("clicked")}
        /> */}
      </div>
    </div>
  )
}

export default Park

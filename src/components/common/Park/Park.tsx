import "./Park.css"
// import { PlusCircleIcon } from "@heroicons/react/24/solid"

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
      {/* <button className="ParkButton">
        <PlusCircleIcon />
      </button> */}

      <div className="ParkNameButtonContainer">
        <h3 className="ParkName">{name}</h3>
      </div>
      <p className="ParkLocation">State: {location}</p>
    </div>
  )
}

export default Park


import './Park.css'

type park={
    image:string;
    name:string;
    location:string
}

const Park = ({image, name, location}:park) => {
  return (
    <div className="Park">
        <img className="Parkimage" src={image} alt="a picture of a park"></img>
        <h3 className="ParkName">{name}</h3>
        <p className="ParkLocation">State: {location}</p>
    </div>
  )
}

export default Park
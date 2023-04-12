import { Address } from "types/types"
import './ParkLocations.css'

type address = {
  address: Address
}



const ParkLocations = ({ address }: address) => {
  return (
    <div className="ParkLocations">

      <div className="ParkLocationsDescriptionWrapper">
      <h2 className="ParkLocationsTitle">Address:</h2>
      <p className="ParkLocationsDescription">{address.line1}</p>
      </div>
      <div className="ParkLocationsDescriptionWrapper">
      <h2 className="ParkLocationsTitle">City:</h2>
      <p className="ParkLocationsDescription">{address.city}</p>
      </div>
      <div className="ParkLocationsDescriptionWrapper">
      <h2 className="ParkLocationsTitle">State Code:</h2>
      <p className="ParkLocationsDescription">{address.stateCode}</p>
      </div>
      <div className="ParkLocationsDescriptionWrapper">
      <h2 className="ParkLocationsTitle">Postal code:</h2>
      <p className="ParkLocationsDescription">{address.postalCode}</p>
      </div>
      <div className="ParkLocationsDescriptionWrapper">
      <h2 className="ParkLocationsTitle">Type:</h2>
      <p className="ParkLocationsDescription">{address.type}</p>
      </div>
    </div>
  )
}

export default ParkLocations

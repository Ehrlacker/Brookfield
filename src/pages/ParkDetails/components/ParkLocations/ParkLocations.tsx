import { Address } from "types/types"
import './ParkLocations.css'

type address = {
  address: Address
}



const ParkLocations = ({ address }: address) => {
  return (
    <div className="ParkLocations">
      <h2 className="ParkLocationsTitle">Address:</h2>
      <p className="ParkLocationsDescription">{address.line1}</p>
      <h2 className="ParkLocationsTitle">City:</h2>
      <p className="ParkLocationsDescription">{address.city}</p>
      <h2 className="ParkLocationsTitle">State Code:</h2>
      <p className="ParkLocationsDescription">{address.stateCode}</p>
      <h2 className="ParkLocationsTitle">Postal code:</h2>
      <p className="ParkLocationsDescription">{address.postalCode}</p>
      <h2 className="ParkLocationsTitle">Type</h2>
      <p className="ParkLocationsDescription">{address.type}</p>

    </div>
  )
}

export default ParkLocations

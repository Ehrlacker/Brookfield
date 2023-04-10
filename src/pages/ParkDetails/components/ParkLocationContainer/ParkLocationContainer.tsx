
import './ParkLocationContainer.css'
import ParkLocations from 'pages/ParkDetails/components/ParkLocations/ParkLocations'
import { Datum } from "types/types"

type array = {
    array: Datum
  }

const ParkLocationContainer = ({array}:array) => {
  return (
    <div className="ParkLocationContainer">
 <h1 className="ParkLocationsHeader">Location</h1>
 {/* <h2 className="ParkLocationsChoose">Choose Location</h2> */}
{array.addresses.map((address)=>{
    if(address.type === "Physical"){
        return <ParkLocations address = {address} />
    }

})}
    </div>
  )
}

export default ParkLocationContainer
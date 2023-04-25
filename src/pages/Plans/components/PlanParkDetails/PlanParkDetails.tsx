import { Datum } from "types/types"
import { inputPropValues } from "types/types"
import "./PlanParkDetails.css"

type array = {
  array: trip
}

type trip = {
  park: Datum[]
  activities: inputPropValues[]
  id: string
}

const PlanParkDetails = ({ array }: array) => {
  return (
    <div className="PlanParkDetails">
     
      {array.park.map(() => {
        return (
          <div className="PlanParkDetailsImageWrapper">
            <div>
              <h1 className="PlanParkDetailsH1">{array.park[0].fullName}</h1>
              <div className="PlansParkDetailContainer">
                <div className="ParkDetailWrapper">
                  <h3 className="PlanParkDetailName">City</h3>
                  <p className="PlanParkDetail">
                   {array.park[0].addresses[0].city}
                  </p>
                </div>
                <div className="ParkDetailWrapper">
                  <h3 className="PlanParkDetailName">Address</h3>
                  <p className="PlanParkDetail">
                    {array.park[0].addresses[0].line1}
                  </p>
                </div>
                <div className="ParkDetailWrapper">
                  <h3 className="PlanParkDetailName">State</h3>
                  <p className="PlanParkDetail">
                    {array.park[0].addresses[0].stateCode}
                  </p>
                </div>
                <div className="ParkDetailWrapper">
                  <h3 className="PlanParkDetailName">Postal Code</h3>
                  <p className="PlanParkDetail">
                    {array.park[0].addresses[0].postalCode}
                  </p>
                </div>
                <div className="ParkDetailWrapper">
                  <h3 className="PlanParkDetailName">Phone Number</h3>
                  <p className="PlanParkDetail">
                    {array.park[0].contacts.phoneNumbers[0].phoneNumber}
                  </p>
                </div>
              </div>
            </div>
            <img
              className="planParkDetailsImage"
              src={array.park[0].images[0].url}
              alt="A National Park."
            />
          </div>
        )
      })}
    </div>
  )
}

export default PlanParkDetails

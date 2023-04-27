import { Datum } from "types/types"
import { inputPropValues } from "types/types"
import RoundedButton from 'components/common/RoundedButton/RoundedButton'
import "./PlanParkActivities.css"

type array = {
  array: trip
  clicked:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

type trip = {
  park: Datum[]
  activities: inputPropValues[]
  id: string
}

const PlanParkActivities = ({ array, clicked }: array) => {
  return (
    <div className="TripPlansContainer">
      <h1 className="TripPlansTitle">Planned Ameneties:</h1>
      <div className="TripPlansWrapper">
        <div className="TripPlansParkActivitiesBox">
          <h2 className="TripPlansFoodActivity">Food</h2>
          {array.activities.map((activity: inputPropValues) => {
            if (activity.activityType === "activity") {
              return (
                <div className="TripPlans">
                  <p>Type: {activity.activityType}</p>
                  <p>Name: {activity.Name}</p>
                  <p>Address: {activity.Address}</p>
                  <p>City, State, Zip: {activity.cityStateZipcode}</p>
                </div>
              )
            }
          })}
        </div>

        <div className="TripPlansParkActivitiesBox">
          <h2 className="TripPlansFoodActivity">Activity</h2>
          {array.activities.map((activity: inputPropValues) => {
            if (activity.activityType === "food") {
              return (
                <div className="TripPlans">
                  <p>Type: {activity.activityType}</p>
                  <p>Name: {activity.Name}</p>
                  <p>Address: {activity.Address}</p>
                  <p>City, State, Zip: {activity.cityStateZipcode}</p>
                </div>
              )
            }
          })}
        </div>
      </div>
      <RoundedButton
        text="Delete"
        clickHandler={clicked}
        style={{ position: "absolute", bottom: 10 }}
      />
    </div>
  )
}

export default PlanParkActivities

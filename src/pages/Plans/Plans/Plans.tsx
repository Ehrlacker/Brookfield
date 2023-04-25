import { useContext } from "react"
import { TripContext } from "contexts/TripProvider"
import PlanParkDetails from "pages/Plans/components/PlanParkDetails/PlanParkDetails"
import PlanParkActivities from "pages/Plans/components/PlanParkActivities/PlanParkActivities"
import "./Plans.css"

const Plans = () => {
  const { trip, setTrip } = useContext(TripContext)
  console.log(trip)
  return (
    <div className="Plans">
      <div className="PlansContentWrapper">
        <h1 className="PlansTitle">Plans:</h1>
        {trip.map((plan) => {
          return (
            <div className="PlansDetailsActivitiesWrapper">
              <PlanParkDetails array={plan} />
              <PlanParkActivities array={plan} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Plans

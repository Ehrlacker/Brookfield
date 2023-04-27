import { useContext } from "react"
import { TripContext } from "contexts/TripProvider"
import PlanParkDetails from "pages/Plans/components/PlanParkDetails/PlanParkDetails"
import PlanParkActivities from "pages/Plans/components/PlanParkActivities/PlanParkActivities"
import { Datum } from "types/types"
import { inputPropValues } from "types/types"
import "./Plans.css"

type trip = {
  park: Datum[]
  activities: inputPropValues[]
  id: string
}

const Plans = () => {
  const { trip, setTrip } = useContext(TripContext)
  console.log(trip)

  const deleteTripPlan = (plan: trip) => {
    const newTrips = trip.filter((triplist) => {
      return triplist.id !== plan.id
    })
    setTrip(newTrips)
  }
  return (
    <div className="Plans">
      <div className="PlansContentWrapper">
        <h1 className="PlansTitle">Plans:</h1>
        {trip.map((plan) => {
          return (
            <div className="PlansDetailsActivitiesWrapper">
              <PlanParkDetails array={plan} />
              <PlanParkActivities
                clicked={() => {
                  deleteTripPlan(plan)
                }}
                array={plan}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Plans

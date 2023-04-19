import TripPlans from "pages/ParkDetails/components/TripPlans/TripPlans"
import { TripPlansContext } from "contexts/TripPlansProvider"
import { useContext } from "react"
import { v4 as uuidV4 } from "uuid"
import { TrashIcon } from "@heroicons/react/24/solid"
import "./TripPlansContainer.css"

type array = {
  array: inputPropValues[]
}
export type inputPropValues = {
  activityType: string
  Name: string
  Address: string
  cityStateZipcode: string
  id: string
}

type plan = {
  plan: inputPropValues
}

const TripPlansContainer = ({ array }: array) => {
  const { activities, setActivities } = useContext(TripPlansContext)

  const deleteTripPlan = (plan: inputPropValues) => {
    const newActivities = activities.filter((activitylist) => {
      return activitylist.id !== plan.id
    })
    setActivities(newActivities)
  }

  return (
    <div className="TripPlansContainer">
      <h1 className="TripPlansTitle">Trip plans</h1>
      <div className="TripPlansWrapper">
        <div>
          <h2 className="TripPlansFoodActivity">Food</h2>
          {array.map((plan) => {
            if (plan.activityType === "food") {
              return (
                <TripPlans
                  key={plan.id}
                  id={uuidV4()}
                  activityType={plan.activityType}
                  Name={plan.Name}
                  Address={plan.Address}
                  cityStateZipcode={plan.cityStateZipcode}
                  button={<TrashIcon />}
                  clickHandler={() => {
                    deleteTripPlan(plan)
                  }}
                />
              )
            }
          })}
        </div>

        <div>
          <h2 className="TripPlansFoodActivity">Activity</h2>
          {array.map((plan) => {
            if (plan.activityType === "activity") {
              return (
                <TripPlans
                  key={uuidV4()}
                  id={uuidV4()}
                  activityType={plan.activityType}
                  Name={plan.Name}
                  Address={plan.Address}
                  cityStateZipcode={plan.cityStateZipcode}
                  button={<TrashIcon />}
                  clickHandler={() => {
                    deleteTripPlan(plan)
                  }}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default TripPlansContainer

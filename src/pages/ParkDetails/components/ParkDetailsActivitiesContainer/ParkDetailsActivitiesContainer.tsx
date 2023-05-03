import "./ParkDetailsActivitiesContainer.css"
import ParkDetailsActivities from "pages/ParkDetails/components/ParkDetailsActivities/ParkDetailsActivities"
import { Datum } from "types/types"

type array = {
  array: Datum
}

const ParkDetailsActivitiesContainer = ({ array }: array) => {
  return (
    <div className="ParkDetailsActivitiesContainer">
      <h1 className="ParkActivitiesContainerTitle">Activities</h1>
      <div className="ParkDetailsActivitiesType">
        {array.activities.map((activityType) => {
          return (
            <ParkDetailsActivities
              key={activityType.id}
              activity={activityType}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ParkDetailsActivitiesContainer

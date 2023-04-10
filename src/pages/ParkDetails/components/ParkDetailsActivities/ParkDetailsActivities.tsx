import "./ParkDetailsActivities.css"
import { Activity } from "types/types"

type activity = {
  activity: Activity
}

const ParkDescriptionActivities = ({ activity }: activity) => {
  return (
    <p id={activity.id} className="ParkDescriptionActivitiesName">
      {activity.name}
    </p>
  )
}

export default ParkDescriptionActivities

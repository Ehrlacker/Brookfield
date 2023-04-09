

import './ParkDescriptionActivities.css'

type activity={
    name:string;
    id:string
}

type activityName = {}

const ParkDescriptionActivities = ({name, id}:activity) => {
  return (
    // <div className="ParkDescriptionActivities" >
        <p id={id} className="ParkDescriptionActivitiesName">{name}</p>
    // </div>



  )
}

export default ParkDescriptionActivities
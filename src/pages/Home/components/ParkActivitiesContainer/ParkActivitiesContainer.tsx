import SectionTitles from "components/common/SectionTitles/SectionTitles"
import "./ParkActivitiesContainer.css"
import ActivityImages from "pages/Home/components/ActivityImages/ActivityImages"
import Activity from "pages/Home/components/Activity/Activity"
import { v4 as uuidv4 } from 'uuid';

const ParkActivitiesContainer = () => {
  return (
    <div className="ParkActivitiesContainer">
      <div className="mediaContainer">
        <div className="ActivitiesTitlesAndButton">
          <SectionTitles name="Find National Parks In Your Area" />
          <p className="ParkActivitiesP">
            Discover parks that fit your desired activities
          </p>
        </div>
        <ul className="ActivitiesContainer">
          {ActivityImages.map((activity) => {
            return <Activity name={activity.name} url={activity.url} key={uuidv4()}  />
          })}
        </ul>
      </div>
    </div>
  )
}

export default ParkActivitiesContainer

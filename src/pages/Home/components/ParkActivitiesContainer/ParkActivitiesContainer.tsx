import RoundedButton from "components/common/RoundedButton/RoundedButton"
import SectionTitles from "components/common/SectionTitles/SectionTitles"
import "./ParkActivitiesContainer.css"
import ActivityImages from 'pages/Home/components/ActivityImages/ActivityImages'
import Activity from 'pages/Home/components/Activity/Activity'



// const ActivityImage: {name: string; url: string} []

interface activityType {
name: string,
url: string,
}

const ParkActivitiesContainer = () => {
  return (
    <div className="ParkActivitiesContainer">
      <div className="mediaContainer">
        <div className="ActivitiesTitlesAndButton">
          <SectionTitles name="Find National Parks In Your Area" />
          <p className="ParkActivitiesP">
            Choose parks based on your desired activities
          </p>

          <button className="ParkActivitiesButton">Start Here</button>
        </div>
        <ul className="ActivitiesContainer">
        {ActivityImages.map((activity)=>{
          return (
            <Activity
            name={activity.name}
            url={activity.url} />

          )
        })}
        </ul>
      </div>
    </div>
  )
}

export default ParkActivitiesContainer

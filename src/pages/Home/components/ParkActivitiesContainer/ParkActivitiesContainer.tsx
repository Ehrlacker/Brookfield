import RoundedButton from "components/common/RoundedButton/RoundedButton"
import SectionTitles from "components/common/SectionTitles/SectionTitles"
import "./ParkActivitiesContainer.css"
import ActivityImages from 'pages/Home/components/ActivityImages/ActivityImages'


type activityType =[ 
  url: string,
  name: string,

]
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
        <ul>
        {ActivityImages.map((activity): activityType=>{
          return (
            <img src={activity.url} alt="a picture of an outoor activity" />
            <h1>{activity.name}</h1>
          )
        })}
        </ul>
      </div>
    </div>
  )
}

export default ParkActivitiesContainer

import HomeSearchContainer from "pages/Home/components/HomeSearchContainer/HomeSearchContainer"
import FeaturedParksContainer from "pages/Home/components/FeaturedParksContainer/FeaturedParksContainer"
import PlanEntireTrip from "pages/Home/components/PlanEntireTrip/PlanEntireTrip"
import ParkActivitiesContainer from "pages/Home/components/ParkActivitiesContainer/ParkActivitiesContainer"
import "./Home.css"

const Home = () => {
  return (
    <div className="Home">
      <HomeSearchContainer />
      <FeaturedParksContainer />
      <ParkActivitiesContainer />
      <PlanEntireTrip />
    </div>
  )
}

export default Home

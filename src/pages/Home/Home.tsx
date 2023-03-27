
import HomeSearchContainer from 'pages/Home/components/HomeSearchContainer/HomeSearchContainer'

import FeaturedParksContainer from 'pages/Home/components/FeaturedParksContainer/FeaturedParksContainer'
import PlanEntireTrip from 'pages/Home/components/PlanEntireTrip/PlanEntireTrip'

import './Home.css'



const Home = () => {
  return (
    <div className="Home"><HomeSearchContainer />
    <FeaturedParksContainer />
    <PlanEntireTrip />
    </div>
  )
}

export default Home
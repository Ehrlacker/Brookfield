import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { Datum } from "types/types"
import ParkDetailsContainer from "pages/ParkDetails/components/ParkDescription/ParkDescription"
import "./ParkDetails.css"
import ParkDetailsActivitiesContainer from "pages/ParkDetails/components/ParkDetailsActivitiesContainer/ParkDetailsActivitiesContainer"
import ParkImage from "pages/ParkDetails/components/ParkImage/ParkImage"
import ParkLocationsContainer from "pages/ParkDetails/components/ParkLocationContainer/ParkLocationContainer"
import FoodOrActivityFormContainer from "pages/ParkDetails/components/FoodOrActivityFormContainer/FoodOrActivityFormContainer"
import GoogleMaps from "pages/ParkDetails/components/GoogleMaps/GoogleMap"
import TripPlansContainer from "pages/ParkDetails/components/TripPlansContainer/TripPlansContainer"
import { TripPlansContext } from "contexts/TripPlansProvider"
import {inputPropValuesArray} from 'types/types'
import useLocalStorage from 'hooks/UseLocalStorage'

// type trip={
//   park:Datum[];
//   activities:inputPropValuesArray
// }


const ParkDetails = () => {
  const { activities, setActivities } = useContext(TripPlansContext)
  const [park, setPark] = useState<Datum[]>([])
  const [trip, setTrip] = useLocalStorage<any[]>("trip",[])
  const { id } = useParams()

  useEffect(() => {
    const getPark = async () => {
      const url = `https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_apikey}&id=${id}`
      const response = await fetch(url)
      const resJSON = await response.json()
      console.log(resJSON.data)
      setPark(resJSON.data)
    }
    getPark()
  }, [id])


const submitTripPlans = () => {
  setTrip([{ park: park, activities: activities }, ...trip])
}


  return (
    <div className="ParkDetailsContainer">
      <div className="ParkDetails"></div>
      {park.map((newPark: Datum) => {
        return (
          <>
            <ParkImage background={newPark.images[0].url} />
            <ParkDetailsContainer
              description={newPark.directionsInfo}
              parkName={newPark.fullName}
            />
            <ParkDetailsActivitiesContainer array={newPark} />
            <ParkLocationsContainer array={newPark} />
            <GoogleMaps
              center={{
                lat: parseFloat(newPark.latitude),
                lng: parseFloat(newPark.longitude),
              }}
              zoom={13}
              position={{
                lat: parseFloat(newPark.latitude),
                lng: parseFloat(newPark.longitude),
              }}
            />
            <FoodOrActivityFormContainer />
            <TripPlansContainer clicked={submitTripPlans}  array={activities} />
          </>
        )
      })}
    </div>
  )
}

export default ParkDetails

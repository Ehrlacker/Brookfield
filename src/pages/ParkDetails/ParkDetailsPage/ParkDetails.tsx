import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Datum } from "types/types"
import ParkDetailsContainer from "pages/ParkDetails/components/ParkDescription/ParkDescription"
import "./ParkDetails.css"
import ParkDetailsActivitiesContainer from "pages/ParkDetails/components/ParkDetailsActivitiesContainer/ParkDetailsActivitiesContainer"
import ParkImage from "pages/ParkDetails/components/ParkImage/ParkImage"
import ParkLocationsContainer from "pages/ParkDetails/components/ParkLocationContainer/ParkLocationContainer"
import FoodOrActivityFormContainer from 'pages/ParkDetails/components/FoodOrActivityFormContainer/FoodOrActivityFormContainer'
import GoogleMaps from "pages/ParkDetails/components/GoogleMaps/GoogleMap"
// import GoogleMap from 'pages/ParkDetails/components/MapTwo/MapTwo'


const ParkDetails = () => {
  const [park, setPark] = useState<Datum[]>([])
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
            {/* <GoogleMap
            center={{
              lat: parseFloat(newPark.latitude),
              lng: parseFloat(newPark.longitude),
            }}
            zoom={13}
            position={{
              lat: parseFloat(newPark.latitude),
              lng: parseFloat(newPark.longitude),
            }} /> */}
          </>
          
        )
        
      })}
      
      
     
      
    </div>
  )
}

export default ParkDetails

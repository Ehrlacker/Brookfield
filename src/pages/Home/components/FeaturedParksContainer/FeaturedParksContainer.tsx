import { useState, useEffect } from "react"
import SectionTitles from "components/common/SectionTitles/SectionTitles"
import Park from "components/common/Park/Park"
import {PlusCircleIcon} from '@heroicons/react/24/outline'
import "./FeaturedParksContainer.css"

const FeaturedParksContainer = () => {
  const [parks, setParks] = useState<any[]>([])

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_apikey}&limit=8`
    )
      .then((response) => response.json())
      .then((json) => setParks(json.data))
    // console.log(parks)
  }, [])

  return (
    <div className="FeaturedParksContainer">
      <SectionTitles name="Featured National Parks" />
{/* <div className="ParkListContainer"> */}
      <ul className="ParkList">
        {parks.map((park) => {
          console.log(park.images[0])
          return (
            <Park
              key={park.id}
              image={park.images[0].url}
              name={park.fullName}
              location={park.states}
              clickHandler={()=>{console.log("clicked")}}
            />
          )
        })}
      </ul>
      {/* </div> */}
    </div>
  )
}

export default FeaturedParksContainer

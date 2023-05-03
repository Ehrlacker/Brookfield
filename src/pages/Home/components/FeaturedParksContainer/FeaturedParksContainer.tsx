import { useState, useEffect } from "react"
import SectionTitles from "components/common/SectionTitles/SectionTitles"
import Park from "components/common/Park/Park"
import "./FeaturedParksContainer.css"

const FeaturedParksContainer = () => {
  const [parks, setParks] = useState<any[]>([])

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_apikey}&limit=8`
    )
      .then((response) => response.json())
      .then((json) => setParks(json.data))
  }, [])

  return (
    <div className="FeaturedParksContainer">
      <SectionTitles name="Featured National Parks" />

      <ul className="ParkList">
        {parks.map((park) => {
          return (
            <Park
              key={park.id}
              id={park.id}
              image={park.images[0].url}
              name={park.fullName}
              location={park.states}
              clickHandler={() => {}}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default FeaturedParksContainer

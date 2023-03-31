import SectionTitles from "components/common/SectionTitles/SectionTitles"
import Park from "components/common/Park/Park"

import "./ParkResultsContainer.css"
import { useContext } from "react"
import { ParkSearchContext } from "contexts/ParkSearchProvider"

const ParkResultsContainer = () => {
  const { parks, setParks } = useContext(ParkSearchContext)
  return (
    <div className="ParkResultsContainer">
      <SectionTitles name="Search Results" />

      <ul className="ParksContainer">
        {parks.map((park) => {
          return (
            <Park
              key={park.id}
              image={park.images[0].url}
              name={park.fullName}
              location={park.states}
              clickHandler={() => {
                console.log("clicked")
              }}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ParkResultsContainer

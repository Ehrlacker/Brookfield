import SectionTitles from "components/common/SectionTitles/SectionTitles"
import Park from "components/common/Park/Park"
import "./ParkResultsContainer.css"
import { useContext } from "react"
import { ParkSearchContext } from "contexts/ParkSearchProvider"
import River from "assets/river-1899328_1920.jpg"


const ParkResultsContainer = () => {
  const { parks } = useContext(ParkSearchContext)
  return (
    <div className="ParkResultsContainer">
      <SectionTitles name="Search Results" />
      <ul className="ParksContainer">
        {parks.map((park) => {
          return (
            <Park
              key={park.id}
              id={park.id}
              image={park.images.length === 0 ? River : park.images[0].url}
              name={park.fullName}
              location={park.states}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ParkResultsContainer

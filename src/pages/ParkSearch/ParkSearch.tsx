import ParkSearchContainer from "pages/ParkSearch/components/ParkSearchSearchContainer/ParkSearchSearchContainer"
import ParkResultsContainer from "pages/ParkSearch/components/ParkResultsContainer/ParkResultsContainer"

const ParkSearch = () => {
  return (
    <div className="ParkSearch">
      <ParkSearchContainer />
      <ParkResultsContainer />
    </div>
  )
}

export default ParkSearch

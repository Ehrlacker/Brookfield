import HomeSearchBar from "pages/Home/components/HomeSearchBar/HomeSearchBar"
import "./HomeSearchContainer.css"

const HomeSearchContainer = () => {
  return (
    <div className="SearchContainer">
      <h1 className="SearchContainerTitle">Your Next Adventure</h1>
      <HomeSearchBar />
    </div>
  )
}

export default HomeSearchContainer

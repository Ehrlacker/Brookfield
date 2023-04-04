

// import RectangleButton from 'components/common/Rectanglebutton/Rectanglebutton'
import Searchbar from 'components/common/Searchbar/Searchbar'
import HomeSearchBar from 'pages/Home/components/HomeSearchBar/HomeSearchBar'
import './HomeSearchContainer.css'

const HomeSearchContainer = () => {
    return (
      <div className="SearchContainer">
          <h1 className="SearchContainerTitle">Your Next Adventure</h1>
        {/* <Searchbar /> */}
        <HomeSearchBar />
    
      </div>
    )
  }
  
  export default HomeSearchContainer
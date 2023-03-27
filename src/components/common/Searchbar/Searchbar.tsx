

import './Searchbar.css'


const Searchbar = () => {
    return (
      <form className="SearchBar">
          <input className="searchInput" type="string" placeholder="Search By State Letters" />
          <button className="SearchButton" type="submit">search</button>
      </form>
    )
  }
  
  export default Searchbar
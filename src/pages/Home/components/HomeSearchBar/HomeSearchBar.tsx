import { useState, useContext } from "react"
import { ParkSearchContext } from "contexts/ParkSearchProvider"
import { useNavigate } from "react-router-dom"
import { Datum } from "types/types"
import "./HomeSearchBar.css"

const HomeSearchBar = () => {
  const { parks, setParks } = useContext(ParkSearchContext)
  const [value, SetValue] = useState("")
  const navigate = useNavigate()

  const getParks = async () => {
    const url = `https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_apikey}&stateCode=${value}`
    const response = await fetch(url)
    const resJSON = await response.json()

    setParks(resJSON.data)
  }

  const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    SetValue(newValue)
  }

  const SubmitParkValueForSearch = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    saveToLocalStorage(parks)
    getParks()
    navigate(`/Parks?state=${value}`)
  }

  const saveToLocalStorage = (items: Datum[]) => {
    localStorage.setItem("park-search-input", JSON.stringify(items))
  }

  return (
    <form className="SearchBar">
      <input
        className="searchInput"
        value={value}
        onChange={HandleInputChange}
        type="string"
        placeholder="Search By State Letters"
      />
      <button
        className="SearchButton"
        onClick={SubmitParkValueForSearch}
        type="submit"
      >
        search
      </button>
    </form>
  )
}

export default HomeSearchBar

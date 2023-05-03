import { useState, useEffect, useContext } from "react"
import { ParkSearchContext } from "contexts/ParkSearchProvider"
import { useNavigate } from "react-router-dom"
import "./Searchbar.css"

const Searchbar = () => {
  const { setParks } = useContext(ParkSearchContext)
  const [value, SetValue] = useState("")
  const [parkSearchQuery, setParkSearchQuery] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if (parkSearchQuery.length === 0) {
      return
    }
    const getParks = async () => {
      const url = `https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_apikey}&stateCode=${parkSearchQuery}`
      const response = await fetch(url)
      const resJSON = await response.json()
      setParks(resJSON.data)
    }
    getParks()
  }, [parkSearchQuery])

  const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    SetValue(newValue)
  }

  const SubmitParkValueForSearch = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    setParkSearchQuery(value)
    navigate(`/Parks?state=${value}`)
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

export default Searchbar

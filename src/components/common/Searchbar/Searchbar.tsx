import { ChangeEvent, useState, useEffect, useContext } from "react"
import { ParkSearchContext } from "contexts/ParkSearchProvider"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import "./Searchbar.css"

type buttonSearch = {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const Searchbar = () => {
  const { parks, setParks } = useContext(ParkSearchContext)
  const [value, SetValue] = useState("")
  const [params] = useSearchParams()
  console.log(params.get("state"))
  
  const [parkSearchQuery, setParkSearchQuery] = useState("")

  let location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const getParks = async () => {
      const url = `https://developer.nps.gov/api/v1/parks?api_key=FcBVNSTUhHmVDsktfx7MkAgtGyTTnEqpCxMfaU8M&stateCode=${parkSearchQuery}`
      const response = await fetch(url)
      const resJSON = await response.json()
      console.log(resJSON.data)
      setParks(resJSON.data)
    }
    getParks()
  }, [parkSearchQuery])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    SetValue(newValue)
  }

  const submitParkValueForSearch = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    if (location.pathname !== "/Parks") {
      // AlsoSaveToLocalStorage(value)
      setParkSearchQuery(value)
      // saveToLocalStorage(parkSearchQuery)
      navigate(`/Parks?state=${value}`)

      // setParkSearchQuery(value)
      console.log(value)
    } else {
      setParkSearchQuery(value)
    }
  }

  const saveToLocalStorage = (items: string) => {
    localStorage.setItem("park-search-input", JSON.stringify(items))
  }

  const AlsoSaveToLocalStorage = (items: string) => {
    localStorage.setItem("park-search-query", JSON.stringify(items))
  }

  return (
    <form className="SearchBar">
      <input
        className="searchInput"
        value={value}
        onChange={handleInputChange}
        type="string"
        placeholder="Search By State Letters"
      />
      <button
        className="SearchButton"
        onClick={submitParkValueForSearch}
        type="submit"
      >
        search
      </button>
    </form>
  )
}

export default Searchbar

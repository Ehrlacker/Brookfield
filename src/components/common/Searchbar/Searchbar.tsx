import { ChangeEvent, useState, useEffect, useContext } from "react"
import { ParkSearchContext } from "contexts/ParkSearchProvider"
import {
  useLocation,
  useNavigate,
  useSearchParams,
  useParams,
} from "react-router-dom"
import "./Searchbar.css"
// import useParks from "hooks/UseParks"

type buttonSearch = {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const Searchbar = () => {
  const { parks, setParks } = useContext(ParkSearchContext)
  const [value, SetValue] = useState("")
  const [params] = useSearchParams()
  const { name } = useParams()

  console.log(params.get("state"))

  const [parkSearchQuery, setParkSearchQuery] = useState("")

  // let location = useLocation()
  const navigate = useNavigate()

  // const parks = useParks(parkSearchQuery)
  useEffect(() => {
    if(parkSearchQuery.length === 0){
      return
    }
    
    const getParks = async () => {
      const url = `https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_apikey}&limit=10`
      const response = await fetch(url)
      const resJSON = await response.json()
      console.log(resJSON.data)
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
    console.log(parkSearchQuery)

    // SetValue("")
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

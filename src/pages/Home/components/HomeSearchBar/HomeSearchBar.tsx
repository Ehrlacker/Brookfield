import { useState, useContext } from "react"
import { ParkSearchContext } from "contexts/ParkSearchProvider"
import Dropdown from "components/common/DropDown/DropDown"
import { useNavigate } from "react-router-dom"
import { Datum } from "types/types"
import "./HomeSearchBar.css"

const HomeSearchBar = () => {
  const { parks, setParks } = useContext(ParkSearchContext)
  const [value, setValue] = useState("Select state")
  const navigate = useNavigate()

  const getParks = async () => {
    const url = `https://developer.nps.gov/api/v1/parks?api_key=${process.env.REACT_APP_apikey}&stateCode=${value}`
    const response = await fetch(url)
    const resJSON = await response.json()
    setParks(resJSON.data)
  }

  const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  const SubmitParkValueForSearch = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    saveToLocalStorage(parks)
    if (value === "Select state") {
      return
    } else {
      getParks()
      navigate(`/Parks?state=${value}`)
    }
  }

  const saveToLocalStorage = (items: Datum[]) => {
    localStorage.setItem("park-search-input", JSON.stringify(items))
  }

  return (
    <Dropdown
      onChange={HandleInputChange}
      onClick={SubmitParkValueForSearch}
      value={value}
    />
  )
}

export default HomeSearchBar

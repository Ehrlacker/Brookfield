import { ChangeEvent, useState, useEffect, useContext } from "react"
import {ParkSearchContext} from 'contexts/ParkSearchProvider'
import "./Searchbar.css"

// import { Datum } from "types/types"

type buttonSearch = {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const Searchbar = () => {

  const { setParks}  = useContext(ParkSearchContext);


  const [value, SetValue] = useState("")
  const [parkSearchQuery, setParkSearchQuery] = useState("")
  // const [parks, setParks] = useState<Datum[]>([])

  useEffect(() => {
    const getGames = async () => {
      const url = `https://developer.nps.gov/api/v1/parks?api_key=FcBVNSTUhHmVDsktfx7MkAgtGyTTnEqpCxMfaU8M&stateCode=${parkSearchQuery}`
      const response = await fetch(url)
      const resJSON = await response.json()
      console.log(resJSON.data)
      setParks(resJSON.data)
    }
    getGames()
  }, [parkSearchQuery])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    SetValue(newValue)
  }

  const submitParkValueForSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setParkSearchQuery(value)
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

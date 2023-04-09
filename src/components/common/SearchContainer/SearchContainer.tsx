// import Searchbar from 'components/common/Searchbar/Searchbar'
import { ReactNode } from "react"

interface SearchBar {
  search?: ReactNode
  background: string
}

const SearchContainer = ({ search, background }: SearchBar) => {
  return (
    <div
      className="SearchContainer"
      style={{ backgroundImage: `url(${background})`}}
    >
      {search}
    </div>
  )
}

export default SearchContainer

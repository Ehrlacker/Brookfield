import { ChangeEventHandler } from "react"
import { states } from "components/common/StateArray/StateArray"
import { v4 as uuidv4 } from "uuid"
import './DropDown.css'

type Actions = {
    value:string,
  onChange: ChangeEventHandler
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const Dropdown = ({ onChange, onClick, value }: Actions) => {
  return (
    <form className="SearchBar">
      <select className="searchInput" onChange={onChange} value={value}>
        {states.map((state) => {
          return (
            <option value={state.value} key={uuidv4()}>
              {state.name}
            </option>
          )
        })}
      </select>
      <button className="SearchButton" onClick={onClick} type="submit">
        search
      </button>
    </form>
  )
}

export default Dropdown

import { ChangeEvent } from "react"
import "./FoodOrActivityForm.css"

export type inputProps = {
  labelType: string
  placeholder: string
  id: string
  inputType: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}


const FoodOrActivityForm = ({
  labelType,
  placeholder,
  id,
  inputType,
  value,

  onChange,
}: inputProps) => {
  return (
    <div className="FoodOrActivityForm">
      <label className="FoodOrActivityFormLabel">{labelType}</label>
      <input
        className="FoodOrActivityFormInput"
        placeholder={placeholder}
        id={id}
        type={inputType}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FoodOrActivityForm

import { CSSProperties } from "react"
import "./RoundedButton.css"

export type button = {
  text: string
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  style?: CSSProperties 
}

const RoundedButton = ({ text, clickHandler, style }: button) => {
  return (
    <button className="RoundedButton" type="submit" onClick={clickHandler} style={style}>
      {text}
    </button>
  )
}

export default RoundedButton

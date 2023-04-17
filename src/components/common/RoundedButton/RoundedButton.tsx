import "./RoundedButton.css"

export type button = {
  text: string
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const RoundedButton = ({ text, clickHandler }: button) => {
  return (
    <button className="RoundedButton" type="submit" onClick={clickHandler}>
      {text}
    </button>
  )
}

export default RoundedButton

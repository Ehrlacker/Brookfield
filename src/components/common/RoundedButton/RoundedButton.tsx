import "./RoundedButton.css"

type button = {
  text: string
  clickHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const RoundedButton = ({ text, clickHandler }: button) => {
  return (
    <button className="RoundedButton" onClick={clickHandler}>
      {text}
    </button>
  )
}

export default RoundedButton

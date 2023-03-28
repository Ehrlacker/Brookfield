
import './RoundedButton.css'


type button={
    text: string;
}

const RoundedButton = ({text}:button) => {
  return (
   <button className="RoundedButton">{text}</button>
  )
}

export default RoundedButton
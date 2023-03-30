

import './RectangleButton.css'


type button={
    name:string;
    clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void,
}

const Rectanglebutton = ({name, clickHandler}:button) => {
  return (
    <button className="Rectanglebutton" onClick={clickHandler} >{name}</button>
  )
}

export default Rectanglebutton
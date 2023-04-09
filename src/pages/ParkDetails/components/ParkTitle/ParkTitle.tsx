

import './ParkTitle.css'

type title={
    name:string;
}


const ParkTitle = ({name}:title) => {
  return (
    <div className="ParkTitle">{name}</div>
  )
}

export default ParkTitle



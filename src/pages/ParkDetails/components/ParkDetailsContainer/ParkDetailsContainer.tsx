
import ParkDescription from 'pages/ParkDetails/components/ParkDescription/ParkDescription'
import './ParkDetailsContiner.css'

type parkDescription ={
description: string;
parkName: string
}

const ParkDetailsContainer = ({description, parkName}:parkDescription) => {
  return (
    <div className="ParkDetailsContainer">
      <ParkDescription description={description} parkName={parkName}/>
    </div>
  )
}

export default ParkDetailsContainer
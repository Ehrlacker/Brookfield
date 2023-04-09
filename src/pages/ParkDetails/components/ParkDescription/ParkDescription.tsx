import ParkTitle from "pages/ParkDetails/components/ParkTitle/ParkTitle"
import "./ParkDescription.css"

type parkDescrition = {
  description: string
  parkName: string
}

const ParkDescription = ({ description, parkName }: parkDescrition) => {
  return (
    <div className="ParkDescription">
      <ParkTitle name={parkName} />
      <h1 className="DescriptionH1">Description</h1>
      <p className="DescrptionP">{description}</p>
    </div>
  )
}

export default ParkDescription

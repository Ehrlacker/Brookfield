import './TripPlans.css'
import { ReactNode } from 'react'


type plan = {
  activityType: string
  Name: string
  Address: string
  cityStateZipcode: string
  key: string
  id: string,
  button: ReactNode
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const TripPlans = ({ Name, Address, cityStateZipcode, activityType, id, button, clickHandler }: plan) => {
  return (
    <div key={id} className="TripPlans">
      <p className="TripPlansType">{activityType}</p>
      <p className="TripPlansParagraph">{Name}</p>
      <p className="TripPlansParagraph">{Address}</p>
      <p className="TripPlansParagraph">{cityStateZipcode}</p>
      <button className="TripPlansButton" onClick={clickHandler}>{button}</button>
    </div>
  )
}

export default TripPlans

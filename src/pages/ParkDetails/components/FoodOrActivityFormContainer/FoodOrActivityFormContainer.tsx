import { useState, ChangeEvent, MouseEvent, useContext } from "react"
import FoodOrActivityForm from "pages/ParkDetails/components/FoodOrActivityForm/FoodOrActivityForm"
import "./FoodOrActivityFormContainer.css"
import FoodOrActivityExplanation from "pages/ParkDetails/components/FoodOrActivityExplanation/FoodOrActivityExplanation"
import RoundedButton from "components/common/RoundedButton/RoundedButton"
import { TripPlansContext } from "contexts/TripPlansProvider"
import { v4 as uuidV4 } from 'uuid';

export type inputPropValues = {
  activityType: string
  Name: string
  Address: string
  cityStateZipcode: string
  id: string
}

const FoodOrActivityFormContainer = () => {
  const { activities, setActivities } = useContext(TripPlansContext)
  const [inputValues, setInputValues] = useState<inputPropValues>({
    activityType: "",
    Name: "",
    Address: "",
    cityStateZipcode: "",
    id: ""
  })

  const handleRegister = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setInputValues((prevValue) => {
      return { ...prevValue, [id]: value }
    })
  }

  const submitActivity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (inputValues.activityType.length === 0) {
      return
    } else if (inputValues.activityType !== "food"  && inputValues.activityType !== "activity") {
      return
    } else if (inputValues.Name.length === 0) {
      return
    } else if (inputValues.Address.length === 0) {
      return
    } else if (inputValues.cityStateZipcode.length === 0) {
      return
    } else {
      inputValues.id=uuidV4()
      const newActivityList = [...activities, inputValues]
      setActivities(newActivityList)


      setInputValues({
        activityType: "",
        Name: "",
        Address: "",
        cityStateZipcode: "",
        id: ""
      })
      console.log(activities)
    }
  }

  return (
    <div className="FoodOrActivityFormContainer">
      <h1 className="FoodOrActivityFormContainerTitle">Add Plans</h1>
      <div className="FormExplanationContainer">
        <form className="FormContainer">
          <FoodOrActivityForm
            labelType="Type"
            placeholder="food or activity"
            id="activityType"
            inputType="text"
            value={inputValues.activityType}
            onChange={handleRegister}
          />
          <FoodOrActivityForm
            labelType="Name"
            placeholder="name"
            id="Name"
            inputType="text"
            value={inputValues.Name}
            onChange={handleRegister}
          />
          <FoodOrActivityForm
            labelType="Address"
            placeholder="address"
            id="Address"
            inputType="text"
            value={inputValues.Address}
            onChange={handleRegister}
          />
          <FoodOrActivityForm
            labelType="Location"
            placeholder="city, state, zipcode"
            id="cityStateZipcode"
            inputType="text"
            value={inputValues.cityStateZipcode}
            onChange={handleRegister}
          />
          <RoundedButton text="save" clickHandler={submitActivity} />
        </form>
        <FoodOrActivityExplanation />
      </div>
    </div>
  )
}

export default FoodOrActivityFormContainer

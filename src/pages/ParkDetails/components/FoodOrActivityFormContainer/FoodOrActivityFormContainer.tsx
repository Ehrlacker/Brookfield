import { useState, ChangeEvent } from "react"

import FoodOrActivityForm from "pages/ParkDetails/components/FoodOrActivityForm/FoodOrActivityForm"
import './FoodOrActivityFormContainer.css'

import FoodOrActivityExplanation from 'pages/ParkDetails/components/FoodOrActivityExplanation/FoodOrActivityExplanation'
import RoundedButton from 'components/common/RoundedButton/RoundedButton'
type inputPropValues = {
  activityType: string
  Name: string
  Address: string
  cityStateZipcode: string
}

const FoodOrActivityFormContainer = () => {
  const [inputValues, setInputValues] = useState<inputPropValues>({
    activityType: "",
    Name: "",
    Address: "",
    cityStateZipcode: "",
  })

  const handleRegister = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setInputValues((prevValue) => {
      return { ...prevValue, [id]: value }
    })
  }

  const submitActivity = async() =>{

  }

  return (
      <div className="FoodOrActivityFormContainer">
    <h1 className="FoodOrActivityFormContainerTitle">Trip Plans</h1>
    <div className="FormExplanationContainer">
    <form className="FormContainer">
      <FoodOrActivityForm
        labelType="Type"
        placeholder="Food or Entertainment"
        id="activityType"
        inputType="text"
        value={inputValues.activityType}
        onChange={handleRegister}
      />
      <FoodOrActivityForm
        labelType="Name"
        placeholder="Name"
        id="Name"
        inputType="text"
        value={inputValues.Name}
        onChange={handleRegister}
      />
      <FoodOrActivityForm
        labelType="Address"
        placeholder="Address"
        id="Address"
        inputType="text"
        value={inputValues.Address}
        onChange={handleRegister}
      />
      <FoodOrActivityForm
        labelType="Location"
        placeholder="City, State, Zipcode"
        id="cityStateZipcode"
        inputType="text"
        value={inputValues.cityStateZipcode}
        onChange={handleRegister}
      />
      <RoundedButton text="save" clickHandler={()=>{console.log("yes")}} />
    </form>
    <FoodOrActivityExplanation />
    </div>
    </div>
  )
}

export default FoodOrActivityFormContainer

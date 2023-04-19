


import { useState, createContext } from "react"
// import { inputPropValues } from "types/types"

export type inputPropValues = {
    activityType: string
    Name: string
    Address: string
    cityStateZipcode: string
    id: string
  }


type TripPlansContextProviderprops = {
  children: React.ReactNode
}

type parkState = {
  activities: inputPropValues[]
  setActivities: (activities: inputPropValues[]) => void
}

export const TripPlansContext = createContext<parkState>({
    activities: [],
  setActivities: () => {},
})

const TripPlansProvider = ({ children }: TripPlansContextProviderprops) => {
  const [activities, setActivities] = useState<inputPropValues[]>([])
  return (
    <TripPlansContext.Provider value={{ activities, setActivities }}>
      {children}
    </TripPlansContext.Provider>
  )
}

export default TripPlansProvider
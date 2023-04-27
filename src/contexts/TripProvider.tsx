import { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from 'hooks/UseLocalStorage'
import {Datum } from 'types/types'
import { inputPropValues } from "types/types"



type trip = {
  park: Datum[]
  activities: inputPropValues[]
  id: string
}

type TripContextProviderprops = {
  children: React.ReactNode
}

type TripState = {
  trip: trip[]
  setTrip: (trip: trip[]) => void
}

export const TripContext = createContext<TripState>({
    trip: [],
  setTrip: () => {},
})

const TripProvider = ({ children }: TripContextProviderprops) => {
  const [trip, setTrip] = useLocalStorage<trip[]>("trip",[])
  return (
    <TripContext.Provider value={{ trip, setTrip }}>
      {children}
    </TripContext.Provider>
  )
}





export default TripProvider


import { createContext } from "react"
import useLocalStorage from 'hooks/UseLocalStorage'

type TripContextProviderprops = {
  children: React.ReactNode
}

type TripState = {
  trip: any[]
  setTrip: (trip: any[]) => void
}

export const TripContext = createContext<TripState>({
    trip: [],
  setTrip: () => {},
})

const TripProvider = ({ children }: TripContextProviderprops) => {
  const [trip, setTrip] = useLocalStorage<any[]>("trip",[])
  return (
    <TripContext.Provider value={{ trip, setTrip }}>
      {children}
    </TripContext.Provider>
  )
}

export default TripProvider
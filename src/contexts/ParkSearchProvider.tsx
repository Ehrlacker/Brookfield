
import { useState, createContext } from "react"
import { Datum } from "types/types"



type ParkSearchContextProviderprops ={
  children: React.ReactNode
}

type parkState ={
  parks: Datum[],
  setParks: (parks: Datum[]) => void;
}


export const ParkSearchContext = createContext<parkState>({
  parks: [],
  setParks : () => {},
})

const ParkSearchProvider = ({children}:ParkSearchContextProviderprops) => {

  const [parks, setParks] = useState<Datum[]>([])
  return (
    <ParkSearchContext.Provider value={{parks, setParks}}>
      {children}
    </ParkSearchContext.Provider> 
  
  )
}

export default ParkSearchProvider
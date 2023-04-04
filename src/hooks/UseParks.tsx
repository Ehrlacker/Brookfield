import { useEffect, useState } from "react"
import { ParkSearchContext } from "contexts/ParkSearchProvider"

const useParks = async (searchQuery: string) => {
//   const [parks, setParks] = useState(ParkSearchContext)

//   useEffect(() => {
//     const getParks = async () => {
//       const url = `https://developer.nps.gov/api/v1/parks?api_key=FcBVNSTUhHmVDsktfx7MkAgtGyTTnEqpCxMfaU8M&stateCode=${searchQuery}`
//       const response = await fetch(url)
//       const resJSON = await response.json()
//       const data = resJSON.data
//       console.log(data)
//       setParks(data)
//       console.log(parks)
//     }
//     getParks()
//   }, [searchQuery])

//     return data
// }


          const url = `https://developer.nps.gov/api/v1/parks?api_key=FcBVNSTUhHmVDsktfx7MkAgtGyTTnEqpCxMfaU8M&stateCode=${searchQuery}`
          const response = await fetch(url)
          const resJSON = await response.json()
          const data = resJSON.data
        //   setParks(data)
          return data
}



export default useParks

// import { useState, createContext } from "react"

// type SearchQueryContextProviderprops = {
//   children: React.ReactNode
// }



// type searchQueryState = {
//   parkSearchQuery: string
//   setParkSearchQuery: (parks: string) => void
// }

// export const searchQueryContext = createContext<searchQueryState>({
//   parkSearchQuery: "",
//   setParkSearchQuery: () => {},
// })



// const SearchQueryProvider = ({children}:SearchQueryContextProviderprops) => {
//     const [parkSearchQuery, setParkSearchQuery] = useState<searchQueryState>()
//   return(
//     <searchQueryContext.Provider value={{ parkSearchQuery, setParkSearchQuery }}>
//     {children}
//   </searchQueryContext.Provider>
//   )}

// export default SearchQueryProvider


import React from 'react'

const SearchQueryProvider = () => {
  return (
    <div>SearchQueryProvider</div>
  )
}

export default SearchQueryProvider

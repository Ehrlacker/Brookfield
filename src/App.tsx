import "./App.css"

import { Routes, Route } from "react-router-dom"

import Nav from "components/common/Nav/Nav"
import Footer from "components/common/Footer/Footer"

import Home from "pages/Home/Home"
import ParkSearch from "pages/ParkSearch/ParkSearch"
import ParkDetails from 'pages/ParkDetails/ParkDetailsPage/ParkDetails'

import ParkSearchProvider from "contexts/ParkSearchProvider"
import TripPlansProvider from 'contexts/TripPlansProvider'

const App = () => {
  return (
    <div className="App">
      <Nav />

      <TripPlansProvider>
      <ParkSearchProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parks" element={<ParkSearch />} />
          <Route path="/parks/:id" element={<ParkDetails />} />
        </Routes>
      </ParkSearchProvider>
      </TripPlansProvider>
      <Footer />
    </div>
  )
}

export default App

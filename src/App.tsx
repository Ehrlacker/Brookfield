import "./App.css"

import { Routes, Route } from "react-router-dom"

import Nav from "components/common/Nav/Nav"
import Footer from "components/common/Footer/Footer"

import Home from "pages/Home/Home"
import ParkSearch from "pages/ParkSearch/ParkSearch"
import ParkDetails from 'pages/ParkDetails/ParkDetails'

import NumberParkSearchProviderProvider from "contexts/ParkSearchProvider"

const App = () => {
  return (
    <div className="App">
      <Nav />
      <NumberParkSearchProviderProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parks" element={<ParkSearch />} />
          <Route path="/parks/:id" element={<ParkDetails />} />
        </Routes>
      </NumberParkSearchProviderProvider>
      <Footer />
    </div>
  )
}

export default App

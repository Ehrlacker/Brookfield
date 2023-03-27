import "./App.css"

import { Routes, Route } from "react-router-dom"

import Nav from "components/common/Nav/Nav"

import Home from "pages/Home/Home"

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

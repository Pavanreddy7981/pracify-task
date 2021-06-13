import React from 'react'
import "./App.css"
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import MiddleSection from './Components/MiddleSection'
import Presenters from './Components/Presenters'
import Welcome from './Components/Welcome'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Welcome />
      <Presenters />
      <MiddleSection />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import Header from './components/header'
import Heroic from './components/heroic'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='bg-gradient-to-t from-yellow-200 to-white'>
      <Header/> 
      <Heroic/>
      <Footer/>
    </div>
  )
}

export default App

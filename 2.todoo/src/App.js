import React from 'react'
import Header from './components/Header'
import MyButton from './components/MyButton'


function App() {
  return (
    <>
    <div className="bg-dark p-2 mb-2">
      <Header/>
    </div>
    <div>
      <MyButton/>   
    </div>
    </>
  )
}

export default App
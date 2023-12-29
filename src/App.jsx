import React from 'react'
import Navigationbar from './components/Navigationbar'
import {Route,Routes,} from "react-router-dom";


function App() {
  return (
    <>
    <Navigationbar/>
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/blog/*" element={<BlogApp />} /> */}
        {/* <Route path="/users/*" element={<UserApp />} /> */}
      </Routes>
    </>
  )
}

export default App
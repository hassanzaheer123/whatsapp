import React from 'react'
import "./darkmode.js"
import "./style.css"
import LeftSide from './LeftSide.jsx'
import RightSide from './RightSide.jsx'
function Homepage() {
  return (
    <>
    
      <section className="a1-row container">
       <LeftSide  />
        <RightSide  />
      </section>
   

    </>
  )
}

export default Homepage

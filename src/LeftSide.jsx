import React from 'react'
import ChatFeatures from './ChatFeatures'
import SearchBar from './SearchBar'
import ChatsList from './ChatsList'

function LeftSide() {
  return (
    <>
     <aside className="a1-column aside">
          <ChatFeatures  />
          <SearchBar  />
          <ChatsList />
    </aside>
    </>
  )
}

export default LeftSide

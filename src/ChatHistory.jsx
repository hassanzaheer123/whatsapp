import React from 'react'
import ChatMessages from './ChatMessages'
import WriteMessage from './WriteMessage'

function ChatHistory() {
  return (
    <>
    <div className="a1-column a1-long a1-elastic">
           <ChatMessages />
            <WriteMessage />
          </div>
    </>
  )
}

export default ChatHistory

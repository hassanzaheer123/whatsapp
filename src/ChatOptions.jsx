import React from 'react'

function ChatOptions() {
  return (
    <>
    <div className="a1-row a1-center-items-v a1-justify-items a1-half-padding-tb a1-padding-lr bg-left-panel-header a1-spaced-items">
            <div className="a1-row a1-center-items-v a1-spaced-items">
              <i className="fas fa-chevron-left blue back-arrow" onclick="goTo()" />
              <img src="https://i.ibb.co/fnBBPZp/old-man.jpg" className="profile-pic" alt="Profile Picture" />
              <span>My Old Man</span>
            </div>
            <div className="a1-row a1-spaced-items a1-center-items-v icon-color">
              <i className="fas fa-search" />
              <i className="fas fa-paperclip" />
              <i className="fas fa-ellipsis-v" />
            </div>
          </div>
    </>
  )
}

export default ChatOptions

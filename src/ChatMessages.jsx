import React from 'react'

function ChatMessages() {
  return (
    <>
     <div className="chat-container a1-column a1-long a1-elastic chat-main a1-spaced-items">
              <div className="text text-recieved">
                <p>Hey son!</p>
                <span className="timestamp a1-row a1-end">19:12</span>
              </div>
              <div className="text text-recieved">
                <p>Where are you?</p>
                <span className="timestamp a1-row a1-end">19:12</span>
              </div>
              <div className="text text-sent">
                <p>On my way dad</p>
                <div className="a1-row a1-end a1-half-spaced-items timestamp">
                  <span>19:13</span>
                  <i className="fas fa-check-double blue" />
                </div>
              </div>
              <div className="text text-recieved">
                <p>Great, I'm making burgers today 🍔🍔🍔</p>
                <span className="timestamp a1-row a1-end">19:13</span>
              </div>
              <div className="text text-sent">
                <p>That sounds good 🤤🤤</p>
                <div className="a1-row a1-end a1-half-spaced-items timestamp">
                  <span>19:13</span>
                  <i className="fas fa-check-double blue" />
                </div>                    
              </div>
              <div className="text text-recieved">
                <p>By the way, how's your project going?</p>
                <span className="timestamp a1-row a1-end">19:24</span>
              </div>
              <div className="text text-sent">
                <p>Recreating WhatsApp Web or LogiNow?</p>
                <div className="a1-row a1-end a1-half-spaced-items timestamp">
                  <span>19:13</span>
                  <i className="fas fa-check-double blue" />
                </div>
              </div>
              <div className="text text-recieved">
                <p>Both!</p>
                <span className="timestamp a1-row a1-end">19:18</span>
              </div>
              <div className="text text-sent">
                <p>Both are going very well, LogiNow still needs some fixes and minor changes but I hope it will be ready for publish soon!</p>
                <div className="a1-row a1-end a1-half-spaced-items timestamp">
                  <span>19:13</span>
                  <i className="fas fa-check-double blue" />
                </div>
              </div>
              <div className="text text-recieved">
                <p>Amazing, keep up the good work</p>
                <span className="timestamp a1-row a1-end">19:25</span>
              </div>
              <div className="text text-sent">
                <p>Thanks Dad</p>
                <div className="a1-row a1-end a1-half-spaced-items timestamp">
                  <span>19:13</span>
                  <i className="fas fa-check-double blue" />
                </div>
              </div>
            </div>
    </>
  )
}

export default ChatMessages
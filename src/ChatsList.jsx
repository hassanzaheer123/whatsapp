import React from 'react'

function ChatsList() {
  return (
<>
<div className="a1-column a1-long a1-elastic friends-panel">
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend active" onclick="goTo()">
              <img src="https://i.ibb.co/fnBBPZp/old-man.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">My Old Man</span>
                  <span className="timestamp">yesterday</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">
                    <i className="fas fa-check-double blue" />
                    <span>Thanks Dad</span>
                  </span>
                  <div className="a1-row a1-center-items-v a1-half-spaced-items">
                    <div className="a1-row a1-center-items-h a1-center-items-v pin-wrap">
                      <i className="fas fa-map-pin" />
                    </div>
                    <i className="fas fa-chevron-down icon-color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/GnwGL2s/mom.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Mom</span>
                  <span className="timestamp">Tuesday</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">Don't be late for dinner</span>
                  <div className="a1-row a1-center-items-v a1-half-spaced-items">
                    <div className="a1-row a1-center-items-h a1-center-items-v pin-wrap">
                      <i className="fas fa-map-pin" />
                    </div>
                    <i className="fas fa-chevron-down icon-color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/0nvDvbw/noam.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Noam</span>
                  <span className="timestamp">23:44</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">K, I'm waiting</span>
                  <div className="a1-row a1-center-items-v a1-half-spaced-items">
                    <span className="a1-row a1-center-items-h a1-center-items-v notification">3</span>
                    <i className="fas fa-chevron-down icon-color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/1Tw1wbP/efraim.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Efraim</span>
                  <span className="timestamp">23:34</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">Let's play Tennis on Sunday</span>
                  <i className="fas fa-chevron-down icon-color" />
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/7k5qtCf/amazia.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Amazia</span>
                  <span className="timestamp">13:34</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">Fill the cats water bowl!!!</span>
                  <i className="fas fa-chevron-down icon-color" />
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/FmbW3FW/Dor.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Dangerous Dor</span>
                  <span className="timestamp">10:10</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">Stop the violence</span>
                  <i className="fas fa-chevron-down icon-color" />
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/SrLz4HW/regin.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Regin</span>
                  <span className="timestamp">09:20</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">Listen to this song, I think you'll like it</span>
                  <i className="fas fa-chevron-down icon-color" />
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/LrV65PF/papito.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Papito</span>
                  <span className="timestamp">Wednesday</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">Wanna play COD?</span>
                  <i className="fas fa-chevron-down icon-color" />
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/qW20JG6/Eitan.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Eitan</span>
                  <span className="timestamp">Tuesday</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">Where you at?</span>
                  <i className="fas fa-chevron-down icon-color" />
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/RCTT9WH/family.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Family</span>
                  <span className="timestamp">Tuesday</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">Mom: Dinner is ready</span>
                  <i className="fas fa-chevron-down icon-color" />
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/fpcsndw/yuval.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Yuval</span>
                  <span className="timestamp">Monday</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">You're home?</span>
                  <i className="fas fa-chevron-down icon-color" />
                </div>
              </div>
            </div>
            <div className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
              <img src="https://i.ibb.co/tbxVByg/Tamir.jpg" className="profile-pic side-friend-profile-pic" alt="Profile Picture" />
              <div className="a1-column a1-long a1-elastic">
                <div className="a1-row a1-long a1-elastic">
                  <span className="a1-long a1-elastic">Tamir</span>
                  <span className="timestamp">Saturday</span>
                </div>
                <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                  <span className="message-preview">Man United vs Liverpool today</span>
                  <i className="fas fa-chevron-down icon-color" />
                </div>
              </div>
            </div>
          </div>
</>
  )
}

export default ChatsList

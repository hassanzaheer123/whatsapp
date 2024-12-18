import React from 'react';

function ChatFeatures() {
  return (
    <div className="a1-row a1-center-items-v a1-justify-items a1-half-padding-tb a1-padding-lr bg-left-panel-header a1-spaced-items border-r">
      <h2>Chats</h2>
      <div className="a1-row a1-spaced-items a1-center-items-v icon-color">
      <i
          onClick={() => {
            console.log("Toggle dark mode clicked!");
            document.body.classList.toggle("dark-mode");
          }}
          className="fas fa-adjust darkmodebutton"
        />

        <i className="fas fa-circle-notch" />
        <i className="fas fa-comment-alt" />
        <i className="fas fa-ellipsis-v" />
      </div>
    </div>
  );
}

export default ChatFeatures;



function scrollBottom(element) {
    element.scrollTop = element.scrollHeight;
  }
  
  function toggle() {
    document.body.classList.toggle("dark-mode");
  }
  
  function goTo() {           document.querySelector(".main").classList.toggle("open-message");
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    const chatContainer = document.querySelector(".chat-main");
    if (chatContainer) {
      scrollBottom(chatContainer);
    }
  });
  // document.body.classList.toggle("dark-mode");


const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector("#send-btn");
const chatbox = document.querySelector(".chatbox");
const chatToggler = document.querySelector(".chat-toggler");
const chatBotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  const chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;

  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const generateResponse = (incomingChatLi) => {
  const messageElement = incomingChatLi.querySelector("p");

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: userMessage,
    }),
  };

  return fetch("http://localhost:3000/chatbot", requestOptions)
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      messageElement.textContent = data.reply; 
    })
    .catch((error) => {
      console.error("Error:", error);
      messageElement.textContent =
        "Xin lỗi! Dường như đã có một vài sự cố. Vui lòng thử lại sau!";
    })
    .finally(() => {
      chatbox.scrollTo(0, chatbox.scrollHeight); 
    });
};


const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const incomingChatLi = createChatLi("...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi); 
  }, 500);
};

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});
chatInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault(); // Ngăn xuống dòng
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);

chatToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
chatBotCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);

// Tự động mở chatbot sau 3 giây
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("show-chatbot");
  }, 3500);
});
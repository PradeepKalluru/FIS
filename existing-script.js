document.addEventListener("DOMContentLoaded", function() {
    var chatbotContainer = document.getElementById("chatbot-container");
    var chatIcon = document.getElementById("chatbot-icon");
    var userInput = document.getElementById("user-input");
    var sendButton = document.getElementById("send-button");
    var chatMessages = document.getElementById("chat-messages");

    function appendMessage(message, sender) {
        var messageDiv = document.createElement("div");
        messageDiv.className = sender === "user" ? "user-message" : "bot-message";
        messageDiv.innerText = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
    }

    function showChatbot() {
        chatbotContainer.style.display = "block";
    }

    function hideChatbot() {
        chatbotContainer.style.display = "none";
    }

    sendButton.addEventListener("click", function() {
        var message = userInput.value.trim();
        if (message !== "") {
            appendMessage("You: " + message, "user");
            userInput.value = ""; // Clear input field

            // Send message to chatbot backend and handle response
            // This part will depend on your backend implementation
        }
    });

    // Example of receiving a response from the chatbot backend
    function receiveMessageFromBackend(response) {
        appendMessage("ChatBot: " + response, "bot");
    }

    // Example function to simulate receiving a message from the backend
    function simulateBackendResponse() {
        var responses = ["Hello!", "How can I help you?", "Nice to meet you!"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        receiveMessageFromBackend(randomResponse);
    }

    // Simulate receiving a message from the backend after a delay
    setTimeout(simulateBackendResponse, 1000);

    // Event listener for chat icon button click
    chatIcon.addEventListener("click", function() {
        showChatbot();
    });

   
    document.addEventListener("click", function(event) {
        if (!chatbotContainer.contains(event.target) && event.target !== chatIcon) {
           hideChatbot();
        }
    });
});

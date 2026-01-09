// Toggle Chat Window
function toggleChat() {
    const body = document.getElementById('chatBody');
    const input = document.querySelector('.chat-input-area');
    const icon = document.getElementById('chatIcon');

    if (body.style.display === "none" || body.style.display === "") {
        body.style.display = "block";
        input.style.display = "flex";
        icon.classList.replace("fa-chevron-up", "fa-chevron-down");
    } else {
        body.style.display = "none";
        input.style.display = "none";
        icon.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
}

// Simple Chat Logic
function sendMessage() {
    const input = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    const message = input.value.trim().toLowerCase();

    if (message === "") return;

    // Display User Message
    chatBody.innerHTML += `<div class="user-msg">${input.value}</div>`;
    input.value = "";

    // Bot Response Logic
    setTimeout(() => {
        let response = "";

        if (message.includes("price") || message.includes("cost")) {
            response = "Our photoshoots start at $150 per hour.";
        } else if (message.includes("location")) {
            response = "We are based in New York, but we travel worldwide!";
        } else if (message.includes("book")) {
            response = "You can book via the contact form or email us at hello@lenslight.com";
        } else {
            response = "I will get back to you soon! Our team has been notified.";
        }

        chatBody.innerHTML += `<div class="bot-msg">${response}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

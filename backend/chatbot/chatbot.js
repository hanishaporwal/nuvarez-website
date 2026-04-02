function getBotResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hi! How can I help you today?";
  }

  if (msg.includes("services")) {
    return "We offer web development, data analytics, and AI solutions.";
  }

  if (msg.includes("contact")) {
    return "You can contact us via the contact form on our website.";
  }

  return "Sorry, I didn’t understand that. Can you rephrase?";
}

module.exports = { getBotResponse };
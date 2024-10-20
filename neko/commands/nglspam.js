const axios = require("axios");

module.exports = {
  name: "nglspam",
  description: "Spam a message to an NGL profile",
  async run({ api, event, send, args }) {
    // Check if enough arguments are provided
    if (args.length < 3) {
      return send("Please provide a valid username, message, and amount. Example usage: nglspam <username> <message> <amount>");
    }

    // Extract the arguments: username, message, and amount
    const username = args[0];
    const amount = parseInt(args[args.length - 1]); // Convert amount to a number
    const message = args.slice(1, -1).join(" "); // The message is everything between username and amount

    // Ensure the amount is a number and within the limit
    if (isNaN(amount) || amount <= 0 || amount > 100) {
      return send("Please provide a valid number for the amount between 1 and 100.");
    }

    try {
      // Make API request to NGL spam endpoint
      const apiUrl = `https://nglspammer-kjpg.onrender.com/ngl?u=${encodeURIComponent(username)}&m=${encodeURIComponent(message)}&a=${amount}`;
      const response = await axios.get(apiUrl);

      // Extract data from the response
      const { status, message: resultMessage, success } = response.data.result;

      // Send a formatted response back to the user
      if (status === "success") {
        const replyMessage = `Successful NGL spam to ${username} ${success} out of ${amount} times.`;
        send(replyMessage);
      } else {
        send("An error occurred with the spam request. Please try again.");
      }
    } catch (error) {
      console.error("Error calling NGL Spam API:", error);
      send("Failed to spam. An error occurred.");
    }
  }
};

# Getting Started with Chat-bot React App

This is a simple chat interface built with React.js, which allows users to send and receive messages. It also includes a bonus feature of an auto-reply bot that responds with a predefined message after a short delay.

Features
. Chat Window: Displays sent and received messages.
. Message Input Box: Allows users to type and send messages.
. Send Button: Sends the typed message and adds it to the chat history.
. Auto-reply Bot: Responds with a predefined message after a short delay.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Approach
1. State Management
. useState: We use React's useState hook to manage two pieces of state:
. messages: Holds all the messages (user and bot).
. newMessage: Holds the current message that the user is typing in the input box.

2. Message Sending
When the user clicks the "Send" button, the sendMessage() function adds the user's message to the messages state, and clears the input field.

3. Auto-reply Bot
After sending the message, a setTimeout function is triggered to simulate an auto-reply from the bot. The bot's response is added to the messages state after a short delay (1 second in this case).

4. Component Structure
The Chat component is responsible for:
. Displaying the messages.
. Handling user input.
. Sending messages and triggering the bot's auto-reply.
. The App component renders the Chat component inside the main application layout.

5. Styling
Basic inline styling is used to create a clean and user-friendly interface, including:
. A scrollable chat window for displaying messages.
. A message input box where users can type their messages.
. A send button that triggers message sending.

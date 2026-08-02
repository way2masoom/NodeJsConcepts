// Import the Telegram Bot API library
const { TelegramBot } = require('node-telegram-bot-api');
// Import the dotenv library to load environment variables from a .env file
const dotevn = require('dotenv')
const axios = require('axios');

// Load environment variables from .env file
dotevn.config(); // Load environment variables from .env file

// Create a new instance of the TelegramBot class with the bot token and enable polling
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// Listen for incoming messages and respond with a greeting message
// bot.on('message', (option) => {
//     console.log("message received on bot", option);

//     bot.sendMessage(option.chat.id, "Hello i am JokeBot, I can tell you jokes. Type /joke to get a random joke.");

// })

// Listen for the /joke command and respond with a random joke
bot.onText(/\/joke/, async (option) => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    console.log(response.data);

    const setup = response.data.setup;
    const punchline = response.data.punchline;
    // bot.sendMessage(option.chat.id, `${setup} - ${punchline}`);
    bot.sendMessage(option.chat.id, setup + " - " + punchline);
}); 

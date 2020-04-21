require('dotenv').config();

const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('This bot is running!');
})

bot.on('message', message => {
    let args = message.content.substring(process.env.PREFIX.length).split(" ");

    switch(args[0]){
        case 'sheet':
            message.reply(process.env.SHEET);
        break;
        case 'form':
            message.reply(process.env.FORM);
        break;
    }
})

bot.login(process.env.TOKEN);

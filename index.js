require('dotenv').config();

const Discord = require('discord.js');

const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is running!');
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'sheet':
            message.reply(process.env.SHEET);
        break;
        case 'form':
            message.reply(process.env.FORM);
        break;
        case 'help':
            message.reply("Below are the available commands \n!sheet will send a link to the civ 6 spreadsheet \n!form will send a link to the form");
        break;
    }
})

bot.login(process.env.TOKEN);

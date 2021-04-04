const Discord = require('discord.js')

const client = new Discord.Client()

 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NzQ2NTAwMTIwNjA2MTQ2NjYw.X0BOag.ZZvN5fYF3O_aeKQcYCtYm_aGgI4')
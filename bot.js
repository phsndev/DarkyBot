const Discord = require('discord.js')

const client = new Discord.Client()

const token = 'NzQ2NTAwMTIwNjA2MTQ2NjYw.X0BOag.ZZvN5fYF3O_aeKQcYCtYm_aGgI4';
 
//const Keyv = require('keyv');

//const keyv = new Keyv('mysql://user:pass@localhost:3306/dbname');

//keyv.on('error', err => console.error('Keyv connection error:', err));

//database.connect();

//client.on('ready', () => {
  //console.log(`Logged in as ${client.user.tag}!`);
//});


client.on('message', message => {
  if (message.content === '!darky' || message.content === '!help') {
    message.reply('\n Type !LFP-Create to set up a party;\n Type !LFP-Join to look for a party.')
  }
  if (message.content === '!LFP-Create'){
  	let guild = message.guild;
    const ServerInfo = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Server infomation on ${guild.name}`)
    .setDescription(`Command executed by ${message.author.tag}`)
    .addFields(
        { name: 'Members', value: `${guild.memberCount}` },
        { name: 'Region', value: `${guild.region}` },
        { name: 'Owner', value: `${guild.owner.tag}`, inline: true },
        { name: 'Created', value: `${guild.createdAt}`, inline: true },
    )
  	try {
		var nameRole = message.author.username + "'s Party";
		const color_code = Math.floor(Math.random() * 100);  
		guild.roles.create({
			data:{
				name: nameRole,
				color: color_code,
			},
			reason: 'partay',
		}).then((role) => user.roles.add(role)).catch(console.error);
	} catch (error){
		console.log(error);
	}
  }
});


    


client.login(token)
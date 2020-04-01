const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
const token = procces.env.TOKEN;
http.createServer().listen(port);

client.once('ready', () => {
	// bericht van console dat de bot aan staat
	console.log('Ready!');
	// members chart
	let myGuild = client.guilds.cache.get('688777397604188166');
	let memberCount = myGuild.memberCount;
	let memberCountChannel = myGuild.channels.cache.get('694880443258110044');
	memberCountChannel.setName('Leden: ' + memberCount)
	.then(result => console.log(result))
	.catch(error => console.log(error));

client.user.setActivity('Dm Staff voor hulp!')

});

client.on('guildMemberAdd', member => {
	let myGuild = client.guilds.cache.get('688777397604188166');
	let memberCount = myGuild.memberCount;
	let memberCountChannel = myGuild.channels.cache.get('694880443258110044');
	memberCountChannel.setName('Leden: ' + memberCount)
	.then(result => console.log(result))
	.catch(error => console.log(error));
});

client.on('guildMemberRemove', member => {
	let myGuild = client.guilds.cache.get('688777397604188166');
	let memberCount = myGuild.memberCount;
	let memberCountChannel = myGuild.channels.cache.get('694880443258110044');
	memberCountChannel.setName('Leden: ' + memberCount)
	.then(result => console.log(result))
	.catch(error => console.log(error));
});


const prefix = ':'

client.on('message', message => {
if (message.author.bot) return;


	if (message.content === 'hallo') {
		message.channel.send(`Hey, ${message.author.toString()}, leuk dat je er bent!`)
	}

	if (message.content === `!members`){
		message.channel.send(`Total member: ${message.guild.memberCount}`)
	}

	if (message.channel.id === '689456936843739156') {
		if (message.content.startsWith('?inschrijven')) {
	} else if (message.author.id === ('410190380869615619') || message.author.id === ('489117084379381760')) {}
	  else {
		message.delete()
		message.author.send('De Command is niet goed gegaan! Gebruik #📝inschrijven altijd voor de ?inschrijven command!')
	}
}

	if (message.channel.id === '689513084255076572') {
		if (message.content.startsWith('?suggest')) {
} else if (message.author.id === ('410190380869615619') || message.author.id === ('489117084379381760')) {}
   else {
	message.delete()
	message.author.send('De Command is niet goed gegaan! Gebruik #❗suggestions altijd voor de ?suggest command!')
}
}

if (message.channel.id === '689539454800494622') {
	if (message.content.startsWith('?klaag')) {
} else if (message.author.id === ('410190380869615619') || message.author.id === ('489117084379381760')) {}
 else {
	message.delete()
	message.author.send('De Command is niet goed gegaan! Gebruik #❌problemen altijd voor de ?klaag command!')
}
}

if (message.channel.id === '693112640838434910') {
	if (message.content.startsWith('?agree')) {
} else if (message.author.id === ('410190380869615619') || message.author.id === ('489117084379381760')) {}
 	else {
	message.delete()
	message.author.send('De Command is niet goed gegaan! Gebruik #🐣welkom altijd voor de ?agree command!')
}
}

if (message.channel.id === '693128172174311454') {
	if (message.content.startsWith('lf')) {
	} else if (message.author.id === ('410190380869615619') || message.author.id === ('489117084379381760')) {}
	 else {
		message.delete()
		message.channel.send('Deze chat is alleen voor lf-group!').then(msg => msg.delete({timeout:6000}))
		.catch(console.error)
		}
	}


});

client.on('error', err => {
	console.log(err);
});




client.login(token);

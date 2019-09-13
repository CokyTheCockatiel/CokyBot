const Discord = require('discord.js');
const bot = new  Discord.Client();

const token = 'NjE3MDcxMTczMjgwNDY0OTEx.XWmC_A.XiewPyb5jjcj6sJgzWRcbE_Ulzw';

const PREFIX = '~';

bot.on('ready', () =>{
    console.log('script updated');
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel.name === "joined");

    message.channel.send(`Guys! someone has joined, a new friend, *or enemy* , you may now read the rules please`)


});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'hi!':
            message.reply('howdy!');
            break;
        case 'FLyt':
            message.channel.sendMessage('https://youtube.com') 
            break;
        case 'FLrblx':
            message.channel.sendMessage('https://web.roblox.com/home')
            break;
        case 'help':
            message.reply('Need help? Try out this : ~hi! , ~FLyt , ~FLrblx, ~FL , ~ctutorial , ~Snap and ~Hellothere ! (version 0.0.2) ')
            break;
        case 'FL':
            message.reply('FL stands for fast link')
            break;
        case 'Hellothere':
            message.channel.sendMessage(`**general kenobi**`)
            break;
        case 'ctutorial':
            message.reply(`hello,welcome to this server, i see you want to use the tutorial, hopefully ill get this worked on by @coky tomorrow`)
            break;
        case 'Snap':
            if(!message.member.roles.find(r => r.name === "Infinity Gauntlet")) return message.reply('You should get the infinity gauntlet first')
            if(!args[1]) return message.reply('*think about a number first*')
            message.channel.bulkDelete(args[1]);
            break;
        case 'snap':
            if(!message.member.roles.find(r => r.name === "Void Infinity Gauntlet")) return message.channel.sendMessage('you feel power of snaping, nothing happended but you still feel it')
            message.channel.sendMessage('**clank**')
            break;
        

    }

})

bot.login(process.env.token)
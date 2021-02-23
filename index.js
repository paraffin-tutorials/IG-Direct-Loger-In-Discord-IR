const Insta = require('@androz2091/insta.js');
const Discord = require('discord.js');

const { 

    webhook_id, 
    webhook_token 
} = require('./config.json')

const client = new Insta.Client();
const webhookClient = new Discord.WebhookClient(webhook_id, webhook_token);


client.on('connected', () => {
    console.log(`Logged in as ${client.user.username}`);
});
 

client.on('messageCreate', (message) => {
  if (message.author.id === client.user.id) return


  const embed1 = new Discord.MessageEmbed()

  .setDescription(`<:instagram:798775886668103680> **یک نفر برای شما پیامی جدید را در اینستاگرام ارسال کرد** <:instagram:798775886668103680>`)
  .addField("> 📧 نام فرستنده", `> ${message.author.username}`)
  .addField("> 🆔 ایدی فرستنده پیام", `> ${message.author.id}`)
  .addField("> 📄 پیام", `> **${message.content || 'عکس'}**`)
  .setColor('#833AB4')
  .setTimestamp();

  webhookClient.send({
      embeds: [embed1]
  });


    });
 

client.login('Username_IG', 'Password_IG'); 
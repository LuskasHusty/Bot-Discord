// comando de ativação: 

const discord = require("discord.js");
const client = new discord.Client();
client.login("Njk1Mzc4Mjg2NjQ1MDg0MjI0.Xot8BQ.PjrvWsk9wQt8u0SYKe2S1R9AQv4"/*bot token*/);
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const chavesembed = new discord.MessageEmbed() //https://discordjs.guide/popular-topics/embeds.html#embed-preview
	.setColor('#FFFFFF')
  .setTitle('NÃO ESQUECE DAS CHAVES')
    //.attachFiles(['./imagens/chaves.png'])
    //.setImage('attachment://chaves.png');
  .setImage('https://cdn.discordapp.com/attachments/695339029360803941/696130296889868338/chaves.png')	

client.on("ready", () => 
{
  console.log(client.user.tag + "está logado");

});

client.on("message", msg => 
{
    if(msg.author.bot) return;

    if(msg.content.toLowerCase().includes("amorim")){
        msg.channel.send("Amorim lindão, bonito e gostosão");
        //msg.reply("aeio");
    }

    else if(msg.content.toLowerCase() == "-ping"){
      msg.reply("2000 pra vc cuzao");
    }

    else if(msg.content.toLowerCase().includes("chaves")){
      msg.channel.send(chavesembed);
  }

    else if(msg.content.toLowerCase().includes("ibm")){
      msg.channel.send("imb é o caralho \nnem sei escrever o nome dessa porra");
    }

    else if(msg.content.toLowerCase().includes("cabub")){
      msg.channel.send("pseudo dono e melhor veterano");
    }

    else if (msg.content.toLowerCase().includes("poli")){
      msg.channel.send("clb Poli");
    }
    

    if (!msg.guild) return;
    if (msg.content === '/gragas') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (msg.member.voice.channel) {
      const voicechannel = msg.member.voice.channel;
      voicechannel.join().then(connection => 
        {
            const dispatcher = connection.play(
              ytdl("https://www.youtube.com/watch?v=dSsUCZbzmq8", { // pass the url to .ytdl()
                quality: 'highestaudio',
                // download part of the song before playing it
                // helps reduces stuttering
                highWaterMark: 1024 * 1024 * 10
              }));
        }).catch(err => {console.log(err); VoiceChannel.leave();});
      }
     else {
      msg.reply('entra num canal primeiro parsa');
    }}
    //else if(msg.content == "")
    /*seus else if vem aqui*/
});
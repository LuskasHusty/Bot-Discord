// comando de ativação: 

const discord = require("discord.js");
const client = new discord.Client();
client.login("XXXXXXXXXXXXXX"/*bot token*/);
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
var embed = new discord.MessageEmbed();


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
      embed
      .setColor('#FFFFFF')
      .setTitle('NÃO ESQUECE DAS CHAVES')
        //.attachFiles(['./imagens/chaves.png'])
        //.setImage('attachment://chaves.png');
      .setImage('https://cdn.discordapp.com/attachments/695339029360803941/696130296889868338/chaves.png');
      msg.channel.send(embed);
  }

    else if(msg.content.toLowerCase().includes("ibm")){
      msg.channel.send("imb é o caralho \nnem sei escrever o nome dessa porra");
    }

    else if(msg.content.toLowerCase().includes("cabub")){
      msg.channel.send("pseudo dono e melhor veterano");
    }

    else if (msg.content.toLowerCase().includes("idalgo")){
      msg.channel.send("mais conhecido nas boca de fumo por tom moletom");
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

    else if (msg.content === 'ronaldo') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (msg.member.voice.channel) {
        const voicechannel = msg.member.voice.channel;
        voicechannel.join().then(connection => 
          {
              const dispatcher = connection.play(
                ytdl("https://www.youtube.com/watch?v=TFdO7oqkMzI", { // pass the url to .ytdl()
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

      else if (msg.content === 'ratatui') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (msg.member.voice.channel) {
          const voicechannel = msg.member.voice.channel;
          voicechannel.join().then(connection => 
            {
                const dispatcher = connection.play(
                  ytdl("https://www.youtube.com/watch?v=p_hdmt4vpBo", { // pass the url to .ytdl()
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
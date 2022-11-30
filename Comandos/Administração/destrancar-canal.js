const Discord = require("discord.js")
module.exports = {
    name: "destrancar-canal", // Coloque o nome do comando do arquivo
    description: "Canal tracado? desbloqueie ele agora mesmo.",
    type: Discord.ApplicationCommandType.ChatInput,
    
    run: async(client, interaction) => {
        if (!interaction.member.permissions.has("ManageChannels")) {
            interaction.reply(`Você não possui a permissão \`Gerenciar Canais\` para poder uttilizar este comando.`)
        } else {
            let destrancar = new Discord.EmbedBuilder()
            .setTitle("🔓 Canal destrancado !")
            .addFields({name: `Esse canal foi destrancado, agora todos poderão digitar novamente.`, value: `👮‍♂️ Destrancado por: ${interaction.user}`})
            .setColor('ff00ff')
            interaction.reply({embeds: [destrancar]}).then(msg => { 
            interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: true }).catch(e => {
                console.log(e)
            
                msg.edit(`❌ Ops, algo deu errado ao tentar destrancar este chat.`)
            })
        })

            }
        }        
}
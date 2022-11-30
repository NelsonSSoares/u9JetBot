const Discord = require("discord.js")
module.exports = {
    name: "trancar-canal",
    description: "Não quer permitir que todos enviem mensagem? tranque o canal!",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has("MANAGE_CHANNELS")) {
            interaction.reply(`Você não possui a permissão \`Genrenciar Canais\` para poder uttilizar este comando.`)
        } else {
            let embed = new Discord.EmbedBuilder()
                .setTitle("🔒 Canal trancado !")
                .setColor('Random')
                .addFields({name: `Esse canal foi trancado, apenas administradores poderão digitar aqui!`, value: `👮‍♂️ Trancado por: ${interaction.user}`})
                interaction.reply({ embeds: [embed] }).then(msg => {
                interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: false }).catch(e => {
                    console.log(e)
                    interaction.editReply(`❌ Ops, algo deu errado ao tentar trancar este chat.`)
                })
            })
    
                }
            }
    }
    
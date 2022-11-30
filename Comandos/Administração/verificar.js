const Discord = require('discord.js');

module.exports = {
    name: "verificar", // Nome principal do comando.
    description: "Sistema de Verificação", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
            interaction.reply(`Você não possui poermissão para utilizar este comando.`);
        } else {

            let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId("Ver")
                    .setLabel("Verifique-se")
                    .setEmoji('✅')
                    .setStyle(Discord.ButtonStyle.Success),
                // new Discord.ButtonBuilder()
                // .setCustomId("Duvida")
                // .setLabel(`・Dúvida`)
                // .setEmoji('🧠')
                // .setStyle(Discord.ButtonStyle.Danger)      
            )
            let embed = new Discord.EmbedBuilder()
                .setTitle(`Bem-Vindo`)
                .setDescription(`Bem-vindo ao servidor, clique no botão ✅ e verifique-se para ganhar acesso!`)
                .setColor('Green')
                .setThumbnail('https://cdn.discordapp.com/attachments/1032006711483048016/1034118766507864185/IconRole.png')

            interaction.reply({ content: `✅ Mensagem enviada!`, ephemeral: true })
            interaction.channel.send({ embeds: [embed], components: [botao] }).then(() => {

                client.on('interactionCreate', (interaction) => {
                    if (interaction.isButton) {
                        if (interaction.customId === "Ver") {
                            let cargoV = "1029954198890098784"
                            let embedVerificado = new Discord.EmbedBuilder()
                                .setDescription(`**✅ Você foi verificado com o cargo <@&${cargoV}>!**`)
                                .setColor("Green")

                            interaction.reply({ embeds: [embedVerificado], ephemeral: true })
                            interaction.member.roles.add(`${cargoV}`)
                            let EmbedLogV = new Discord.EmbedBuilder()
                                .setTitle(`✅・Um usuário se verificou`)
                                .setThumbnail(client.user.displayAvatarURL())
                                .setColor('Green')
                                .addFields(
                                    {
                                        name: '\`\`\`Usuário\`\`\`',
                                        value: `${interaction.user}`,
                                        inline: false,
                                    },
                                )
                                .setTimestamp()
                            interaction.guild.channels.cache.get('1032266654392000522').send({ embeds: [EmbedLogV] })

                        } else if (interaction.customId === "Duvida") {
                            let embedDuvida1 = new Discord.EmbedBuilder()
                                .setDescription(`**Irmão só clicar no botão ✅**`)
                                .setColor("Red")
                                .setTimestamp()
                            interaction.reply({ content: `✅ Mensagem enviada!`, ephemeral: true })
                            interaction.channel.send({ embeds: [embedDuvida1], ephemeral: true })
                        }
                    }
                });
            })
        }
    }
}
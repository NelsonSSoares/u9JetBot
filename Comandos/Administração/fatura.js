const Discord = require("discord.js")

module.exports = {
    name: "fatura", // Coloque o nome do comando
    description: "Envie o QRCODE ", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "cobrança",
            description: "descrição da fatura.",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageMessages)) {
            interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
        } else {
            let embed_fala = interaction.options.getString("cobrança");
            let normal_fala = interaction.options.getString("normal");

            if (!embed_fala && !normal_fala) {
                interaction.reply(`Escreva pelo menos em uma das opções.`)
            } else {
                if (!embed_fala) embed_fala = "⠀";
                if (!normal_fala) normal_fala = "⠀";

                let embed = new Discord.EmbedBuilder()
                    .setTitle("Fatura JetBOT")
                    .setDescription(embed_fala)
                    .setColor('#13830b')
                    .setImage('https://cdn.discordapp.com/attachments/1027574225663426714/1029909236198674543/unknown.png'); //imagem

                if (embed_fala === "⠀") {
                    interaction.reply({ content: ` Sua mensagem foi enviada!`, ephemeral: true })
                    interaction.channel.send({ content: `${normal_fala}` })
                } else if (normal_fala === "⠀") {
                    interaction.reply({ content: ` Sua mensagem foi enviada!`, ephemeral: true })
                    interaction.channel.send({ embeds: [embed] })
                } else {
                    interaction.reply({ content: ` Sua mensagem foi enviada!`, ephemeral: true })
                    interaction.channel.send({ content: `${normal_fala}`, embeds: [embed] })
                }
            }
        }


    }
}
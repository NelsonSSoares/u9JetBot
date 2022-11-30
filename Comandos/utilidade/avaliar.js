const Discord = require("discord.js")

module.exports = {
    name: "avaliar", // Coloque o nome do comando
    description: "Faça sua avaliação.", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "avaliação",
            description: "Escreva algo.",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    run: async (client, interaction) => {

        let canal = interaction.guild.channels.cache.get("1029952397084213298") // Canal de avaliações do servidor
        if (!canal) {
            interaction.reply(`Olá ${interaction.user}, o canal de avaliações ainda não foi configurado no script!`)
        } else {
            let sugestao = interaction.options.getString("avaliação");
            let embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
                .setTitle("Nova Avaliação!")
                .setDescription(`**Avaliação de ${interaction.user}**:\n${sugestao}`);

            canal.send({ embeds: [embed] }).then(() => {
                interaction.reply({ content: `Olá ${interaction.user}, sua avaliação foi publicada em ${canal} com sucesso.` })
            }).catch(() => {
                interaction.reply({ content: `Ops ${interaction.user}, algo deu errado!` })
            })
        }


    }
}
const Discord = require("discord.js")

module.exports = {
    name: "", // Coloque o nome do comando
    description: "Anuncie algo em uma embed.", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "título",
            description: "Escreva algo.",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "descrição",
            description: "Escreva algo.",
            type: Discord.ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "chat",
            description: "Mencione um canal.",
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],

    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
        } else {
            let titulo = interaction.options.getString("título")
            let desc = interaction.options.getString("descrição")
            let chat = interaction.options.getChannel("chat")
            if (Discord.ChannelType.GuildText !== chat.type) return interaction.reply(`❌ Este canal não é um canal de texto para enviar uma mensagem.`)

            let embed = new Discord.EmbedBuilder()
                .setTitle(titulo)
                .setDescription(desc)
                .setColor("#00fff0")
                .setImage('https://media.discordapp.net/attachments/1027574225663426714/1029548667281084416/jet_perfil.png');

            chat.send({ embeds: [embed] }).then(() => {
                interaction.reply(`✅ Seu anúncio foi enviado em ${chat} com sucesso.`)
            }).catch((e) => {
                interaction.reply(`❌ Algo deu errado.`)
            })
        }

    }
}
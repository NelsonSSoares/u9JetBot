const Discord = require("discord.js")

module.exports = {
    name: "", // Coloque o nome do comando
    description: "envie uma embed de pagamento.", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "descrição",
            description: "Coloque a descrição do pagamento.",
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
            let desc = interaction.options.getString("descrição")
            let cor = interaction.options.getString("cor")
            if (!cor) cor = "Random"
            let chat = interaction.options.getChannel("chat")
            if (Discord.ChannelType.GuildText !== chat.type) return interaction.reply(`❌ Este canal não é um canal de texto para enviar uma mensagem.`)

            let embed = new Discord.EmbedBuilder()
                .setTitle("Fatura JetBOT")
                .setDescription(desc)
                .setColor('#13830b')
                .setImage('https://cdn.discordapp.com/attachments/1027574225663426714/1029909236198674543/unknown.png'); //imagem

            chat.send({ embeds: [embed] }).then(() => {
                interaction.reply(`✅ Sua fatura foi enviada em ${chat} com sucesso.`)
            }).catch((e) => {
                interaction.reply(`❌ Algo deu errado.`)
            })
        }

    }
}
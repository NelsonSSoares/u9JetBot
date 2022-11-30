const Discord = require("discord.js")

module.exports = {
    name: "ticket", // Coloque o nome do comando
    description: "Abra o painel de tickets.", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({ content: `Você não possui permissão para utilzar este comando!`, ephemeral: true })
        } else {
            let embed = new Discord.EmbedBuilder()
                .setTitle(`Atendimento JetBOT`)
                .setColor("#00fff0")
                .setDescription(`Abra um atendimento aqui no servidor selecionando uma das opções abaixo:`)
                .setImage('https://cdn.discordapp.com/attachments/1027574225663426714/1031984808252932116/atendimento_2.0_png.png');

            let painel = new Discord.ActionRowBuilder().addComponents(
                new Discord.SelectMenuBuilder()
                    .setCustomId("painel_ticket")
                    .setPlaceholder("Selecione o atendimento!")
                    .addOptions(
                        {
                            label: "💵 Compra",
                            description: "Atendimento iniciado para realizar compra de algum produto.",
                            value: "opc1"
                        },
                        {
                            label: "🔁 Estorno",
                            description: "Atendimento para realizar estorno!",
                            value: "opc2"
                        },
                        {
                            label: "❓ Suporte",
                            description: "Iniciar atendimento de suporte sobre algum produto/serviço.",
                            value: "opc3"
                        }
                    )
            );

            interaction.reply({ content: `✅ Mensagem enviada!`, ephemeral: true })
            interaction.channel.send({ embeds: [embed], components: [painel] })
        }


    }
}
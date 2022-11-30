const { TextInputStyle } = require('discord.js')
const { InteractionType } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'anunciar',
    description: 'Anuncie a partir de um modal',
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "chat",
            description: "Mencione um canal.",
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true,
        },
    ],
    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageMessages))
            return interaction.reply({
                content: `**❌ | ${interaction.user}, Você precisa da permissão \`Gerenciar Mensagens\` para usar este comando!**`,
                ephemeral: true,
            })

        const modal = new Discord.ModalBuilder()
            .setCustomId('MyFirstModal')
            .setTitle('Criar Anúncio 📢')

        const TítuloEmbed = new Discord.TextInputBuilder()
            .setCustomId('TítuloEmbed')
            .setLabel('Título do Anúncio') //Titulo do campo
            .setPlaceholder(`Insira o título do anúncio.`) //placeholder do campo
            .setStyle(TextInputStyle.Short)

        const Descrição = new Discord.TextInputBuilder()
            .setCustomId('Descrição')
            .setLabel('Descrição do Anúncio') //Titulo do campo
            .setPlaceholder(`Insira a descrição do anúncio`) //placeholder do campo
            .setStyle(TextInputStyle.Paragraph)

        const Cor = new Discord.TextInputBuilder()
            .setCustomId('Cor')
            .setLabel('Cor do Anúncio') //Titulo do campo
            .setPlaceholder(`Insira o HEX de uma cor..`) //placeholder do campo
            .setStyle(TextInputStyle.Short)

        const Imagem = new Discord.TextInputBuilder()
            .setCustomId('Imagem')
            .setLabel('Insira uma imagem') //Titulo do campo
            .setPlaceholder(`Insira o link de uma imagem..`) //placeholder do campo
            .setStyle(TextInputStyle.Short)


        const PrimeiraActionRow = new Discord.ActionRowBuilder().addComponents(TítuloEmbed);
        const SegundaActionRow = new Discord.ActionRowBuilder().addComponents(Descrição);
        const TerceiraActionRow = new Discord.ActionRowBuilder().addComponents(Cor);
        const QuartaActionRow = new Discord.ActionRowBuilder().addComponents(Imagem);

        let chat = interaction.options.getChannel("chat")

        modal.addComponents(PrimeiraActionRow, SegundaActionRow, TerceiraActionRow, QuartaActionRow)

        await interaction.showModal(modal);

        client.once('interactionCreate', async interaction => {
            if (!interaction.isModalSubmit()) return;

            if (interaction.customId === 'MyFirstModal') {

                const DescriçãoEmbed = interaction.fields.getTextInputValue('Descrição');
                const TítuloEmbed = interaction.fields.getTextInputValue('TítuloEmbed');
                const Cor = interaction.fields.getTextInputValue('Cor');
                const Imagem = interaction.fields.getTextInputValue('Imagem');

                let embedModal1 = new Discord.EmbedBuilder()
                    .setColor(`${Cor}`)
                    .setTitle(`${TítuloEmbed}`)
                    .setDescription(`${DescriçãoEmbed}
                    <@&1032273928464388178>`) //Cargo de anuncios
                    .setImage(`${Imagem}`)

                interaction.reply({
                    content: `**✅ Anúncio realizado com sucesso.**`, ephemeral: true
                })


                chat.send({
                    embeds: [embedModal1]
                }).catch((e) => {
                    interaction.reply({ content: `Algo deu errado, por favor tente novamente...`, ephemeral: true })
                })

            }

        });


    }
}
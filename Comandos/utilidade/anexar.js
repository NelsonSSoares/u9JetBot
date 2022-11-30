const Discord = require("discord.js")

module.exports = {
    name: 'anexar',
    description: 'Anexar uma imagem em um canal.',
    options: [
        {
            name: "canal",
            description: "Mencione um canal.",
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true,
        },
        {
            name: "imagem",
            description: "Insira a imagem.",
            type: Discord.ApplicationCommandOptionType.Attachment,
            required: true,
        },
    ],

    run: async(client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageMessages))
          return interaction.reply({
              content: `**❌ - ${interaction.user}, Você precisa da permissão \`Gerenciar Mensagens\` para usar este comando!**`,
              ephemeral: true,
        }); else {

            let channel__1 = interaction.options.getChannel("canal")

            if (!channel__1.send)
            return interaction.reply({
                content: `**❌ - ${interaction.user}, Você provavelmente selecionou um canal de voz ou categoria. Por favor selecione um canal de texto.**`,
                ephemeral: true,
            })

            let image_1 = interaction.options.getAttachment("imagem")
           
          
                  const ImagemEnviarP2 = `${image_1}`
                  interaction.reply({
                    content: `**✅ - Sua imagem foi enviada com sucesso no canal ${channel__1}!**`, 
                    ephemeral: true
                  })

                  await channel__1.send({ files: [image_1] })
            
      }
  }
}

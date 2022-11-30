const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageActionRow } = require('discord.js')

module.exports = {

    name: 'ajuda',
    description: 'Exibe meu painel de ajuda.',
    type: ApplicationCommandType.ChatInput,

    run: async (client, interaction, args) => {

        let embed = new EmbedBuilder()
            .setThumbnail(client.user.displayAvatarURL({ size: 1024 }))
            .setTitle(`Ajuda da ${client.user.username}`)
            .setDescription(`Olá, meu prefixo é \`/\`
    
    🛡️ **Comandos de Administração:**
    \`anunciar\` \`ban\` \`fatura\` \`limpar\` \`slowmode\` \`sorteio\` \`ticket\` \`unban\` \`verificar\` \`ajuda\`
    
    📎 **Comandos de Utiliade:**
    \`avaliar\` \`botinfo\` \`ping\` \`ajuda\`
    
    ___Outros:___
    > **Github do meu DEV** [aqui](https://github.com/Luanp2001)
    > **Me adicione em seu servidor** [aqui](https://discord.com/api/oauth2/authorize?client_id=1012869408445714494&permissions=8&scope=applications.commands%20bot)
    > **Entre no meu servidor de suporte** [aqui](https://discord.gg/KPZks2fV)`)
            .setColor('Purple')

        interaction.reply({ embeds: [embed] })
    }
}
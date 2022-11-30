const ms = require("ms")
const Discord = require("discord.js")

module.exports = {
    name: 'castigo',
    description: 'Coloque algum usuário de castigo.',
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'usuário',
            type: Discord.ApplicationCommandOptionType.User,
            description: 'Selecione um usuário para receber o castigo.',
            required: true,
        },
        {
            name: 'tempo',
            type: Discord.ApplicationCommandOptionType.String,
            description: 'Selecione um tempo para colocar o usuário de castigo.',
            required: true,
            choices: [
                {
                    name: '30 Segundos',
                    value: '30s',
                },
                {
                    name: '1 Minuto',
                    value: '1m',
                },
                {
                    name: '5 Minutos',
                    value: '5m',
                },
                {
                    name: '10 Minutos',
                    value: '10m',
                },
                {
                    name: '15 Minutos',
                    value: '15m',
                },
                {
                    name: '30 Minutos',
                    value: '30m',
                },
                {
                    name: '45 Minutos',
                    value: '45m',
                },
                {
                    name: '1 Hora',
                    value: '1h',
                },
                {
                    name: '2 Horas',
                    value: '1h',
                },
                {
                    name: '5 Horas',
                    value: '1h',
                },
                {
                    name: '12 Horas',
                    value: '12h',
                },
                {
                    name: '24 Horas',
                    value: '24h',
                },
                {
                    name: '1 Dia',
                    value: '24h',
                },
                {
                    name: '3 dias',
                    value: '72h',
                },
                {
                    name: '1 Semana',
                    value: '168h',
                },
            ]
        },
        {
            name: 'motivo',
            type: Discord.ApplicationCommandOptionType.String,
            description: 'Coloque o motivo do castigo',
            required: true,
        },
    ],

    run: async (client, interaction, args) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ModerateMembers)) {
            return interaction.reply({
                content: `Você não possui permissão para utilizar esse comando.`,
                ephemeral: true,
            })

        } else {

            let usuario = interaction.options.getUser("usuário")
            let tempo = interaction.options.getString("tempo")
            let motivo = interaction.options.getString("motivo") || `Nenhum`

            let membro = interaction.guild.members.cache.get(usuario.id);
            let duracao = ms(tempo);
            membro.timeout(duracao, motivo).then(() => {
                interaction.reply({
                    embeds: [
                        new Discord.EmbedBuilder()
                            .setColor('White')
                            .setTitle(`**__Castigo aplicado com sucesso.__**`)
                            .setDescription(`
                            > 👨‍🔧 **Autor:** 
                            ㅤ${interaction.user} 

                            > ⚙️ **Usuário:** 
                            ㅤ${membro.user}

                            > 📝 **ID do usuário:** 
                            ㅤ\`${membro.user.id}\`

                            > 📅 **Tempo do castigo:**
                            ㅤ\`${tempo}\`
 
                            > 💭 **Motivo:**
                            ㅤ\`${motivo}\`
                            `)
                    ],
                })
            })
        }
    }
}

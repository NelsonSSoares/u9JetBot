const Discord = require('discord.js')

module.exports = {
        name: 'tirar-castigo',
        description: 'Remova o castigo de algum usuário.',
        options: [
                {
                        name: 'usuário',
                        description: 'Selecione o usuário para remover o  castigo.',
                        type: 6,
                        required: true,
                },
                {
                        name: 'motivo',
                        type: Discord.ApplicationCommandOptionType.String,
                        description: 'Coloque o motivo do castigo.',
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

                        const member = interaction.options.getMember('usuário');
                        let usuario = interaction.options.getUser("usuário")
                        let motivo = interaction.options.getString("motivo") || `Nenhum`

                        let membro = interaction.guild.members.cache.get(usuario.id);


                        if (!member.isCommunicationDisabled()) {
                                return interaction
                                        .reply({
                                                content: 'Ops, este usuário não está de castigo.',
                                                ephemeral: true,
                                        })
                                        .catch((e) => { });
                        }
                        await member.disableCommunicationUntil(null, `${motivo}`);
                        interaction.reply({
                                embeds: [
                                        new Discord.EmbedBuilder()
                                                .setColor('White')
                                                .setTitle(`**__Castigo removido com sucesso.__**`)
                                                .setDescription(`
                            > 👨‍🔧 **Autor:** 
                            ㅤ${interaction.user} 

                            > ⚙️ **Usuário:** 
                            ㅤ${membro.user}

                            > 📝 **ID do usuário:** 
                            ㅤ\`${membro.user.id}\`
 
                            > 💭 **Motivo:**
                            ㅤ\`${motivo}\`
                            `)
                                ],
                        });
                }
        }
}
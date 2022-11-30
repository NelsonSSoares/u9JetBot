const Discord = require("discord.js");

module.exports = {
    name: "status",
    description: "Configuração do Status do BOT",
    dm: false,
    category: "Sistema",
    options: [
        {
            type: Discord.ApplicationCommandOptionType.String,
            name: "status",
            description: "Qual é o status (online, dnd, idle ou invisible) ?",
            required: true,
            autocomplete: false
        },{
            type: Discord.ApplicationCommandOptionType.String,
            name: "bio",
            description: "Qual a descrição do bot?",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, interaction) {

        try {

            const status = interaction.options.getString("status");
            const bio = interaction.options.getString("bio");

            bot.user?.setStatus(`${status}`);

            bot.user?.setPresence({
                activities: [{
                    name: bio
                }],
            });

            await interaction.reply({content: `Mudei o status para \`${status}\` e a biografia em \`${bio}\``});

        } catch (error) {
            return console.log('*❌ - Ocorreu um erro no comando status*', error)
        }
    }
}
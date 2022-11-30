const Discord = require("discord.js")

module.exports = {
    name: "",
    description: "✨ Registre seu nick do servidor!",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "nick", 
            
            description: "Coloque exatamente igual o seu nick!", 
            
            type: Discord.ApplicationCommandOptionType.String, 
            
            required: true
        }
    ],

    run: async(client, interaction) => {

        if (!interaction.member.roles.cache.has("ID_CARGO_REGISTRADO")) return interaction.reply({ content: `Você já é registrado.`,  ephemeral: true })

        let nick = interaction.options.getString("nick");
        let CanalResponder = await client.channels.cache.get("1032276454903402547");
        let member = interaction.member;
        let cargoSemRegistro = interaction.guild.roles.cache.get("ID_CARGO");
        let cargoComRegistro = interaction.guild.roles.cache.get("ID_CARGO");
        if (!interaction.member.roles.cache.has("ID_CARGO_REGISTRO")) {

            member.setNickname(`${nick}`).catch(console.error)
            member.roles.add("ID_CARGO_REGISTRO").catch(console.error)
            member.roles.remove("ID_CARGO_SEM_REGISTRO").catch(console.error)
            interaction.reply({ content: `✅ Você se registrou com sucesso.`,  ephemeral: true })
            CanalResponder.send({ content: `✔ | ${interaction.user} acabou de se registrar como **${nick}**`, fetchReply: true }).then(i => i.react('92371183324694377')) }
 }
}
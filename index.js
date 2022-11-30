const { userMention } = require("discord.js");
const Discord = require("discord.js") //importação da biblioteca
const config = require("./config.json") //configurações do bot 

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds                                                          
    ]
});

module.exports = client

client.on('interactionCreate', (interaction) => {

    if (interaction.type === Discord.InteractionType.ApplicationCommand) {

        const cmd = client.slashCommands.get(interaction.commandName);

        if (!cmd) return interaction.reply(`Error`);

        interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction)

    }
})

client.on('ready', () => {
    console.log(`🤖 Estou online como: ${client.user.username}!`) //mensagem de quando o bot inicia!
})

client.on("interactionCreate", (interaction) => {
    if (interaction.isSelectMenu()) {
        if (interaction.customId === "painel_ticket") {
            let opc = interaction.values[0]
            if (opc === "opc1") {

                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Nova opção

                let nome = `📨-${interaction.user.id}`;
                let categoria = "" // Coloque o ID da categoria

                if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

                if (interaction.guild.channels.cache.find(c => c.name === nome)) {
                    interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
                } else {
                    interaction.guild.channels.create({
                        name: nome,
                        type: Discord.ChannelType.GuildText,
                        parent: categoria,
                        permissionOverwrites: [
                            {
                                id: interaction.guild.id,
                                deny: [
                                    Discord.PermissionFlagsBits.ViewChannel
                                ]
                            },
                            {
                                id: interaction.user.id,
                                allow: [
                                    Discord.PermissionFlagsBits.ViewChannel,
                                    Discord.PermissionFlagsBits.SendMessages,
                                    Discord.PermissionFlagsBits.AttachFiles,
                                    Discord.PermissionFlagsBits.EmbedLinks,
                                    Discord.PermissionFlagsBits.AddReactions
                                ]
                            }
                        ]
                    }).then((ch) => {
                        interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("Random")
                            .setDescription(`Olá ${interaction.user}, você iniciou um atendimento para realizar uma compra, aguarde que um de nosso <@&1032007389798469663> já ira te atender.`);
                        let botao = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setLabel("Encerrar atendimento")
                                .setStyle(Discord.ButtonStyle.Danger)
                        );

                        ch.send({ embeds: [embed], components: [botao] }).then(m => {
                            m.pin()
                        })
                    })
                }

            } else if (opc === "opc2") {

                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Nova opção

                let nome = `📨-${interaction.user.id}`;
                let categoria = "" // Coloque o ID da categoria

                if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

                if (interaction.guild.channels.cache.find(c => c.name === nome)) {
                    interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
                } else {
                    interaction.guild.channels.create({
                        name: nome,
                        type: Discord.ChannelType.GuildText,
                        parent: categoria,
                        permissionOverwrites: [
                            {
                                id: interaction.guild.id,
                                deny: [
                                    Discord.PermissionFlagsBits.ViewChannel
                                ]
                            },
                            {
                                id: interaction.user.id,
                                allow: [
                                    Discord.PermissionFlagsBits.ViewChannel,
                                    Discord.PermissionFlagsBits.SendMessages,
                                    Discord.PermissionFlagsBits.AttachFiles,
                                    Discord.PermissionFlagsBits.EmbedLinks,
                                    Discord.PermissionFlagsBits.AddReactions
                                ]
                            }
                        ]
                    }).then((ch) => {
                        interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("Random")
                            .setDescription(`Olá ${interaction.user}, você iniciou um atendimento de estorno, aguarde que um de nosso <@&1032007389798469663> já ira te atender.`);
                        let botao = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setLabel("Encerrar atendimento")
                                .setStyle(Discord.ButtonStyle.Danger)
                        );

                        ch.send({ embeds: [embed], components: [botao] }).then(m => {
                            m.pin()
                        })
                    })
                }

            } else if (opc === "opc3") {

                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Nova opção

                let nome = `📨-${interaction.user.id}`;
                let categoria = "" // Coloque o ID da categoria

                if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

                if (interaction.guild.channels.cache.find(c => c.name === nome)) {
                    interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
                } else {
                    interaction.guild.channels.create({
                        name: nome,
                        type: Discord.ChannelType.GuildText,
                        parent: categoria,
                        permissionOverwrites: [
                            {
                                id: interaction.guild.id,
                                deny: [
                                    Discord.PermissionFlagsBits.ViewChannel
                                ]
                            },
                            {
                                id: interaction.user.id,
                                allow: [
                                    Discord.PermissionFlagsBits.ViewChannel,
                                    Discord.PermissionFlagsBits.SendMessages,
                                    Discord.PermissionFlagsBits.AttachFiles,
                                    Discord.PermissionFlagsBits.EmbedLinks,
                                    Discord.PermissionFlagsBits.AddReactions
                                ]
                            }
                        ]
                    }).then((ch) => {
                        interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("Random")
                            .setDescription(`Olá ${interaction.user}, você iniciou um atendimento de suporte, aguarde que um de nosso <@&1032007389798469663> já ira te atender.`);
                        let botao = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("fechar_ticket")
                                .setEmoji("🔒")
                                .setLabel("Encerrar atendimento")
                                .setStyle(Discord.ButtonStyle.Danger)
                        );

                        ch.send({ embeds: [embed], components: [botao] }).then(m => {
                            m.pin()
                        })
                    })
                }

            }
        }
    } else if (interaction.isButton()) {
        if (interaction.customId === "fechar_ticket") {
            interaction.reply(`Olá ${interaction.user}, este ticket será excluído em **10 segundos...**
            Não esqueça de avaliar o atendimento utilizando **/avaliar** e mencionando o atendente.`)
            setTimeout(() => {
                try {
                    interaction.channel.delete()
                } catch (e) {
                    return;
                }
            }, 10000)
        }
    }
})

client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === "verificar") {
            let role_id = await db.get(`cargo_verificação_${interaction.guild.id}`);
            let role = interaction.guild.roles.cache.get(role_id);
            if (!role) return;
            interaction.member.roles.add(role.id)
            interaction.reply({ content: `Ola **${interaction.user.username}**, você foi verificado!`, ephemeral: true })
        }
    }
})

client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token)


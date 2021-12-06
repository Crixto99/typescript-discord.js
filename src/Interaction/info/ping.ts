module.exports = {
    name: "ping",
    description: "Ver el ping del bot",
    run: async(client, interaction) => {
        interaction.reply({ content: `Pong! \`${client.ws.ping}ms\``, ephemeral: true })
    }
}
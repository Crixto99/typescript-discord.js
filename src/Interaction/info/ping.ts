module.exports = {
    name: "ping",
    description: "El pepe",
    run: async(client, interaction) => {
        interaction.reply({ content: `Pong! \`${client.ws.ping}ms\``, ephemeral: true })
    }
}

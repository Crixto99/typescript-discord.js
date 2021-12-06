module.exports = {
    name: "ping",
    description: "Puedes ver el ping del bot",
    run: async(client, message, args, prefix) => {
        message.reply(`Pong! \`${client.ws.ping}\``)
    }
}
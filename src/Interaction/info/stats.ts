import { MessageEmbed } from 'discord.js';
const moment = require("moment")
require('moment-duration-format')

module.exports = {
    name: "stats",
    description: "Informació del bot",
    run: async(client, interaction) => {

        const actividad = moment.duration(client.uptime).format(" D[d], H[h], M[m], S[s]");
        const embed = new MessageEmbed() 
       .setAuthor(`Información de ${client.user.username}`, client.user.avatarURL())
       .addField("Dueño del bot", `Crixto ඞ#0574`)
       .addField(`**Creado:**`, `<t:${Math.round(client.user.createdAt / 1000)}>`,)
       .addField("**Memoria:**", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
       .addField("**Activo:**", `${actividad}`, true)
       .addField("**Slash:**", `${client.interactions.size}`, true)
       .addField("Miembros:", `${client.users.cache.size}`, true)
       .addField("Servidores:", `${client.guilds.cache.size}`, true)
       .setColor("RANDOM")
       .setTimestamp()
       .setFooter(`Pedido por: ${interaction.user.username}`, interaction.user.avatarURL())
       interaction.reply({ embeds: [embed], ephemeral: true })


    }
}
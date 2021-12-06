import { MessageEmbed } from 'discord.js';

module.exports = {
    name: "serverinfo",
    description: "Puedes ver la información del servidor",
    run: async(client, interaction) => {

        const embed = new MessageEmbed()
        .setThumbnail(interaction.guild.iconURL())
.setAuthor(`Información del servidor`, interaction.guild.iconURL())
.addField("Nombre", `${interaction.guild.name} \`(${interaction.guild.id})\``)
.addField("Dueño", `<@${interaction.guild.ownerId}> \`(${interaction.guild.ownerId}\``)
.addField("Roles", `${interaction.guild.roles.cache.size}`, true)
.addField("Miembros", `${interaction.guild.members.cache.filter((member) => !member.user.bot).size}`, true)
.addField("Bots", `${interaction.guild.members.cache.filter(m => m.user.bot).size}`, true)
.addField("Creado", `<t:${Math.round(interaction.guild.createdAt / 1000)}>`)
.setFooter(`Pedido por: ${interaction.user.username}`, interaction.user.avatarURL())
.setTimestamp()
.setColor("RANDOM")
interaction.reply({ embeds: [embed], ephemeral: true})

    }
}
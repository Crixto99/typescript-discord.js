import { MessageEmbed } from 'discord.js';

module.exports = {
    name: "servericon",
    description: "Puedes ver la imagen del servidor en grande",
    run: async(client, interaction) => {

        const embed = new MessageEmbed()
        .setTitle("Ícono del servidor")
        .setImage(interaction.guild.iconURL({ display: true, size: 1024, }))
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`Pedido por: ${interaction.user.username}`, interaction.user.avatarURL())
        interaction.reply({ embeds: [embed] })

    }
}
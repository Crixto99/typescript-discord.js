module.exports = {
    name: 'messageCreate',
    run: async(client, message) => {

        let prefix = '$';
        
        if(
            message.author.bot || 
            message.channel.type == "DM" ||
            !message.guild ||
            !message.content.toLowerCase().startsWith(prefix)
        )
        return;

        let args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g)

        let command = args.shift().toLowerCase();
        let cmd = client.commands.find(
            (x) => x.name == command || (x.aliases && x.aliases.includes(command))
        );

        try {
            cmd?.run(client, message, args, prefix)
        } catch (e) {
            console.log(e)
        }

    }
}
module.exports.commandHandler = function(client, fs, path) {
    const commands = fs.readdirSync(path.join(__dirname + "/" + `../Commands`));
    for(const dir of commands) {
        const folder = fs.readdirSync(path.join(__dirname + "/" + `../Commands/${dir}`))
        for(const file of folder){
            const command = require(`../Commands/${dir}/${file}`);
            client.commands.set(command.name, command)
        }
    }
}
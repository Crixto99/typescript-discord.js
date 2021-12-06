module.exports.slashHandler = function(client, fs, path) {
    const commands = fs.readdirSync(path.join(__dirname + "/" + `../Interaction`));
    for(const dir of commands) {
        const folder = fs.readdirSync(path.join(__dirname + "/" + `../Interaction/${dir}`))
        for(const file of folder){
            const command = require(`../Interaction/${dir}/${file}`);
            client.interactions.set(command.name, command)
        }
    }
    console.log("💀 | Slash cargados correctamente")
}
module.exports.eventHandler = function (client, fs, path) {
    const events = fs.readdirSync(path.join(__dirname + "/" + `../Events`));
    for(const dir of events){
        const folder = fs.readdirSync(path.join(__dirname + "/" + `../Events/${dir}`));
        for(const file of folder){
            const event = require(`../Events/${dir}/${file}`);
            client.on(event.name, (...args) => event.run(client, ...args));
        }
    }
}
module.exports = {
    name: "ready",
    run: async(client) => {

        const slashcommands = client.interactions.map(x => x)
        client.application.commands.set(slashcommands);
        
        console.log(`✅ | ${client.user.tag} Esta listo!!!`);
        
    }
}
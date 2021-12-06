module.exports = {
    name: "ready",
    run: async(client) => {

        const slashcommand = client.interactions.map(x => x)
        client.application.commands.set(slashcommand);
        
        console.log(`✅ | ${client.user.tag} Esta listo!!!`);
        
    }
}

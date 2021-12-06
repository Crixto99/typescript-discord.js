module.exports = {
    name: "interactionCreate",
    run:async(client, interaction) => {

       if(interaction.isCommand()) {
           const command = client.interactions.get(interaction.commandName);
           if(!command) return;
           try {
           command.run(client, interaction)
           } catch (e) {
               console.log(e)
               interaction.reply({
                   content: ":x: | Algo salió mal, intenta usar el comando más tarde",
                   ephemeral: true
               });
           }
       } 

    }
}
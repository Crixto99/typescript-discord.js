import { Client, Collection } from 'discord.js';
import { Command, Interaction } from '../Interface';
import { runAll } from "../Utils/index";
import * as dotenv from "dotenv";
dotenv.config();

class ExtendedClient extends Client {
    constructor() {
        super({
            intents: 32767,
            partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
            allowedMentions: {
                parse: ['users', 'roles', 'everyone'],
                repliedUser: false
            }
        })
    }

    public commands: Collection<string, Command> = new Collection();
    public interactions: Collection<string, Interaction> = new Collection();
    
    public init() {
        this.login(process.env.TOKEN);
        runAll(this);
        return this;
    }
}

export default ExtendedClient;
import Client from "../Client";
import { CommandInteraction, ApplicationCommandData } from "discord.js";

interface Run {
    (client: Client, interaction: CommandInteraction, args: string[]);
}

export type Interaction = ApplicationCommandData & {
    testOnly: boolean;
    run: Run;
}
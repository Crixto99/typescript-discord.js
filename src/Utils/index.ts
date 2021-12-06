import Client from "../Client";
import fs from 'fs';
import path from "path";

export function runAll(client: Client) {

    const { slashHandler } = require("../Handler/slash");
    const { eventHandler } = require("../Handler/event");

    slashHandler(client, fs, path);
    eventHandler(client, fs, path);

    process.on("unhandledRejection", (e) => {
       console.log(e);
    });
    
}

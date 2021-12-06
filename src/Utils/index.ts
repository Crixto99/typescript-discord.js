import Client from "../Client";
import fs from 'fs';
import path from "path";

export function runAll(client: Client) {

    const { commandHandler } = require("../Handler/command");
    const { slashHandler } = require("../Handler/slash");
    const { eventHandler } = require("../Handler/event");

    commandHandler(client, fs, path);
    slashHandler(client, fs, path);
    eventHandler(client, fs, path);

    process.on("unhandledRejection", (reason, p) => {
        console.log(" [antiCrash] :: Unhandled Rejection/Catch");
        console.log(reason, p);
    });
    process.on("uncaughtException", (err, origin) => {
        console.log(" [antiCrash] :: Uncaught Exception/Catch");
         console.log(err, origin);
    });
    process.on("uncaughtExceptionMonitor", (err, origin) => {
        console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
        console.log(err, origin);
    });
    process.on("multipleResolves", (type, promise, reason) => {
        console.log(" [antiCrash] :: Multiple Resolves");
         console.log(type, promise, reason);
    });

}
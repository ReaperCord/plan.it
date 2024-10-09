import fs from "fs"; //ES6
// const fs = require("fs"); - common JS

const DB_FILE_PATH = "./core/db";

console.log("[CRUD]");

function create(content: string) {

    fs.writeFileSync(DB_FILE_PATH, content);
    return content;
}

console.log(create("Puta que pariu caralho porra funcionou"));
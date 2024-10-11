import fs from "fs"; //ES6
import { v4 as uuid } from 'uuid';
// const fs = require("fs"); - common JS

const DB_FILE_PATH = "./core/db";

console.log("[CRUD]");

//cria uma interface para os requerimentos do objeto toDo
interface ToDo {
    id: string;
    date: string;
    content: string;
    done: boolean;

}

//Create 
function create(content: string): ToDo {
    const toDo: ToDo = {
        id: uuid(),
        date: new Date().toISOString(),
        content: content,
        done: false,
    };

    const toDos: Array<ToDo> = [
        ...read(),
        toDo,
    ];

    console.log(toDo);

//salva o arquivo no sistema
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
        toDos
    }, null, 2));

    return toDo;
}

//read
function read(): Array<ToDo> {
    const dbString = fs.readFileSync(DB_FILE_PATH, "utf-8");
    const db = JSON.parse(dbString || "{}");
    if (!db.toDos) {
        return [];
    }

    return db.toDos;
}

function CLEAR_DB() {
    fs.writeFileSync(DB_FILE_PATH, "");
}

//update
function update(id: string, PartialtoDo: Partial<ToDo>) {
    let updatedtoDo;
    const toDos = read();

    toDos.forEach((currentToDo) => {
        const isToUpdate = currentToDo.id === id;
        if(isToUpdate) {
            Object.assign(currentToDo, PartialtoDo);
        }
    });

    fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
        toDos,
    }, null, 2));

    if(!updatedtoDo) {
        throw new Error("Por favor providenciar uma nova ID");
    }

    return updatedtoDo;

    //console.log("ToDos Atualizadas", toDos)
}

function updateContentById(id: string, content: string): ToDo {
    return update(id, {
        content,
    });
}

//delete



//simulation
CLEAR_DB();
create("Primeira toDo");
create("Segunda toDo");

const terceiraToDo = create("Terceira toDo");
//update(terceiraToDo.id, {
//    content:"Atualizada",
//});
updateContentById(terceiraToDo.id, "Atualizada!")

console.log(read());

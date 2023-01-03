const chalk = require('chalk');
const fs = require('fs');


const addNotes = ( title, body) => {
    const notes = loadNotes();
    const firstDuplicateNote = notes.find((note)=> note.title == title);
    // debugger;
    if(!firstDuplicateNote){
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse.bold('New note added !'));
    }  else {
        console.log(chalk.red.inverse.bold('note title already taken !')); 
    }
 
}

const saveNotes = (notes) => {
    const jsonString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', jsonString);
}

const loadNotes = () => {
    
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const jsonString = dataBuffer.toString();
        return JSON.parse(jsonString); 

    } catch (error) {
        return [];
    }
}

const removeNote = (title) => { 
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);

    if(notes.length > newNotes.length) {
        console.log(chalk.green.inverse.bold('Note removed !'));
        saveNotes(newNotes);
    } else {
        console.log(chalk.red.inverse('No note found !'));
    }   
    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your list of  notes !'));
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if(note){
        console.log(chalk.inverse(note.title));
        console.log('body: ',note.body);
    } else {
        console.log(chalk.inverse('Note not Found !'));
    }
}

module.exports = {
    addNotes,
    removeNote,
    listNotes,
    readNotes
};
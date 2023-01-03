const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const { addNotes, removeNote, listNotes, readNotes } = require('./notes.js');

// Create add command
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNotes(argv.title, argv.body);
    }
})
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'remove note by title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'listing a note',
    handler() {
        listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNotes(argv.title);
    }
});

// console.log(yargs.argv);
yargs.parse();

// Run this command : node app.js  add --title='yogesh' --body='salunke'
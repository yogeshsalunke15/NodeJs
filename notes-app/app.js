const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const { getNotes, printNotes } = require('./notes.js');

// Create add command
yargs.command({
    'command': 'add',
    'describe':  'Add a new note',
    handler: function () {
        console.log('Adding a new note !');
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note !');
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'listing a note',
    handler: function () {
        console.log('Listing the note !');
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'reading a note',
    handler: function () {
        console.log('Reading the note !');
    }
});

yargs.version('2.1.5');
console.log(yargs.argv);
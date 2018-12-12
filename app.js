//  Just to check if the app started
console.log("Starting App");

// Third party
const fs = require('fs');
const _ = require('lodash');
//Yargs makes it easy to use key-value pairs arguments on the command line
const yargs = require('yargs');

// My files
const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];
//Print the command
console.log("Command:", command);

console.log('Process', process.argv);
console.log('Yargs', argv);

if( command === 'add'){
    console.log('Adding new note');
    notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
    console.log('Listing all notes');
    notes.getAll();
} else if(command === 'read'){
    console.log('fetching note...')
    notes.getNote(argv.title);
} else if(command === 'remove'){
    console.log('removing note...')
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognised');
}
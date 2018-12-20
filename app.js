const fs = require('fs');
//Yargs makes it easy to use key-value pairs arguments on the command line
const yargs = require('yargs');

// My files
const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];

if( command === 'add'){
    console.log('Adding new note');
   var note =  notes.addNote(argv.title, argv.body);
   // Check of note was saved

   if (note){
       console.log("Note was created....");
       notes.logNote(note);
   } else{
       console.log("Note title is a duplicate! Try another title....")
   }
} else if (command === 'list'){
    console.log('Listing all notes');
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s)...`);

    //Print all notes

    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read'){
    console.log('fetching note...')
    var note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    }else{
        console.log("Note not found"); 
    }
    
} else if(command === 'remove'){
    console.log('removing note...')
    
   var noteRemoved = notes.removeNote(argv.title);
   var message = noteRemoved ? 'Note Removed' : 'Note not found';
   console.log(message);
} else {
    console.log('Command not recognised');
}
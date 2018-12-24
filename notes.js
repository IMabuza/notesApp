const fs = require('fs');

// FetchNotes

var fetchNotes = ()  => {
    // Load notes-data file if it exits

    try {
        var noteString = fs.readFileSync("notes-data.json")
        return JSON.parse(noteString);
    } catch (e){
        // return empty array if file !Exits or file corrupted or some other error
        return [];
    }

}

// Save notes

var saveNotes = (notes) => {
    // create or write to file note-data.json

    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
    
}

//define a fuction to add notes
var addNote = (title, body) => {

    
    // Save fetched notes onto varialble notes
    var notes = fetchNotes();

    // Note object to store one note from the user
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
          // Push the node object to the array

    notes.push(note);
    saveNotes(notes);
    return note;
    }
  
}

var getAll = () => {
    return fetchNotes();
}

var getNote = (title) => {
    console.log('reading note:', title);
    // Fetch notes
    var notes = fetchNotes();
    // Filter and return only the note required
    var fetchedNote = notes.filter((note) => note.title === title);
        return fetchedNote[0]; 
}

var removeNote = (title) =>{
    // Fetch notes
    var notes = fetchNotes();
    var newNotes = notes.filter((note) => note.title != title);
    saveNotes(newNotes);

    return notes.length !== newNotes.length;
}

// Log note

var logNote = (note) => {
    console.log("---")
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
}

// An object to export the function instead of for eg. "module.exports.addNote"
module.exports ={ 
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
console.log("Starting notes.js");

//define a fuction to add notes

var addNote = (title, body) => {
    console.log('Adding note:', title, body);
}

var getAll = () => {
    console.log('Getting all notes...');
}

var getNote = (title) => {
    console.log('reading note:', title);
}

var removeNote = (title) =>{
    console.log('removing note:', title);
}

// An object to export the function instead of module.exports.addNote
module.exports ={ 
    addNote,
    getAll,
    getNote,
    removeNote
};
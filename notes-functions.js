// read existing notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
}

const savedNotes = function () {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// remove note from list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id;
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// generate the dom structure for a note
const generateNoteDom = function (note) {
    const noteElement = document.createElement('div');
    const textElement = document.createElement('a');
    const button = document.createElement('button');
    
    // remove note button setup
    button.textContent = 'x';
    noteElement.appendChild(button);
    button.addEventListener('click', function (e) {
        removeNote(note.id);
        savedNotes(notes);
        renderNotes(notes, filters);
    })

    // note title text setup
    if (note.title > 0) {
        textElement.textContent = note.title;
    } else {
        textElement.textContent = 'Unnamed note';
    }
    textElement.setAttribute('href', `/edit.html#${note.id}`);
    noteElement.appendChild(textElement);
    return noteElement;
}

// render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDom(note);
        document.querySelector('#notes').appendChild(noteElement);
    })
}
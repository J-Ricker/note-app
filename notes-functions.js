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

// generate the dom structure for a note
const generateNoteDom = function (note) {
    const noteElement = document.createElement('p');

    if (note.title > 0) {
        noteElement.textContent = note.title;
    } else {
        noteElement.textContent = 'Unnamed note';
    }
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
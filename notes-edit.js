const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function (note) {
    return note.id === noteId;
})

if(note === undefined) {
    location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value;
    savedNotes(notes);
})

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value;
    savedNotes(notes);
})

removeElement.addEventListener('click', function (e) {
    removeNote('note.id');
    savedNotes(notes);
    location.assign('/index.html');
})
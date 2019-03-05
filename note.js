const notes = getSavedNotes();

const filters = {
    searchText: '',
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    savedNotes(notes);
    location.assign(`/edit.html#${note.id}`);
})

document.querySelector('#note-search').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
})

const note = new Date();

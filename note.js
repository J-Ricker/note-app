let notes = getSavedNotes();

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
    location.assign(`/edit.html#${id}`);
})

document.querySelector('#note-search').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

const now = moment();
console.log(now.toString());
now.minute(1);
console.log(now.toString());
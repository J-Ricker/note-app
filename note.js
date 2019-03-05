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

// const now = new Date();
// const timeStamp = now.getTime();

// const myDate = new Date(timeStamp);
// console.log(myDate.getFullYear());


const dateOne = new Date('March 22nd 1979 12:00:00');
const dateTwo = new Date();

const timeStampFirst = dateOne.getTime();
const otherTimeStamp = dateTwo.getTime();

if (timeStampFirst < otherTimeStamp) {
    console.log(dateOne.toString());
} else if (otherTimeStamp < timeStampFirst) {
    console.log(dateTwo.toString());
}

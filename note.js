const notes = [{
    title: 'my next trip',
    body: 'I would like to go to spain'
}, {
    title: 'habbits to work on',
    body: 'Exercise, eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNotes = function(notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    })
}


console.log(findNotes(notes, 'et'));




// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     });
// }


// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     });
//     return notes[index];
// }

// const note = findNote(notes, 'office modification');
// console.log(note);
// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habbits to work on';
// });

// console.log(index);
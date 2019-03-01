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

const newParagraphs = notes.forEach(function (para) {
    const p = document.createElement('p');
    p.textContent = para.title;
    document.querySelector('section').appendChild(p);
})


const newP = document.createElement('p');
newP.textContent = 'Hey this is a new paragraph';
document.querySelector('section').appendChild(newP);
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
document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'the button was clicked';
})
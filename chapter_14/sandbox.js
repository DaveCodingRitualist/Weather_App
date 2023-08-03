const todos = [
    {text: 'play mariokart', author:'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
];
// convert todos in JSON format
localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

// convert todos in javascript format back
console.log(JSON.parse(stored));
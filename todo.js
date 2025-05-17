let todos = [
    { title: "Make a simple project", done: true },
    { title: "Understanding the array", done: true },
    { title: "learn JS", done: false },
    { title: "Do homework", done: false }
];

let donetodos = [];
let onGoingTodos = [];


todos.forEach(todo => {
    if (todo.done) {
        donetodos.push(todo)
    } else {
        onGoingTodos.push(todo)
    }
});


console.log("✅ Done todos:");
donetodos.forEach(todo => {
    console.log(`- ${todo.title}`)
})


console.log("\n⏳ OnGoing todos:",);
onGoingTodos.forEach(todo => {
    console.log(`- ${todo.title}`)
})

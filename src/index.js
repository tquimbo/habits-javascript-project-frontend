console.log("hello world")

fetch("http://localhost:3000/habits").then(res=> res.json()).then(console.log)

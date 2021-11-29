const api = new ApiService("http://localhost:3000")

fetch("http://localhost:3000/habits").then(res=> res.json()).then(console.log)

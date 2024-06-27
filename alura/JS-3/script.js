const api = fetch("http://localhost:3000/videos") //maneira em que se busca(fetch) uma API
.then(res => console.log(res))
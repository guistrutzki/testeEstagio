export default function (paginate){
    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = {
        method: "GET",
        headers: {
            "Content-type": "aplication/json; charset=utf-8"
        }
    };



    fetch(url, options)
        .then( response => response.json())
        .then( json =>{
            console.log(json);
            let posts = json;
            let tbody = document.getElementById("listaPosts");


            posts.slice(0,paginate).forEach( (post, index) => {
                tbody.innerHTML += "<tr><td>"+ post.id + "</td><td>"
                    + post.userId + "</td><td>" + post.title + "</td><td>"
                    +post.body + "</td><td><i id="+ post.id +" class='material-icons teste' >delete</i></td></tr>"
            })
        })
}



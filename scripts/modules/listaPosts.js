export default function (paginate){
    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = {
        method: "GET",
        headers: {
            "Content-type": "aplication/json; charset=utf-8"
        }
    };
    let numPosts;

    paginate = document.querySelectorAll('spam');

    paginate.forEach( opcao =>{
        opcao.addEventListener('click', setPaginate)
    });

    function setPaginate(event){
        const paginas = event.currentTarget.getAttribute('id');
        if(paginas == 'pagina10'){
            numPosts = 10;
        }else if(paginas == 'pagina30'){
            numPosts = 30;
        }else if(paginas == 'pagina50'){
            numPosts = 50;
        }else if(paginas == 'paginaAll'){
            numPosts = 100;
        }

        fetch(url, options)
            .then( response => response.json())
            .then( json =>{
                console.log(json);
                let posts = json;
                let tbody = document.getElementById("listaPosts");


                posts.slice(0,numPosts).forEach( (post, index) => {
                    tbody.innerHTML += "<tr><td>"+ post.id + "</td><td>"
                        + post.userId + "</td><td>" + post.title + "</td><td>"
                        +post.body + "</td><td><i id="+ post.id +" class='material-icons teste' >delete</i></a></td></tr>"
                })
            })

    }


}



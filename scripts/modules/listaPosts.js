export default function (){

    // Parâmetros do fetch
    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = {
        method: "GET",
        headers: {
            "Content-type": "aplication/json; charset=utf-8"
        }
    };

    // Seleciona todos os spams, no caso a paginação presente na página.
    let paginate = document.querySelectorAll('spam');

    // Para cada elemento spam, cria um observador de evento.
    paginate.forEach( opcao =>{
        opcao.addEventListener('click', setPaginate)
    });

    function setPaginate(event){

        let numPosts;

        // Pega o ID do spam clicado
        const paginas = event.currentTarget.getAttribute('id');

        // Atribui um valor inteiro para a variavel dependendo do numero de posts que precisa ser mostrado.
        if(paginas == 'pagina10'){
            numPosts = 10;
        }else if(paginas == 'pagina30'){
            numPosts = 30;
        }else if(paginas == 'pagina50'){
            numPosts = 50;
        }else if(paginas == 'paginaAll'){
            numPosts = 100;
        }

        // Pega todos elementos com a classe ativo1 e os remove, para não acumular as postagens.
        let excluido = document.getElementsByClassName('ativo1');
        if (excluido){
            let arrayExcluido = Array.from(excluido)
            arrayExcluido.forEach(registro =>{
                registro.remove();
            })

        }

        // Requisição HTTP usando o método POST
        fetch(url, options)
            .then( response => response.json())
            .then( json =>{
                console.log(json);
                let posts = json;
                let tbody = document.getElementById("listaPosts");

                //Limita o numero de postagens conforme o numero de posts da paginação, usando a função slice do JS.
                posts.slice(0,numPosts).forEach( (post, index) => {
                    tbody.innerHTML += "<tr class='ativo1'><td>"+ post.id + "</td><td>"
                        + post.userId + "</td><td>" + post.title + "</td><td>"
                        +post.body + "</td><td><i id="+ post.id +" class='material-icons teste' >delete</i></a></td></tr>"
                })
            })
    }
}

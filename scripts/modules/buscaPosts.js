export default function (){

    let cont=0;
    let options = {
        method: "GET",
        headers: {
            "Content-type": "aplication/json; charset=utf-8"
        }
    };


    document.getElementById('botaoBusca').addEventListener('click', findById);
    document.getElementById('botaoBusca').addEventListener('click', contador);


    function contador(){
        cont++;
        let excluido = document.getElementsByClassName('ativo');
        if (excluido.length>=10){
            let arrayExcluido = Array.from(excluido)
            arrayExcluido.forEach(registro =>{
                registro.remove();
            })
        }
    }


    function findById(){

        let idPesquisa = document.getElementById('idBusca').value;
        let url = "https://jsonplaceholder.typicode.com/posts/?userId=" + idPesquisa;

        console.log(url);
        fetch(url, options)
            .then( response => response.json())
            .then( json =>{
                console.log(json);
                let posts = json;
                let tbody = document.getElementById("postsPesquisa");

                posts.filter( item =>{
                    return item.userId == idPesquisa;
                }).forEach( post => {

                        tbody.innerHTML += "<tr class='ativo'><td>"+ post.id + "</td><td>"
                            + post.userId + "</td><td>" + post.title + "</td><td>"
                            +post.body + "</td><td><i id="+ post.id +" class='material-icons'>delete</i></td></tr>"
                })

            });
    }
}
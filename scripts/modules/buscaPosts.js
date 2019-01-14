export default function (){

    //Chama a função findById quando o botão de busca é clicado.
    document.getElementById('botaoBusca').addEventListener('click', findById);
    //Chama a função removeAntigo para que os registros antigos não acumulem na tela junto com os novos.
    document.getElementById('botaoBusca').addEventListener('click', removeAntigo);

    function removeAntigo(){
        // Pega todos os elementos com a classe ativo, ou seja que já foram criados anteriormente, apagando-os.
        let excluido = document.getElementsByClassName('ativo');
        if (excluido){
            // Transforma HTML Collection em um array para poder ser manuseado pelo forEach
            // apagando assim todas as antigas linhas
            let arrayExcluido = Array.from(excluido)
            arrayExcluido.forEach(registro =>{
                registro.remove();
            })
        }
    }

    function findById(){

        // Parâmetros do fetch
        let options = {
            method: "GET",
            headers: {
                "Content-type": "aplication/json; charset=utf-8"
            }
        };
        let idPesquisa = document.getElementById('idBusca').value;
        let url = "https://jsonplaceholder.typicode.com/posts/?userId=" + idPesquisa;
        console.log(url);
        
        // Requisição HTTP utilizando o método GET.
        fetch(url, options)
            .then( response => response.json())
            .then( json =>{
                console.log(json);
                let posts = json;
                let tbody = document.getElementById("postsPesquisa");

                // Filtro para apenas exibir os posts do usuario com o ID pesquisado.
                posts.filter( item =>{
                    return item.userId == idPesquisa;
                }).forEach( post => {
                    tbody.innerHTML += "<tr class='ativo'><td>"+ post.id + "</td><td>"
                        + post.userId + "</td><td>" + post.title + "</td><td>"
                        +post.body + "</td><td><i id="+ post.id +" class='material-icons'>delete</i></a></td></tr>"
                })
            });
    }
}

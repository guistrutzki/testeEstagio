export default function (){

    // Intervalo de 1 segundo setado para chamar a função timer, pegando assim
    // sempre todos os elementos icones, no caso as lixeiras.
    setInterval(timer, 1000);

    function timer(){
        let icones = document.querySelectorAll('i');

        // Sempre que for clicado na lixeira é chamado a função deletePost
        icones.forEach( icone =>{
            icone.addEventListener('click', deletePost)
        });
    }

    function deletePost(event) {
        event.preventDefault();
        alert ("Postagem apagada com sucesso");

        // Seleciona o id do alvo, no caso a lixeira
        const idPostagem = event.currentTarget.getAttribute('id');
        let url = "https://jsonplaceholder.typicode.com/posts/" + idPostagem;
        let options = {
            method: "DELETE",
            headers: {
                "Content-type": "aplication/json; charset=utf-8"
            }
        };

        // Requisição http usando o método delete
        fetch(url, options)
            .catch(err =>{
                console.log(err)
        });

        // Pega o id da lixeira e então seleciona o elemento pai do pai e o remove no caso "i>td>tr"
        // removendo a linha inteira do HTML.
        document.getElementById(idPostagem).parentElement.parentElement.remove();
    }
}

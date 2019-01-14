export default function (){

    // Assim que o botão postar for clicado, chama a função que valida o form.
    document.getElementById('postar').addEventListener('click', validaInsert);

    function validaInsert(){

        // Seleciona o form
        let form = document.getElementById('createPost');

        // Variaveis que pegam o valor do campo
        let id = form.id.value;
        let texto = form.texto.value;
        let titulo = form.titulo.value;

        //Variaveis que selecionam o input
        let idTitulo = document.getElementById('titulo');
        let idTexto = document.getElementById('texto');
        let idCampo = document.getElementById('id');

        // Caso o campo esteja vazio, insere uma mensagem e adiciona a classe vazio;
        // A classe vazio deixa a borda inferior do input em vermelho
        if(id === ""){
            idCampo.value = "Por favor preencha este campo!";
            idCampo.classList.add('vazio');

            // Quando o campo do input for clicado, limpa o texto para que possa ser digitado sem precisar apagar o texto
            idCampo.addEventListener('click',function() {
                idCampo.value = "";
            })
        }else {
            idCampo.classList.remove('vazio');
        }

        if(texto === ""){
            idTexto.value = "Por favor preencha este campo!"
            idTexto.classList.add('vazio');
            idTexto.addEventListener('click',function() {
                idTexto.value = "";
            })
        }else {
            idTexto.classList.remove('vazio');
        }

        if(titulo === ""){
            idTitulo.value = "Por favor preencha este campo!"
            idTitulo.classList.add('vazio');
            idTitulo.addEventListener('click',function() {
                idTitulo.value = "";
            })
        }else {
            idTitulo.classList.remove('vazio');
        }
    }
}

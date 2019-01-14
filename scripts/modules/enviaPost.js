export default function (){

    // Função submit para enviar a API
    document.getElementById('postar').addEventListener('click', enviaPost);
    let botao = document.getElementById('postar');

    function enviaPost(){
        // Pega os valores do formulário
        let form = document.getElementById('createPost');

        //Verifica se os inputs não estão vazios. Se estiverem vazios eles recebem a classe button;
        //Caso não estejam vazios recebem a classe submit
        if (form.id.value != "" && form.texto.value != "" && form.titulo.value != ""){
            document.getElementById('postar').classList.add('submit')
        }else {
            document.getElementById('postar').classList.add('button')
        }

        // Caso o botão não possua a classe submit, ele não irá passar da validação.
        // Caso o botão possua a classe submit, ele irá passar da validação.
        if(!botao.classList.contains("submit")){
            console.log('nao enviou');
        }else{
            //Remove a classe submit, para que possa ser criado outro post posteriormente
            botao.classList.remove('submit');
            console.log('enviou');
            alert ("Postagem enviada com sucesso");

            //Valores do input, para serem enviados por POST
            let idUser = document.getElementById('id').value;
            let titulo = document.getElementById('titulo').value;
            let texto = document.getElementById('texto').value;

            //Paramêtros do fetch
            const url = "https://jsonplaceholder.typicode.com/posts";
            const options = {
                method: "POST",
                body: {
                    title: titulo,
                    text: texto,
                    idUser: idUser
                }
            };

            console.log(options)
            fetch(url, options)
                .then( response => response.json())
                .then( json =>{
                    console.log(json);

                    // Limpa os inputs assim que forem submetidos.
                    document.getElementById('id').value = "";
                    document.getElementById('titulo').value = "";
                    document.getElementById('texto').value = "";
            })
        }
    }
}

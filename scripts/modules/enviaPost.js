export default function (){

    let botao = document.getElementById('postar');


    // Função submit para enviar a API
    document.getElementById('postar').addEventListener('click', enviaPost);


    function enviaPost(){

        let form = document.getElementById('createPost');

        if (form.id.value != "" && form.texto.value != "" && form.titulo.value != ""){
            document.getElementById('postar').type = 'submit'
        }else {
            document.getElementById('postar').type = 'button'
        }


        if(botao.type === "button"){
            console.log('nao enviou');
        }
        else {



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

                    document.getElementById('id').value = "";
                    document.getElementById('titulo').value = "";
                    document.getElementById('texto').value = "";
            })
        }
    }
}

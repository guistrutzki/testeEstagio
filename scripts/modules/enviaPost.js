export default function (){

    // Função submit para enviar a API
    document.getElementById('postar').addEventListener('click', enviaPost);

    function enviaPost(){

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
                console.log(json)

                document.getElementById('id').value = "";
                document.getElementById('titulo').value = "";
                document.getElementById('texto').value = "";
            })
    }

}

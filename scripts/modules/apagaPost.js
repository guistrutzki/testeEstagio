export default function (){

    setInterval(timer, 1000);

    function timer(){
        let icones = document.querySelectorAll('i');

        icones.forEach( icone =>{
            icone.addEventListener('click', deletePost)
        });
    }



    function deletePost(event) {
        event.preventDefault();
        const idPostagem = event.currentTarget.getAttribute('id');

        let url = "https://jsonplaceholder.typicode.com/posts/" + idPostagem;
        let options = {
            method: "DELETE",
            headers: {
                "Content-type": "aplication/json; charset=utf-8"
            }
        };

        console.log("Post apagado ID:" + idPostagem);

        fetch(url, options)
            .catch(err =>{
                console.log(err)
        })

        document.getElementById(idPostagem).parentElement.parentElement.remove();
    }
}

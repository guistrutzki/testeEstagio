export default function (){

    document.getElementById('postar').addEventListener('click', validaInsert);

    function validaInsert(){
        let form = document.getElementById('createPost');
        let id = form.id.value;
        let texto = form.texto.value;
        let titulo = form.titulo.value;
        let idTitulo = document.getElementById('titulo');
        let idTexto = document.getElementById('texto');
        let idCampo = document.getElementById('id');

        if(id === ""){
            idCampo.value = "Por favor preencha este campo!";
            idCampo.classList.add('vazio');
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

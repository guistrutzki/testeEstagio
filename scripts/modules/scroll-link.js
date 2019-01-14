export default class ScrollLink {

    // Parâmetro links do método construtor é a lista de links/classes que serão selecionadas.
    constructor(links){
        this.links = document.querySelectorAll(links);
    }

    // Scrolla até a seção que foi selecionada.
    scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    // Observa os eventos nos links.
    addLinkEvent(){
        this.links.forEach( link =>{
            link.addEventListener('click', this.scrollToSection)
        });
    }

    // Método init para iniciar a função addLinkEvent().
    init(){
        this.addLinkEvent();
    }
}

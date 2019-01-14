export default class ScrollLink {
    constructor(links){
        this.links = document.querySelectorAll(links);
    }

    scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    addLinkEvent(){
        this.links.forEach( link =>{
            link.addEventListener('click', this.scrollToSection)
        });
    }

    init(){
        this.addLinkEvent();
    }
}
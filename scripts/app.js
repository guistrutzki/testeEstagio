// Imports
import initListaPosts from "./modules/listaPosts.js";
import initEnviaPost from "./modules/enviaPost.js";
import initBuscaPosts from "./modules/buscaPosts.js";
import ScrollLink from './modules/scroll-link.js';
import initApagaPost from './modules/apagaPost.js';
import initValidaForm from './modules/validaForm.js';

// Inits



initEnviaPost();
initListaPosts(10);
initValidaForm();
initBuscaPosts();
initApagaPost();


// Objetos
const scrollLink = new ScrollLink('.js-menu a[href^="#"]');
scrollLink.init();

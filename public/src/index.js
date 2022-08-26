import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-profile
        user="Bugatti"
        perfillogo="./Imagenes/Logo.jpg"
        vistas="View all 560 comments"
        dias="2 DAYS AGO"
        comentuser1="Daniel" comentuser2="BUGATTI W16 MISTRAL" 
        post="./Imagenes/Bugatti.jpg" 
        likes="446,791">
        </my-profile>
        `
    }
}

customElements.define("app-container",AppContainer);
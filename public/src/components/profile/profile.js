class MyProfile extends HTMLElement {
  //Metodo para declarar que atributos/parametros
  //vamos a utilizar en nuestra clase
  static get observedAttributes() {
    return ['user', 'perfillogo', 'post', 'likes', 'comentuser1', 'comentuser2', 'vistas', 'dias'];
  }

  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
  }
  //Se ejecuta cuando la clase está
  //montado en nuestra pagina/html
  connectedCallback() {
    this.render();
  }

  //Metodo que se encarga de ejecutarse
  //si algun valor cambia
  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="/src/components/profile/style.css"
          <section class="cartapost">
              <img class="borde"src="${this.perfillogo}"></img>
              <image class="points"src="./imagenes/points.png"></image>
              <image class="carro"src="${this.post}"></image> 
              <image class="Corazon" src="./imagenes/like.png"></image>
              <image class="compartir" src="./imagenes/Share.png"></image>
              <image class="coment" src="./imagenes/comentario.png"></image>
              <image class="guardar" src="./imagenes/Save.png" hspace="117" width="15"></image>
              <image class="cont" src="./imagenes/contenido.jpg"></image>

              
              <h1 class="nameuser">${this.user}</h1>
              <h1 class="comentuser"><b>${this.comentuser1}</b> ${this.comentuser2}</h1>
              <h1 class="day">${this.dias}</h1>
              <h1 class="like"><b>${this.likes} Likes</b></h1>
              <h1 class="views">${this.vistas}</h1>
          </section>
              `;
  }
}

customElements.define('my-profile', MyProfile);
export default MyProfile;
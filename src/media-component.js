import { LitElement, html, css } from 'lit-element';

class MediaComponent extends LitElement {
  static get properties() {
    return {
      //todos: { type: Array },
      sourceType: { type: String },
      file: { type: String }
    };
  }

  static get styles() {
     return css`
     img{
       max-width:300px;
     }
   `;
   }

  /*  constructor() {
    super();
    //this.todos = [];
    this.sourceType = "img";
    this.src = 'img/me.jpg';


    ${this.children.map(
        child => html`
        <div class="todo-item">
          <img sourceType=${this.sourceType} src=${this.src} />
        </div>
        `
      )
    }
  }*/

  render() {
    if(this.sourceType == "img"){
      return html`
        <img sourceType=${this.sourceType} src=${this.file} />
        `;
    }if(this.sourceType == "video/mp4"){
      return html`
      <video width="400" controls autoplay>
        <source src=${this.file} type=${this.sourceType}>
        Your browser does not support HTML video.
      </video>
      `;
    }
  }
}customElements.define('media-component', MediaComponent);

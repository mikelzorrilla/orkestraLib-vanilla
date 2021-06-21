import { LitElement, html } from 'lit-element';

class OrkestraUI extends LitElement {
  connectedCallback() {
		super.connectedCallback()
    console.log(this.children);
	}
  // Implement `render` to define a template for your element.
  render(){
    /**
     * Return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function.
     */
    return html`
      <div>
        <p>A paragraph</p>
        <slot></slot>

      </div>
    `;
  }
  getChildren(){
    return this.children;
  }
}
customElements.define('orkestra-ui', OrkestraUI);

import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <locale-picker class="d-block py-2"></locale-picker>
      <div
        class="container d-flex flex-wrap justify-content-center align-items-center py-3"
      >
        <p class="col-md-4 mb-0 text-center">${msg(`Story App oleh Khalid Jundullah`)}</p>
      </div>
    `;
  }
}

customElements.define('footer-app', FooterApp);
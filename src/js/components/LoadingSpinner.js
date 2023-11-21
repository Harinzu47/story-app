import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";

class LoadingSpinner extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="loader-spinner" id="loaderSpinner">
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  }
}

customElements.define("loader-spinner", LoadingSpinner);

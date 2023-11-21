import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";

class ShowPassword extends LitWithoutShadowDom {
  constructor() {
    super();
    this.showPassword = false;
  }

  render() {
    return html`
      <input
        class="form-check-input"
        id="showPassword"
        type="checkbox"
        @click=${() => this._togglePassword()}
      />
      <label for="showPassword" class="eye-icon"
        >${this.showPassword
          ? html`<i class="bi-eye-slash"></i>`
          : html`<i class="bi-eye"></i>`}</label
      >
    `;
  }

  _togglePassword() {
    this.showPassword = !this.showPassword;
    const passwordText = document.getElementById("validationCustomPassword");
    if (passwordText) {
      passwordText.type = this.showPassword ? "text" : "password";
    }
  }
}

customElements.define("show-password", ShowPassword);

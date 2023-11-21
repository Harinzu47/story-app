import { css, html, LitElement } from "lit";

class NavLink extends LitElement {
  static styles = css`
    .menu {
      list-style: none;
      padding: 0;
      margin: 10px;
    }

    .link {
      text-decoration: none;
      color: #fff;
      display: block;
      padding: 10px;
      transition: background-color 0.2s;
      font-weight: bold;
    }

    .link:hover {
      background-color: #84b082;
      color: #fff;
      border-radius: 5px;
    }
  `;

  static properties = {
    content: { type: String, reflect: true },
    to: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <li class="menu">
        <a class="link" href="${this.to}">${this.content}</a>
      </li>
    `;
  }
}

customElements.define("nav-link", NavLink);

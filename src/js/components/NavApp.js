import { LitElement, css, html } from "lit";

class NavApp extends LitElement {
  static styles = css`
    .navbar {
      background-color: #b2c9ab;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px;
      color: #fff;
    }

    .left {
      display: flex;
      align-items: center;
    }

    .app-name {
      font-size: 24px;
      font-weight: bold;
      text-decoration: none;
      color: #fff;
      margin-right: 20px;
    }

    .right {
      display: flex;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <nav class="navbar">
        <div class="left">
          <a href="#" class="app-name">Story App</a>
        </div>
        <div class="right">
          <nav-links></nav-links>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-app", NavApp);

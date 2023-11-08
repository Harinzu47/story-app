import { css, html, LitElement } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class NavLinks extends LitElement {
    static styles = css`
    button,
    ul button {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    @media screen and (max-width: 920px) {
      button {
        display: block;
        font-size: 18px;
        border: none;
        background: none;
        cursor: pointer;
      }

      button.hide {
        display: none;
      }

      ul {
        position: fixed;
        right: -1000px;
      }

      ul.open {
        display: flex;
        flex-direction: column;
        background-color: #B2C9AB; 
        color: white;
        position: absolute;
        top: 27px; 
        left: 0;
        right: 0;
        z-index: 1000;
      }

      ul button {
        display: block;
      }

      ul nav-link {
        width: 100%;
      }
    }
  `;
  
    constructor() {
      super();
      this.menuActive = false;
      updateWhenLocaleChanges(this);
    }
  
    render() {
      return html`
      <button @click=${() => this._showNavLink()} aria-label="navigation-menu-open">☰</button>
      <ul>
        <button @click=${() => this._hideNavLink()} aria-label="navigation-menu-close">X</button>
        <nav-link content="${msg(`Dasbor`)}" to="/"></nav-link>
        <nav-link content="${msg(`Tambah Cerita`)}" to="/stories/add.html"></nav-link>
      </ul>
      `;
    }

    _showNavLink() {
        const ul = this.shadowRoot.querySelector('ul');
        const button = this.shadowRoot.querySelector('button');
        ul.classList.add('open');
        button.classList.add('hide');
      }
    
      _hideNavLink() {
        const ul = this.shadowRoot.querySelector('ul');
        const button = this.shadowRoot.querySelector('button');
        ul.classList.remove('open');
        button.classList.remove('hide');
      }
  }
  
  customElements.define('nav-links', NavLinks);
  
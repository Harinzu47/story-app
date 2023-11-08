import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CardDashboard extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    storyID: { type: String, reflect: true },
    description: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.name = '';
    this.storyID = '';
    this.description = '';
    this.photoUrl = '';
    this.createdAt = '';
  }

  render() {
    return html`
      <div class="card mt-3 border border-white">
        <img src="${this.photoUrl}" class="card-img-top" alt="${this.name}" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title text-center">${this.name}</h5>
          <p class="card-text">${this.description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">${this.formatDate(this.createdAt)}</small>
          <a class="btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#recordDetailModal" data-record-id="${this.storyID}">Show Detail</a>
        </div>
      </div>
    `;
  }

  formatDate(isoDate) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString('id-ID', options);
  }
}

customElements.define('card-dashboard', CardDashboard);

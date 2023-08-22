const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url('user-card.css');
  </style>

  <div class="user-card">
    <h3 part="wc-title" class="user-card__title"></h3>
    <img class="user-card__image">
    <p><em><slot name="dates"></slot></em></p>
    <p class="user-card__desciption"><slot name="about"></slot></p>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('.user-card__title').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('.user-card__image').src = this.getAttribute('avatar');

  }
}

window.customElements.define('user-card',UserCard);
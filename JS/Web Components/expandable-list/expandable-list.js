
const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url('expandable-list.css');
  </style>

  <button class="expandable-list__button"></button>
  `;

class ExpandableList extends HTMLUListElement {
  constructor() {
    super()

    this.classList.add("expandable-list")
    this.appendChild(template.content.cloneNode(true))
    this.toggleBtn = this.querySelector(".expandable-list__button")
    this.toggleBtn.addEventListener("click", () => {
      this.dataset.expanded = !this.isExpanded
    })


  }

  get isExpanded() {
    return this.dataset.expanded !== "false" && this.dataset.expanded != null
  }

}

customElements.define("expandable-list", ExpandableList, { extends: "ul" })

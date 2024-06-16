const template = document.createElement("template");
template.innerHTML = /* html */ `
    <section class="my-5">
        <h2 class="mb-4">Category</h2>

        <ul class="categories-list d-flex gap-3 p-0">
            <li class="category-show">
                <img src="https://placehold.co/1280x720" />
            </li>
            <li class="category-show">
                <img src="https://placehold.co/1280x720" />
            </li>
            <li class="category-show">
                <img src="https://placehold.co/1280x720" />
            </li>
            <li class="category-show">
                <img src="https://placehold.co/1280x720" />
            </li>
            <li class="category-show">
                <img src="https://placehold.co/1280x720" />
            </li>
            <li class="category-show">
                <img src="https://placehold.co/1280x720" />
            </li>
            <li class="category-show">
                <img src="https://placehold.co/1280x720" />
            </li>
        </ul>
    </section>
`;

customElements.define(
  "nb-ss-category",
  class extends HTMLElement {
    constructor() {
      super();
      this.append(template.content.cloneNode(true));
    }
  }
);

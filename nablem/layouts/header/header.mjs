const template = document.createElement("template");
template.innerHTML = /* html */ `
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container">
            <a class="navbar-brand d-md-block d-lg-none" href="/">Nablem</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nablem-navbar" aria-controls="nablem-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="nablem-navbar">
                <div class="d-flex flex-md-column flex-lg-row justify-content-between align-items-center w-100 py-md-3 py-lg-0 gap-md-2 gap-lg-0">
                    <a class="navbar-brand d-md-none d-lg-block" href="/">Nablem</a>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" name="q" placeholder="Search Nablem..." aria-label="Search">
                        <button class="btn" type="submit"><i class="bi bi-search"></i></button>
                    </form>

                    <div class="d-flex gap-2 align-items-center">
                        <div class="form-check form-switch d-flex align-items-center">
                            <input type="checkbox" id="dark-mode-toggler" class="form-check-input" role="switch">
                            <label for="dark-mode-toggler" class="form-check-label ms-2">
                                <i class="bi bi-moon"></i>
                            </label>
                        </div>

                        <div class="dropdown">
                            <button class="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="user-dropdown"></button>

                            <ul class="dropdown-menu">
                                <li class="dropdown-item" href="#">Logout :&lpar;</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
`;

customElements.define(
  "nb-header",
  class extends HTMLElement {
    constructor() {
      super();
      this.append(template.content.cloneNode(true));
      this.querySelector(
        "#user-dropdown"
      ).innerHTML = `<svg width="32" height="32" data-jdenticon-value="${Math.floor(
        Math.random() * 1000
      )}"></svg>`;
    }
  }
);

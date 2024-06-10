const template = document.createElement("template");
template.innerHTML = /* html */ `
    <header class="nablem-header">
        <nb-container>
            <div class="brand-wrapper">
                <h1 class="brand">Nablem</h1>
            </div>

            <nav>
                <ul>
                    <li><a href="index.html">Início</a></li>
                </ul>
            </nav>
        </nb-container>
    </header>
`;

customElements.define(
    "nb-header",
    class extends HTMLElement {
        constructor() {
            super();

            this.append(template.content.cloneNode(true));
        }

        connectedCallback() {

        }
    }
);

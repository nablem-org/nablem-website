export function component(name, template, constructor) {
  const templateEl = document.createElement("template");
  templateEl.innerHTML = atob(template);

  const actions = new constructor();

  customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super();

        this.connectedCallback = this.connectedCallback.bind(this);
        this.disconnectedCallback = this.disconnectedCallback.bind(this);

        const clone = templateEl.content.cloneNode(true);
        this.append(clone);

        if (actions.onCreate) actions.onCreate();
      }

      connectedCallback() {
        if (actions.onConnect) actions.onConnect(this);
      }

      disconnectedCallback() {
        if (actions.onDisconnect) actions.onDisconnect(this);
      }
    }
  );
}

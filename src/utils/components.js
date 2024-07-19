/**
 * @typedef {object} ComponentActions
 * @property {(el: HTMLElement) => void} onCreate Executed after the creation of the element.
 * @property {(el: HTMLElement) => void} onConnect Executed after the element is attached to another element.
 * @property {(el: HTMLElement) => void} onDisconnect Executed after the element is disattached from another element.
 */

/**
 * This is our abstraction layer for creating a Web Component more easily.
 * It also introduces privacy for the components since their properties and
 * functions don't need to be attached to the component class.
 *
 * The templates must be provided encoded in base64 since this file will get
 * minified and bundled into a single JavaScript file. All HTML templates
 * must be imported into the JavaScript (we use esbuild for that).
 *
 * The constructor must receive a function that returns a
 * {@link ComponentActions} object. The actions will be called by the Web
 * Component whenever they happen.
 *
 * @example
 *     // ESBuild converts this into: var template = "BASE64_ENCODED_TEMPLATE_HTML"
 *     import template from "template.html";
 *
 *     component("nb-component", template, () => {
 *         return {
 *             onCreate(el) { console.log("Created!") }
 *         }
 *     });
 *
 * @param {string} name The name of the component
 * @param {string} template A template encoded in Base64.
 * @param {() => ComponentActions} constructor A function that will provide custom actions for certain events from the component.
 */
export function component(name, template, constructor) {
  const templateEl = document.createElement("template");
  templateEl.innerHTML = atob(template);

  const actions = constructor();

  customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super();

        this.connectedCallback = this.connectedCallback.bind(this);
        this.disconnectedCallback = this.disconnectedCallback.bind(this);

        const clone = templateEl.content.cloneNode(true);
        this.append(clone);

        if (actions.onCreate) actions.onCreate(this);
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

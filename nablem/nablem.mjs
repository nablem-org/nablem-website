/**
 * Main Nablem module script file.
 * Imports each component and layout.
 *
 * @version 1.0.0
 */

// Components must be initialized first since layouts may use 'em.
import "./components/components.mjs";
import "./layouts/layouts.mjs";

window.onload = () => {
  document.body.append(document.createElement("nb-loader"));
};

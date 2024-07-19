import { component } from "../../../utils/components";
import template from "./template.html";

const templateEl = document.createElement("template");
templateEl.innerHTML = template;

component("nb-modal-report", template, function () {
  this.onCreate = function () {
    console.log("Created!");
  };
});

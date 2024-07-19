import { component } from "../../utils/components";
import template from "./template.html";

component("nb-header", template, function () {
  function setUserImage() {
    const dropdown = document.getElementById("user-dropdown");
    dropdown.innerHTML = `<svg width="32" height="32" data-jdenticon-value="${new Date().getTime()}"></svg>`;
  }

  function setSearchInput() {
    const lq = sessionStorage.getItem("lq");
    if (lq) {
      const search = document.getElementById("search-box");
      search.value = lq;
      const updateLq = () => sessionStorage.setItem("lq", search.value);
      search.onkeydown = updateLq;
      search.onchange = updateLq;
    }
  }

  function setSearchFrom(el) {
    const url = new URL(location.href);
    el.querySelector("input[name=from]").value = url.pathname;
  }

  this.onConnect = function (el) {
    setUserImage();
    setSearchInput();
    setSearchFrom(el);
  };
});

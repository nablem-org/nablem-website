customElements.define(
  "nb-loader",
  class extends HTMLElement {
    constructor() {
      super();

      this._addNablemStyle();
      this._addBootstrap();
      this._addBootstrapIcons();
      this._addJdenticon();

      this.remove();
    }

    _addNablemStyle() {
      const styles = document.createElement("link");
      styles.href = "/nablem/nablem.css";
      styles.rel = "stylesheet";
      document.head.append(styles);
    }

    _addBootstrap() {
      const styles = document.createElement("link");
      const script = document.createElement("script");

      styles.href =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
      styles.crossOrigin = "anonymous";
      styles.rel = "stylesheet";

      script.src =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
      script.crossOrigin = "anonymous";

      document.body.append(script);
      document.head.append(styles);
    }

    _addBootstrapIcons() {
      const styles = document.createElement("link");
      styles.href =
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
      styles.crossOrigin = "anonymous";
      styles.rel = "stylesheet";
      document.head.append(styles);
    }

    _addJdenticon() {
      const script = document.createElement("script");

      script.src =
        "https://cdn.jsdelivr.net/npm/jdenticon@3.3.0/dist/jdenticon.min.js";
      script.crossOrigin = "anonymous";
      script.async = true;
      script.integrity =
        "sha384-LfouGM03m83ArVtne1JPk926e3SGD0Tz8XHtW2OKGsgeBU/UfR0Fa8eX+UlwSSAZ";

      document.body.append(script);
    }
  }
);

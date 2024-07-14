require("esbuild").build({
    entryPoints: ['./js/index.js'],
    outfile: "./js/nablem.min.js",
    minify: true,
    bundle: true,
    platform: "browser",
    external: Object.keys(require("./package.json").dependencies || {}),
    loader: {
        ".html": "text",
        ".png": "file"
    },
});
console.log("Production built");

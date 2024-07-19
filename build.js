/**
 * Nablem Build Script
 *
 * Nablem's website build is composed by these stages:
 *  1. Generating the static content by rendering each Mustache template.
 *  2. Bundling every JavaScript file into a single script.
 *  3. Copying public files and folders recursively
 */

const { promises: fs } = require("fs");
const path = require("path");

// Later-loaded modules
var esbuild, pug;

const IS_DEVELOPMENT = process.argv.includes("-d");
const BUILD_ROOT = __dirname;

const DIST_FOLDER = path.join(BUILD_ROOT, "dist");
const PUBLIC_FOLDER = path.join(BUILD_ROOT, "public");
const SRC_FOLDER = path.join(BUILD_ROOT, "src");

/*** Logs ***/

function info(...text) {
  console.log(`[INFO] ${text.join(" ")}`);
}

function error(...text) {
  console.log(`[ERROR ${new Date().toLocaleString()}] ${text.join(" ")}`);
}

function panic(...text) {
  error(...text);
  process.exit(1);
}

/*** Functions ***/

async function prepareDistFolder() {
  try {
    await fs.access(DIST_FOLDER, fs.constants.R_OK);
    info("Another build was detected. Cleaning space for new build.");
    await fs.rm(DIST_FOLDER, { recursive: true, force: true });
  } catch {}

  await fs.mkdir(DIST_FOLDER);
}

async function getPageTemplates() {
  const pages = await fs.readdir(path.join(SRC_FOLDER, "pages"));
  return pages.filter((t) => t.match(/(.pug)$/));
}

async function createPage() {}

async function renderTemplate(template, dst) {
  info(`Rendering ${template} into ${dst.replace(DIST_FOLDER, "")}`);
  const content = pug.renderFile(path.join(SRC_FOLDER, "pages", template));
  await fs.writeFile(dst, content);
}

/*** Main ***/

(async () => {
  console.log(`Nablem Build Script (${new Date().toLocaleString()})`);

  info("Loading modules...");

  try {
    esbuild = require("esbuild");
  } catch {
    panic("esbuild dependency is not installed properly.");
  }

  try {
    pug = require("pug");
  } catch {
    panic("pug dependency is not installed properly.");
  }

  await prepareDistFolder();

  var templates = await getPageTemplates();
  info(
    `Found ${templates.length} page templates: ${templates
      .map((f) => f.split(".")[0])
      .join(", ")}.`
  );

  if (!templates.includes("index.pug")) {
    panic("No index.pug template page available.");
  }

  // Removing index.pug from templates since it is a special file.
  templates = templates.filter((t) => t != "index.pug");

  await renderTemplate("index.pug", path.join(DIST_FOLDER, "index.html"));

  for (let template of templates) {
    const tpath = path.join(DIST_FOLDER, template.split(".")[0]);
    await fs.mkdir(tpath);
    await renderTemplate(template, path.join(tpath, "index.html"));
  }

  info("Bundling JavaScript scripts and components.");
  esbuild.build({
    entryPoints: ["./src/scripts/nablem.js"],
    outfile: "./dist/src/js/nablem.min.js",
    minify: true,
    bundle: true,
    platform: "browser",
    external: Object.keys(require("./package.json").dependencies || {}),
    loader: {
      ".html": "base64",
      ".png": "file",
    },
  });

  info("Copying public resources.");
  await fs.cp(PUBLIC_FOLDER, DIST_FOLDER, { recursive: true });
})();

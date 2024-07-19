# Nablem Website

Welcome to Nablem's website repository. This project is, and will always be,
developed under no frameworks nor libraries that fills the client with
JavaScript files. Only pure JavaScript.

## Building & Running

TL;DR `npm run build` and then `npm run server`

Our website requires building HTML and JavaScript files so that they can be
statically provided, while maintaing it's development quick 'n easy. This is
the dogma of this project.

We provide a script file called `build.js` that the `build` command, defined in
the package config JSON, uses for building the project. This is the build
process:

1. Parse `index.pug` page template;
2. Parse remaining page templates;
3. Bundle JavaScript files;
4. Copy all `/public/` files.

## Web Components

We use primarily Web Components for dynamic content in the page. Yes, we don't
render with our servers. This allow us to keep things simple, and users only
request the data they need whenever they need it.

The structure for this project was designed to be simple, yet readable. Each
file contains it's own content, we don't write HTML in JavaScript, all
`<template>` tags are kept in-memory, rather than bloating HTML and we keep
things short by only creating Web Components for elements that trully need
to be dynamic.

Everything that can be static, is made to be static. We heavily rely on mixing
Pug and Web Components to reach that. They just fit _very well_ together.

We also provide a small API for creating Web Components through the `component`
function. That API allows components to have private properties and functions
since you don't need to create them in the component class. It's secure, rapid
and simple.

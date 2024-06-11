# Nablem Module

This is the main module that the website uses. It follows a simple folder
structure as described in the next heading.

## Folder Structure

| Folder | Description |
|---|---|
| 📁 components | Custom elements that doesn't require other components (units). |
| 📁 layouts | Common components that compose the website's layout. |

## File Structure

Each folder must contain:
- 1 or none CSS files;
- 1 Module JavaScript (.mjs) file;
- 0 or more subfolders (that follows the same rules).

## Imports

Each CSS and JavaScript file must follow these rules:

- They either declare symbols (classes, functions, custom elements) or import other files from their subfolders.

DO:
```css
@import "/nablem/components/button/button.css";
```

DON'T:
```css
@import "/nablem/components/button/button.css";

/* This is declaring a class style in a file that's importing another CSS file. */
.button { /* ... */ }
```

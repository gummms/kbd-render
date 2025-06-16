# KBD-Render Plugin for Obsidian

This plugin renders ´key´ syntax as a styled keyboard <kbd>key</kbd>.

# Features

- Automatically writes the `<kbd></kbd>` HTML tag with the `´example´` markdown;
- Live editor display.

# Installation

1. Download the `main.js`, `styles.css` and `manifest.json` files;
2. Create a folder called `kbd-render` and paste all the files in it;
3. Paste the `kbd-render` folder in `Obsidian\Vault\.obsidian\plugins\`;
4. Turn on the plugin in Obsidian settings.

# Usage

Simply type anything between two <kbd>´</kbd> and the plugin will automatically change the markdown to the `<kbd></kbd>` HTML.

### Example:

`´ESC´` becomes `<kbd>ESC</kbd>`, which is rendered like <kbd>ESC</kbd>.

# Future updates:

- A page at the Obsidian community plugins store;
- Markdown shortcut customization (currently only `´example´` works);
- Style customization;
- A function to hide the HTML tag while editing, showing only the markdown;
- More (maybe).

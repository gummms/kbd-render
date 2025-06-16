const { Plugin } = require("obsidian");

module.exports = class KbdRenderPlugin extends Plugin {
  async onload() {
    console.log("Loading KBD Hot-swap Plugin (with cursor fix)");

    this.registerEvent(
      this.app.workspace.on("editor-change", (editor, view) => {
        const cursor = editor.getCursor();
        const line = editor.getLine(cursor.line);
        const kbdRegex = /!([^!]+)!/g;
        const updatedLine = line.replace(kbdRegex, "<kbd>$1</kbd>");

        if (line !== updatedLine) {
          const originalPrefix = line.substring(0, cursor.ch);

          const updatedPrefix = originalPrefix.replace(
            kbdRegex,
            "<kbd>$1</kbd>"
          );

          const cursorOffset = updatedPrefix.length - originalPrefix.length;

          const newCursor = {
            line: cursor.line,
            ch: cursor.ch + cursorOffset,
          };

          const lineRange = {
            from: { line: cursor.line, ch: 0 },
            to: { line: cursor.line, ch: line.length },
          };

          editor.replaceRange(updatedLine, lineRange.from, lineRange.to);
          editor.setCursor(newCursor);
        }
      })
    );
  }

  onunload() {
    console.log("Unloading KBD Hot-swap Plugin");
  }
};

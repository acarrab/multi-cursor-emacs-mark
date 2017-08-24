# multi-cursor-emacs-mark : vscode extension

This is an extension written to mimic emacs marking behavior with minimal changes to vscode.

It is **using default cursor movement commands** in order to **support** what vscode chooses to support, which means it supports **multi-cursors**! 

## Functionality

Gives access to new markable commands and additional miscellaneous commands that can be used however you would like. (like a replacement function for cut which also cancels mark when you cut text).  The commands implemented can be put together to mimic whatever behavior you would like by using the commands given. That can be done by using [Macros](https://marketplace.visualstudio.com/items?itemName=geddski.macros) to add support for things that are not supported yet. You can also add feature requests on [github](https://github.com/acarrab/multi-cursor-emacs-mark).

## Future Additions

Marking is not in an editor context right now. So, if you enable marking in one editor window, it is enabled globally.
This would be something that I would add in the settings or even add alternate commands that have local editor scope.

## Example

`keybindings.json`
```json
    {
        "key": "ctrl+m",
        "command": "extension.emacsLikeMarking.setMark",
        "when": "editorTextFocus"
    }
```


## Command List

Cursor commands function just like default commands except that they select when the mark is set.

- `extension.emacsLikeMarking.setMark`
- `extension.emacsLikeMarking.cancelMark`
- `extension.emacsLikeMarking.toggleMark`
- `extension.emacsLikeMarking.markableCommands.cursorBottom`
- `extension.emacsLikeMarking.markableCommands.cursorDown`
- `extension.emacsLikeMarking.markableCommands.cursorEnd`
- `extension.emacsLikeMarking.markableCommands.cursorHome`
- `extension.emacsLikeMarking.markableCommands.cursorLeft`
- `extension.emacsLikeMarking.markableCommands.cursorPageDown`
- `extension.emacsLikeMarking.markableCommands.cursorPageUp`
- `extension.emacsLikeMarking.markableCommands.cursorRight`
- `extension.emacsLikeMarking.markableCommands.cursorTop`
- `extension.emacsLikeMarking.markableCommands.cursorUp`
- `extension.emacsLikeMarking.markableCommands.cursorWordEndRight`
- `extension.emacsLikeMarking.markableCommands.cursorWordStartLeft`
- `extension.emacsLikeMarking.markableCommands.cursorLineStart`
- `extension.emacsLikeMarking.markableCommands.cursorWordEndLeft`
- `extension.emacsLikeMarking.markableCommands.cursorWordLeft`
- `extension.emacsLikeMarking.markableCommands.cursorWordRight`
- `extension.emacsLikeMarking.markableCommands.cursorWordStartRight`


## Known Issues

Slow initial time to be able to use commands

## Release Notes

### 1.0.0

Initial release of multi-cursor-emacs-mark

--- 
**Enjoy!**
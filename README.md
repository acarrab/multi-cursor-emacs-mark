# multi-cursor-emacs-mark README

This is an extension written to mimic emacs marking behavior with minimal changes to vscode, but follows a slightly different schema than emacs keybindings.

It is **using default cursor movement commands** in order to **support** what vscode chooses to support, which means it supports **multi-cursors**! 

## Functionality

Gives access to new markable commands and additional miscellaneous commands that can be used however you would like. (like a replacement function for cut which also cancels mark when you cut text). It has incomplete support, but the given functions will do most of the work so you can use an extension, like [Macros](https://marketplace.visualstudio.com/items?itemName=geddski.macros), to add support for things that are not supported yet. You can also add feature requests on my [github](https://github.com/acarrab/multi-cursor-emacs-mark).

I tried to have each command do minimal amount of overhead work. All it really is doing is toggling command functionality based on hidden variable so I can reuse vscodes given commands.

## future upcoming additions

Marking is not currently editor specific, but will be in the next version. I.e. if you enable marking in one editor window, it is enabled globally.
This would be something that I would add in the settings or even add alternate commands that have local editor scope.

## Added commands 

I recommend that you use these as so when setting keyboard shortcuts, just for consistency with default command usage.

`keybindings.json`
```json

    {
        "key": "ctrl+m",
        "command": "extension.emacsLikeMarking.setMark",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+m",
        "command": "extension.emacsLikeMarking.cancelMark",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+m",
        "command": "extension.emacsLikeMarking.toggleMark",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+x",
        "command": "extension.emacsLikeMarking.cut",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+n",
        "command": "extension.emacsLikeMarking.markableCommands.cursorDown",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+p",
        "command": "extension.emacsLikeMarking.markableCommands.cursorUp",
        "when": "editorTextFocus"
    }

```


### List of commands
Cursor commands function just like default commands except that they follow the marking properties

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
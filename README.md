# multi-cursor-emacs-mark : vscode extension

This is an extension written to mimic emacs marking behavior with minimal changes to vscode.

It is **using default cursor movement commands** in order to **support** what vscode chooses to support, which means it supports **multi-cursors**!

If you would like me to create a key-map based on how I have it layed out, let me know. I generally think people would have different preferences though and have therefore just made the commands available.

## Functionality

Gives access to new markable commands and additional miscellaneous commands that can be used however you would like. The commands implemented can be put together to mimic whatever behavior you would like by using the commands given. `setMark` and `cancelMark` have some logic behind them, but the rest of it should be able to be done with `macros`. That can be done by using [The Macros Extension](https://marketplace.visualstudio.com/items?itemName=geddski.macros) to add support for things that are not supported or not included by default. (I have also included macro examples) You can also add feature requests on [github](https://github.com/acarrab/multi-cursor-emacs-mark).

## Setup Instructions

There are a few steps in order to set these keybindings as you would like, but I have included some examples that you yourself can insert into your settings/keybindings.

- If you would like to use emacs like bindings that I use
    1. Disable Alt modifier for menu commands
    2. Add keybindings in keybindings.json
        - Optionally you could use my [example keybindings](exampleKeybindings.json), on my github, which tries to reduce the number of conflicts with microsoft keybindings by using only combinations of `ctrl`/`alt`/`shift` with `n`/`p`/`f`/`b`
    3. Resolve conflicts with those keys however you would like.
- In order to fix mark cancellation that should go with certain keybindings
    1. Install the extension [Macros](https://marketplace.visualstudio.com/items?itemName=geddski.macros)
    2. Look at my [Macro defaults](MacroDefaults.json) that are in the github repository
    3. Open your user settings and insert the `"macros" : {}` block from MacroDefaults.json in the comment at the end, or at the bottom of this readme file. (They are the same)
    4. Add keybindings from `MacroDefaults.json` on my github to your keybindings.json file

## Future Additions

Marking is not in an editor context right now. So, if you enable marking in one editor window, it is enabled globally.
This would be something that I would add in the settings, or add mark `Set`/`Cancel`/`Toggle` commands that work in a scope context.

## Example

None of the keys are initially bound and you must decide how to bind your keys. I would recommend using something similar to this. If you are curious about the basic setup that I am using you can check out [exampleKeybindings.json](exampleKeybindings.json)

This is the basic way that keybindings should be bound

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

**Setting state of mark**

- `extension.emacsLikeMarking.setMark`
- `extension.emacsLikeMarking.cancelMark`
- `extension.emacsLikeMarking.toggleMark`

**Markable Commands**

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

## Some example macros

Paste this into user settings file after installing [Macros](https://marketplace.visualstudio.com/items?itemName=geddski.macros) extension

```json
"macros": {
        // ---------- Cut and paste commands to cancel mark ----------
        "editor.action.clipboardCutAction_cancelMark": [
            "editor.action.clipboardCutAction",
            "extension.emacsLikeMarking.cancelMark"
        ],
        "editor.action.clipboardPasteAction_cancelMark": [
            "editor.action.clipboardPasteAction",
            "extension.emacsLikeMarking.cancelMark"
        ],

        "cut_cancelMark": [
            "cut",
            "extension.emacsLikeMarking.cancelMark"
        ],
        "paste_cancelMark": [
            "paste",
            "extension.emacsLikeMarking.cancelMark"
        ],

        "default:cut_cancelMark": [
            "default:cut",
            "extension.emacsLikeMarking.cancelMark"
        ],
        "default:paste_cancelMark": [
            "default:paste",
            "extension.emacsLikeMarking.cancelMark"
        ],

        "deleteLeft_cancelMark": [
            "deleteLeft",
            "extension.emacsLikeMarking.cancelMark"
        ],
        "deleteWordLeft_cancelMark": [
            "deleteWordLeft",
            "extension.emacsLikeMarking.cancelMark"
        ],

        // ---------- delete commands that also cancel mark ----------
        "editor.action.deleteLines_cancelMark": [
            "editor.action.deleteLines",
       n     "extension.emacsLikeMarking.cancelMark"
        ],

        "deleteAllLeft_cancelMark": [
            "deleteAllLeft",
            "extension.emacsLikeMarking.cancelMark"
        ],

        "deleteAllRight_cancelMark": [
            "deleteAllRight",
            "extension.emacsLikeMarking.cancelMark"
        ],

        "deleteWordEndLeft_cancelMark": [
            "deleteWordEndLeft",
            "extension.emacsLikeMarking.cancelMark"
        ],

        "deleteWordEndRight_cancelMark": [
            "deleteWordEndRight",
            "extension.emacsLikeMarking.cancelMark"
        ],

        "deleteWordStartLeft_cancelMark": [
            "deleteWordStartLeft",
            "extension.emacsLikeMarking.cancelMark"
        ],

        "deleteWordStartRight_cancelMark": [
            "deleteWordStartRight",
            "extension.emacsLikeMarking.cancelMark"
        ]
    }
```

## Known Issues

Slow initial time to be able to use commands

`ctrl+x` is showing weird behavioral problems and I may have to define a withdraw text function to replace macro created command.

## Release Notes

### 1.1

Added some of my user defined macros for others who would like to use them

### 1.0

Initial release of multi-cursor-emacs-mark

--- 
**Enjoy!**
'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
var executeCommand = vscode.commands.executeCommand;


// Some okay, but currently unnecessary optimizations would be
/// 1. Removing ternary and toggle commands as the are called on the first call
/// 2. Not creating all MarkableCommands classes at once

class MarkableCommands {
    static markIsSet: boolean = false;
    command: string;
    toggleCommand: string;
    constructor(command: string, toggleCommand: string) {
        this.command = command;
        this.toggleCommand = toggleCommand;
    }
    getCommand() {
        var myScope = this;
        return function () {
            executeCommand(MarkableCommands.markIsSet ? myScope.toggleCommand : myScope.command);
        }
    }
    getCommandName() {
        return "extension.emacsLikeMarking.markableCommands." + this.command;
    }
}

export function activate(context: vscode.ExtensionContext) {
    let cursorCommands = [
        "cursorBottom",
        "cursorDown",
        "cursorEnd",
        "cursorHome",
        "cursorLeft",
        "cursorPageDown",
        "cursorPageUp",
        "cursorRight",
        "cursorTop",
        "cursorUp",
        "cursorWordEndRight",
        "cursorWordStartLeft",
        "cursorLineStart",
        "cursorWordEndLeft",
        "cursorWordLeft",
        "cursorWordRight",
        "cursorWordStartRight"
    ];

    cursorCommands.forEach(function (command) {
        var toggleCommand = new MarkableCommands(command, command + "Select");
        context.subscriptions.push(
            vscode.commands.registerTextEditorCommand(toggleCommand.getCommandName(), toggleCommand.getCommand())
        );
    });
    // TODO: additional features would be active editor aware marking
    function setMark() {
        executeCommand("cancelSelection");
        MarkableCommands.markIsSet = true;
    }
    function register(cmdName, cmd) {
        context.subscriptions.push(vscode.commands.registerCommand(cmdName, cmd));
    }
    register("extension.emacsLikeMarking.setMark", setMark);
    function cancelMark() {
        executeCommand("cancelSelection"); 
        MarkableCommands.markIsSet = false;
     }
    register("extension.emacsLikeMarking.cancelMark", cancelMark);
 
    function toggleMark() { 
        if (MarkableCommands.markIsSet) { cancelMark(); }
        else { setMark(); } 
     }
    register("extension.emacsLikeMarking.toggleMark", toggleMark);

    //additional cancel commands
    register("extension.emacsLikeMarking.editorCut", () => { executeCommand("editor.action.clipboardCutAction"); cancelMark(); });
    register("extension.emacsLikeMarking.cancelSelectionAndMark", () => { executeCommand("cancelSelection"); cancelMark(); });
}

export function deactivate() {
    MarkableCommands.markIsSet = false;
}
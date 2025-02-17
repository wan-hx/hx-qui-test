var hx = require("hbuilderx");
var path = require('path');

const simple_example = require('./example_simple.js');
const CatCustomEditorProvider = require('./vue_custom.js');

function activate(context) {

    hx.window.registerCustomEditorProvider("abcEditor", new CatCustomEditorProvider());
    hx.vue.defineComponent('abcEditor',
        path.resolve(context.extensionPath, "vue_custom.vue"));

    let disposable = hx.commands.registerCommand('extension.helloWorld', async (argv) => {
        await simple_example(context);
    });
    context.subscriptions.push(disposable);
};

function deactivate() {};

module.exports = {
    activate,
    deactivate
};

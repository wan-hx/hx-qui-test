const hx = require("hbuilderx");
const path = require('path');

const simple_example = require('./example_simple/example_simple.js');
const CatCustomEditorProvider = require('./example_custom/vue_custom.js');

async function defineVue(context) {
    const vueFile = path.resolve(context.extensionPath, "./example_custom/vue_custom.vue")
    await hx.vue.defineComponent('abcEditor2', vueFile);
};

function activate(context) {

    // defineVue(context);
    hx.window.registerCustomEditorProvider("abcEditor", new CatCustomEditorProvider());
    // hx.vue.defineComponent('abcEditor', path.resolve(context.extensionPath, "./example_custom/vue_custom.vue"));

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

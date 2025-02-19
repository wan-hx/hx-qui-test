const hx = require("hbuilderx");
const path = require('path');

const simple_example = require('./example_simple/example_simple.js');
const CatCustomEditorProvider = require('./example_custom/vue_custom.js');


function activate(context) {

    // defineVue(context);
    hx.window.registerCustomEditorProvider("abcEditor", new CatCustomEditorProvider());

    // hx.window.registerCustomEditorProvider("abcView", new CatViewEditorProvider());

    // hx.vue.defineComponent('abcView2', path.resolve(__dirname, './example_view/vue_view.vue'));
    // hx.window.registerViewProvider("abcView",{
    //     create(){
    //         return hx.vue.createComponent("abcView2");
    //     }
    // });

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

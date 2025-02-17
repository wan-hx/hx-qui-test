var hx = require("hbuilderx");
var path = require('path');

async function showUI(context) {
    hx.vue.defineComponent('UITest', path.resolve(context.extensionPath, "./example.vue"));

    let form = await hx.window.showFormDialog({
        title: "测试示例",
        submitButtonText: "提交(&S)",
        cancelButtonText: "取消(&C)",
        footer: "<a href=\"https://www.google.com\">测试</a>",
        width: 800,
        height: 680,
        showModal: false,
        formItems: [{
            "type": "vue:UITest",
            "name": "UITest",
            //value: 会覆盖初始的this.data
            "value": {
                "username": "happy"
            },
            // event：可在vue中调用里面的方法
            event: {
                showMsg(msg) {
                    hx.window.showInformationMessage(msg);
                }
            }
        }]
    }).then((res)=> {
        console.log(JSON.stringify(res, null, 4));
    })
    return true;
};


function activate(context) {
    let disposable = hx.commands.registerCommand('extension.helloWorld', async (argv) => {
        await showUI(context);
    });
    context.subscriptions.push(disposable);
};

function deactivate() {};

module.exports = {
    activate,
    deactivate
};

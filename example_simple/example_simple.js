var hx = require("hbuilderx");
var path = require('path');

async function simple_example(context) {
    hx.vue.defineComponent('UITest', path.resolve(__dirname, "./example_simple.vue"));

    let form = await hx.window.showFormDialog({
        title: "测试示例",
        submitButtonText: "提交(&S)",
        cancelButtonText: "取消(&C)",
        footer: "<a href=\"https://www.google.com\">测试</a>",
        width: 800,
        height: 680,
        showModal: false,
        validate: async function(formData) {
            this.showError("");
            let data = formData.UITest;
            // console.log(formData);
            let { password } = data;
            if (password == 0 || /^\s+$/.test(password) ) {
                this.showError("password不能为空哦！");
                return;
            };
            return true;
        },
        onChanged: function (field, value, formData) {
            console.log("调用changed函数", value);
        },
        formItems: [{
            "type": "vue:UITest",
            "name": "UITest",
            //value: 会覆盖初始的this.data
            "value": {
                "username": "xx@xx.com"
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

module.exports = simple_example;

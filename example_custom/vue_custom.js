var hx = require("hbuilderx");
var path = require('path');

// 引入主要的类
let CustomDocument = hx.CustomEditor.CustomDocument;
let CustomEditorProvider = hx.CustomEditor.CustomEditorProvider;
let CustomDocumentEditEvent = hx.CustomEditor.CustomDocumentEditEvent;

// 继承CustomDocument
class CatCustomDocument extends CustomDocument {
    constructor(uri) {
        super(uri)
    }
    dispose() {
        super.dispose();
    }
}

// 继承CustomEditorProvider，实现必要的方法
class CatCustomEditorProvider extends CustomEditorProvider {
    constructor(context) {
        super()
    }
    openCustomDocument(uri) {
        // hx.vue.defineComponent('abcEditor2',
        //     "/Users/hx/Documents/HBuilderProjects/_tmp_2/hx-qui-test/example_2.vue");
        return Promise.resolve(new CatCustomDocument(uri));
    }
    resolveCustomEditor(document) {
        return hx.vue.createComponent("abcEditor", {})
    }
    // resolveCustomEditor(document) {
    //     // 关联CustomDocument与vueApp
    //     // return hx.vue.createComponent("abcEditor2");
    //      return hx.vue.createComponent("abcEditor2", {});
    // }
    saveCustomDocument(document) {
        return true;
    }
    saveCustomDocumentAs(document, destination) {
        return true;
    }
}

module.exports = CatCustomEditorProvider;

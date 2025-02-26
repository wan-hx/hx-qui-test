<template>
    <q-scroll-view layout='vbox' id="scrollView">

        <!-- 输入框 -->
        <!--
            alignment文档：https://doc.qt.io/qt-6/qt.html#AlignmentFlag-enum
        -->
        <q-view layout='hbox'>
            <q-label text="用户密码" id="labelView" alignment="AlignRight|AlignVCenter"></q-label>
            <q-input :text='username'
                @textChanged="el_set"
                @returnPressed="event_enter"
                @textEdited="event_textEdited"
                @cursorPositionChanged="event_cursorPositionChanged"
                @inputRejected="event_inputRejected"
                id="elInput"
                accessibleName="username"
                clearButtonEnabled='true'
                placeholderText="请输入邮箱, 格式xx@xx.com"
            ></q-input>
            <q-input :text='password' @textChanged="el_set"
                id="elInput"
                maxLength=8
                accessibleName="password"
                clearButtonEnabled='true'
                placeholderText="请输入密码, 长度6-8"
                echoMode="Password"
            ></q-input>
        </q-view>
        <q-view layout='hbox'>
            <q-label text="用户密码" id="labelView" alignment="AlignRight|AlignVCenter"></q-label>
            <q-input
                id="elInput"
                readOnly='true'
                placeholderText="此输入框仅读,无法输入"
            ></q-input>
        </q-view>

        <!-- 下拉框 -->
       <q-view layout="hbox">
            <q-label text="下拉选择框" id="labelView"></q-label>
            <q-combox :items='genderList'
                :currentIndex='genderIndex'
                :currentText='genderName'
                :stretch-factor='1'
                placeholderText="选择性别"
                accessibleName="genderName"
                @currentIndexChanged="el_set"></q-combox>
            <q-view horizontal-size-policy="ShrinkFlag"></q-view>
        </q-view>

        <!-- 复选框 -->
        <q-view layout='hbox'>
            <q-label text="复选框" id="labelView"></q-label>
            <q-checkbox id="elCheckBox" text="大米" :checked='checkBox1' />
            <q-checkbox id="elCheckBox" text="小米" :checked='checkBox2' style="margin-left: 10px;" />
            <!-- horizontal-size-policy 横向填充 -->
            <q-view horizontal-size-policy="Expanding"></q-view>
        </q-view>

        <!-- 单选框 -->
        <q-view layout='hbox'>
            <q-label text="单选框" id="labelView"></q-label>
            <q-radio-group layout="hbox" layout-spacing='5'>
                <q-radio id="elRadio" text="春" :checked="radio == '春'" @clicked="setRadio" accessibleName="radio" data-value="春"/>
                <q-radio id="elRadio" text="夏" :checked="radio == '夏'" @clicked="setRadio" accessibleName="radio" data-value="夏"/>
                <q-radio id="elRadio" text="秋" :checked="radio == '秋'" @clicked="setRadio" accessibleName="radio" data-value="秋"/>
                <q-radio id="elRadio" text="冬" :checked="radio == '冬'" @clicked="setRadio" accessibleName="radio" data-value="冬"/>
            </q-radio-group>
            <q-view horizontal-size-policy="Expanding"></q-view>
        </q-view>

        <!-- 按钮 -->
       <q-view layout='hbox'>
            <q-button text="默认按钮" @clicked='clickBtn'></q-button>
            <q-button id="elButton" text="定制按钮" @clicked='clickBtn'></q-button>
            <q-view horizontal-size-policy="Expanding"></q-view>
        </q-view>

        <!-- 编辑框 -->
       <q-view layout="hbox">
            <q-source-editor font-size="13"
                :text='editorText' languageId='markdown'
                :word-wrap='true'
                accessibleName="editorText"
                :line-number-visible='false' end-at-last-line="true"
                @modified="el_set">
            </q-source-editor>
        </q-view>

       <q-list-view id="QListView" currentIndex="-1"
            @currentRowChanged="currentRowChanged"
            @itemClicked="event_itemClicked"
            @itemDoubleClicked="event_itemDoubleClicked">
            <q-list-item layout='hbox' v-for="item in citys" toolTip="this is toolTip">
                <q-label
                    :text="item"
                    :style="{color: item == selectedCity ? '#4EAB57': ''}"
                    :data-value="item"></q-label>
                <q-view horizontal-size-policy='Expanding'></q-view>
            </q-list-item>
        </q-list-view>

        <!-- 进度条 -->
        <q-view layout="hbox">
            <q-label text="进度条" id="labelView"></q-label>
            <q-progress-bar id="progressBarVal" :value="progressBarVal" minimum="0" maximum="100" />
        </q-view>

        <!-- vertical-size-policy 垂直填充 -->
        <q-view vertical-size-policy="Expanding"></q-view>

    </q-scroll-view>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
                checkBox1: true,
                checkBox2: false,
                radio: '春',
                selectedCity: "",
                citys: ["北京", "上海", "南京", "广州"],
                genderList: ["", "男", "女"],
                genderName: '',
                genderIndex: 0,
                progressBarVal: 66,
                editorText: ""
            }
        },

        methods: {
            el_set(e) {
                const accessibleName = e.target.accessibleName;
                if (accessibleName == "username") {
                    this.username = e.target.text;
                };
                if (accessibleName == "password") {
                    this.password = e.target.text;
                };
                if (accessibleName == "radio") {
                    this.radio = e.target["data-value"];
                };
                if (accessibleName == "genderName") {
                    this.genderName = e.target.currentText;
                    this.genderIndex = e.target.currentIndex;
                };
                if (accessibleName == "editorText") {
                    this.editorText = e.target.text;
                };
                this.updateUi();
            },

            clickBtn() {
                this.$mitt.emit('showMsg', "这是一条从vue页面传递的消息");
            },

            setProgressBar() {
                this.progressBarVal = this.progressBarVal + 10;
            },
            async currentRowChanged(e) {
                const idx = e.target.currentRow;
                this.selectedCity = this.citys[idx];
                // console.log("-->", this.selectedCity);
                await this.updateUi()
            },

            async event_enter() {
                // console.log("[事件]......回车事件......");
            },

            async event_textEdited() {
                // console.log("[事件]......textEdited......");
            },

            async event_cursorPositionChanged(e) {
                // console.log("--->event_cursorPositionChanged", e);
            },

            async event_inputRejected() {
                // console.log("--->event_inputRejected", e);
            },

            async event_focusInEvent() {
                console.log("===== event_focusInEvent");
            },

            async event_itemDoubleClicked() {
                console.log("===== event_itemDoubleClicked");
            },

            async event_itemClicked() {
                console.log("===== event_itemClicked");
            },

            async event_itemSelectionChanged() {
                console.log("===== event_itemSelectionChanged");
            }
        },
    }
</script>

<style>
    * {
        background: transparent;
    }

    #scrollView {
        width: 100%;
        justify-content: start;
    }

    #labelView {
        min-width: 50px;
        text-align: right;
    }

    #elInput {
        border: none;
        height: 30px;
        border-bottom: 1px solid #d6d6d6;
        outline: none;
    }

    #elInput:focus {
        background: transparent;
        border-color: #43c45b;
    }

    #elButton {
        border: 1px solid #d6d6d6;
        border-radius: 5px;
        width: 50px;
        padding: 5px 10px;
        font-size: 12px;
    }

    #elButton:pressed {
        background: #0D9E4D;
        color: #fff;
    }

    #elRadio {
        width: 30px;
    }

    #elRadio::indicator::unchecked {
        image: url(:/hxui/resource/rdbt.png);
    }

    #elRadio::indicator::unchecked:hover {
        image: url(:/hxui/resource/rdbt-hover.png);
    }

    #elRadio::indicator::checked {
        image: url(:/hxui/resource/rdbt-checked.png);
    }

    #elCheckBox::indicator::unchecked {
    	image: url(:/hxui/resource/chbx.png);
    }

    #elCheckBox::indicator::checked {
        image: url(:/hxui/resource/chbx-checked.png);
    }

    QComboBox {
        height: 30px;
        background: #FFFEFA;
        max-width: 150px;
        border: none;
        border-bottom: 1px solid #d6d6d6;
        outline: none;
    }

    QComboBox:hover,
    QComboBox:focus {
        border-bottom: 1px solid #43C45B;
    }

    QComboBox::down-arrow {
        image: url(:/login/icons/down-arrow-fill.png);
    }

    QComboBox::drop-down {
        subcontrol-position: top right;
        width: 32px;
        border: none;
    }

    QComboBox QAbstractItemView {
        background: #FFFEFA;
        color: #405E42;
        selection-color: #405E42;
    }

    QComboBox QAbstractItemView::item {
        min-height: 26px;
        background: #FFFEFA;
        border-left: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }

    QComboBox QAbstractItemView::item:hover,
    QComboBox QAbstractItemView::item:selected {
        background: #FAFFFA;
    }

    #QListView {
        background: #FFFEFA;
        border: 1px solid #e5e5e5;
    }

    #QListView::item {
        padding: 5px;
    }

    #QListView::item:selected, #list::item:hover {
      background-color: transparent;
    }

    #progressBarVal {
        color: #0D9E4D;
    }
</style>

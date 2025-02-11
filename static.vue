<template>
	<q-scroll-view layout='vbox' id="scrollView">

		<!-- 输入框 -->
		<q-view layout='hbox'>
			<q-label text="用户名" id="labelView"></q-label>
			<q-input :text='username' id="elInput" @textChanged="setInput"
				placeholderText="请输入邮箱, 格式xx@xx.com"></q-input>
		</q-view>
		<q-view layout='hbox'>
			<q-label text="密码" id="labelView"></q-label>
			<q-input :text='password' id="elInput" @textChanged="setInput" placeholderText="请输入密码, 长度8-32"></q-input>
		</q-view>

		<!-- 复选框 -->
		<q-view layout='hbox'>
			<q-label text="复选框" id="labelView"></q-label>
			<q-checkbox id="elCheckBox" text="大米" :checked='checkBox1' />
			<q-checkbox id="elCheckBox" text="小米" :checked='checkBox2' />
			<!-- horizontal-size-policy 横向填充 -->
			<q-view horizontal-size-policy="Expanding"></q-view>
		</q-view>

		<!-- 单选框 -->
		<q-view layout='hbox'>
			<q-label text="单选框" id="labelView"></q-label>
			<q-radio-group layout="hbox" layout-spacing='5'>
				<q-radio id="elRadio" text="春" :checked="radio == '春'" @clicked="setRadio" />
				<q-radio id="elRadio" text="秋" :checked="radio == '秋'" @clicked="setRadio" />
			</q-radio-group>
			<q-view horizontal-size-policy="Expanding"></q-view>
		</q-view>

		<!-- 按钮 -->
		<q-view layout='hbox'>
			<q-button id="elButton" text="按钮" @clicked='clickBtn'></q-button>
			<q-view horizontal-size-policy="Expanding"></q-view>
		</q-view>

		<!-- 下拉框 -->
		<q-view layout="hbox">
			<q-label text="下拉选择框" id="labelView"></q-label>
			<q-combox :items='genderList' :currentIndex='genderIndex' :currentText='genderName' :stretch-factor='1'
				placeholderText="选择性别" @currentIndexChanged="setGender"></q-combox>
			<q-view horizontal-size-policy="ShrinkFlag"></q-view>
		</q-view>
		
		<!-- 进度条 -->
		<q-view layout="hbox">
			<q-label text="进度条" id="labelView"></q-label>
			<q-progress-bar :value="progressBarVal" minimum="0" maximum="100" />
		</q-view>
		
		<!-- 编辑框 -->
		<q-view layout="hbox">
			<q-source-editor 
				font-size="13" 
				:text='editorText' 
				languageId='markdown' 
				:word-wrap='true'
				:line-number-visible='false' end-at-last-line="true" 
				@modified="setEditor">
			</q-source-editor>
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
				radio: 1,
				genderList: ["", "男", "女"],
				genderName: '',
				genderIndex: 0,
				progressBarVal: 66,
				editorText: ""
			}
		},

		methods: {
			setInput(e) {
				console.error("-----", e.target.text)
			},

			setRadio(e) {
				console.error("-----", e.target.text)
			},

			clickBtn() {},

			setGender() {},
			
			setProgressBar() {
				this.progressBarVal = this.progressBarVal + 10;
			},
			
			setEditor(e) {
				console.error("-----", e.target.text)
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
	}

	#elButton:pressed {
		background: #E1F0E1;
		border-color: #0D9E4D;
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
</style>
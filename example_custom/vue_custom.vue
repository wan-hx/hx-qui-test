<template>
    <q-scroll-view layout='vbox' id="scrollView">
        <q-view layout='hbox'>
            <q-label text="用户名" id="labelView"></q-label>
            <q-input :text='username' id="elInput" accessibleName="username"
                placeholderText="请输入邮箱, 格式xx@xx.com">
            </q-input>
        </q-view>

        <!-- vertical-size-policy 垂直填充 -->
        <q-view vertical-size-policy="Expanding"></q-view>
    </q-scroll-view>
</template>

<script>
    export default {
        data() {
            return {
                username: ""
            }
        }
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

    #elInput {
        border: none;
        height: 30px;
        border-bottom: 1px solid #d6d6d6;
        outline: none;
    }

    #elInput:focus {
        background: transparent;
        border-color: #eee;
    }
</style>

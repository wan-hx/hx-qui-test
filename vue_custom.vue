<template>
    <q-view layout='hbox'>
        <q-label text="用户名" id="labelView"></q-label>
        <q-input :text='username'
            id="elInput"
            accessibleName="username"
            placeholderText="请输入邮箱, 格式xx@xx.com"></q-input>
    </q-view>
</template>

<script>
    export default {
        data() {
            return {
                username: "ok"
            }
        }
    }
</script>

<style>
    * {
        background: transparent;
    }
</style>

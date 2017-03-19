<template lang= "html">
    <div>
        <p>-- 声明式渲染 -- </p>
        <div class="message">
            {{ message }}
        </div>
        <br/>
        <p>-- 指令：if 判断 -- </p>
        <p v-if="seen">看得见这个</p>
        <br/>
        <p>-- 指令：for 循环 -- </p>
        <ul>

            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ul>
        <br/>
        <p>-- 事件处理器 -- </p>
        <button v-on:click="reverseMessage">逆转消息</button>
        <br/>
        <p>-- 表单控件绑定 -- </p>
        <input v-model="message" placeholder="edit me">
        <p>Message id: {{ message }}</p>
        <br/>
        <p>-- 单选框 --</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <lable for="checkbox">{{ checked }}</lable>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                message: 'Hello, Vue.js 2.0',
                seen: false,
                checked: false,
                todos: [
                    {text: "看书"},
                    {text: "做饭"},
                    {text: "洗碗"}
                ]
            }
        },
        methods: {
            reverseMessage: function(){
                this.message = this.message.split('').reverse().join('');
            }
        }
    }
</script>

<style lang="css">
    .message {
        color: pink;
        font-size: 1.4em;
    }
</style>
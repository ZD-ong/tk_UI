import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './buttonGroup.vue'
import Input from './input.vue'
import Toast from './toast.vue'
import plugin from './plugin'

Vue.component('tk-button', Button)
Vue.component('tk-icon', Icon)
Vue.component('tk-button-group', ButtonGroup)
Vue.component('tk-input', Input)
Vue.component('tk-toast', Toast)

Vue.use(plugin)

new Vue({
    el: '#app',
    data:{
        message: ''
    },
    methods: {
        showToast(status) {
            this.$toast('toast提示你想要的数据', {
                position: 'top',
                status: status,
                closeButton: {
                    text: '关闭',
                    callback(toast) {
                        console.log('这里调用callback函数')
                    }
                },
                autoClose: true,
                autoCloseDelay: 1
            })
        }
    },
    created() {
    }
})

import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

Vue.component('tk-button', Button)
Vue.component('tk-icon', Icon)


new Vue({
    el: '#app'
})
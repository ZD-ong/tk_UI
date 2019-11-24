import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './buttonGroup.vue'
import Input from './input.vue'

Vue.component('tk-button', Button)
Vue.component('tk-icon', Icon)
Vue.component('tk-button-group', ButtonGroup)
Vue.component('tk-input', Input)



new Vue({
    el: '#app'
})

import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './buttonGroup.vue'

Vue.component('tk-button', Button)
Vue.component('tk-icon', Icon)
Vue.component('tk-button-group', ButtonGroup)


new Vue({
    el: '#app'
})

import chai from 'chai'
const expect = chai.expect

// 单元测试

// 一、如果给按钮添加icon，验证icon是否展示
{
    // 构造一个button
    const Constructor = Vue.extend(Button) // 把button组件生成构造函数
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    }) // 构造函数实例化
    vm.$mount() // 将按钮挂载
    let useELement = vm.$el.querySelector('use')
    expect(useELement.getAttribute('xlink:href')).to.eq('#i-setting')

    vm.$el.remove() // 清除button元素
    vm.$destroy() // 销毁button对象
}

// 二、如果loading状态，按钮应该展示loading的icon
{   
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount() // 将按钮挂载
    let useELement = vm.$el.querySelector('use')
    expect(useELement.getAttribute('xlink:href')).to.eq('#i-loading')

    vm.$el.remove() // 清除button元素
    vm.$destroy() // 销毁button对象
}

// 三、如果有icon，默认展示在左边
{   
    const tempDiv = document.createElement('div')
    document.body.appendChild(tempDiv)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount(tempDiv) // 将按钮挂载
    let svgELement = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svgELement)
    expect(order).to.eq('1')

    vm.$el.remove() // 清除button元素
    vm.$destroy() // 销毁button对象
}

// 四、设置icon位置在右边展示
{   
    const tempDiv = document.createElement('div')
    document.body.appendChild(tempDiv)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(tempDiv) // 将按钮挂载
    let svgELement = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svgELement)
    expect(order).to.eq('2')

    vm.$el.remove() // 清除button元素
    vm.$destroy() // 销毁button对象
}
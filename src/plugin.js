import Toast from './toast.vue'


let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message, userOptions) {
            if(currentToast) {
                currentToast.toastClose()
            }
            currentToast = createToast({
                Vue, 
                message, 
                propsData: userOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}

function createToast({Vue, message, propsData, onClose}) {

    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({ propsData })

    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('beforeClose', onClose)
    document.body.appendChild(toast.$el)
    return toast
}
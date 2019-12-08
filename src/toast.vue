<template>
    <div class="tk-toast" :class="toastClasses">
        <slot></slot>
        <span class="close" v-if="closeButton" @click="onClickClose">
            <!-- {{closeButton.text}} -->
            <tk-icon class="icon" name="close"></tk-icon>
        </span>
    </div>
</template>
<script>
import Icon from './icon'

export default {
    name: 'TKToast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 5
        },
        closeButton: {
            type: Object,
            default() {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'middle'].indexOf(value) >= 0
            }
        },
        status: {
            type: String,
            default: 'info',
            validator(value) {
                return ['success', 'warning', 'error', 'info'].indexOf(value) >= 0
            }
        }
    },
    computed: {
        toastClasses() {
            return { 
                [`position-${this.position}`]: true,
                [`status-${this.status}`]: true,
            }
        }
    },
    methods: {
        toastClose() {
            this.$el.remove()
            this.$emit('beforeClose')
            this.$destroy()
        },

        onClickClose() {
            this.toastClose()
            if(this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this)
            }
        },

        exceAutoClose() {
            if(this.autoClose) {
                setTimeout(() => {
                    this.toastClose()
                }, this.autoCloseDelay * 1000)
            }
        }
    },
    mounted() {
        this.exceAutoClose()
    }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-width: 380px;
$toast-info-bg: #edf2fc;

@keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
.tk-toast {
    animation: fade-in .5s;
    position: fixed;
    left: 50%;
    font-size: $font-size;
    min-height: $toast-height;
    min-width: $toast-width;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3px;
    // box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    padding: 0 16px;
    font-weight: 300;

    .close {
        cursor: pointer;
        padding-left: 16px;
        display: flex;
        flex-shrink: 0;

        .icon {
            fill: #999;
        }
    }

    &.position-top {
        top: 20px;
        transform: translateX(-50%);
    }

    &.position-bottom {
        bottom: 20px;
        transform: translateX(-50%);
    }

    &.position-middle {
        transform: translate(-50%, -50%);
    }

    &.status-info {
        color: #909399;
        background: $toast-info-bg;
        border-color: 1px solid #ebeef5;
    }

    &.status-success {
        color: #67c23a;
        background: #f0f9eb;
        border-color: 1px solid #e1f3d8;
    }

    &.status-warning {
        color: #e6a23c;
        background: #fdf6ec;
        border-color: 1px solid #faecd8;
    }

    &.status-error {
        color: #f56c6c;
        background: #fef0f0;
        border-color: 1px solid #fde2e2;
    }
}
</style>
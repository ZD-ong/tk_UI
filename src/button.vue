<template>
    <button class="tk-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <tk-icon class="icon" v-if="icon && !loading" :name="icon"></tk-icon>
        <tk-icon class="loading icon" v-if="loading" name="loading"></tk-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
import Icon from './icon'

export default {
    name: 'TKButton',
    components: {
        'tk-icon': Icon 
    },
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(value){ // 属性检查器
                return value === 'right' || value === 'left'
            }
        }
    }
}
</script>
<style lang="scss">
$font-size: 14px;
$button-height: 32px;
$button-bg: #fff;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.tk-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
        border-color: $border-color-hover;
    }
    &:active {
        background-color: $button-active-bg;
    }
    &:focus {
        outline: none;
    }
    > .icon {
        order: 1;
        margin-right: .3em;
    }
    > .content {
        order: 2;
    }
    &.icon-right {
        > .icon {
            order: 2;
            margin-right: 0;
            margin-left: .3em;
        }
        > .content {
            order: 1;
        }
    }
    .loading {
        animation: spin 1.5s infinite linear;
    }
}
</style>
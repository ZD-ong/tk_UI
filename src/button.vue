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
export default {
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
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.tk-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--button-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);

    &:hover {
        border-color: var(--border-color-hover);
    }
    &:active {
        background-color: var(--button-active-bg);
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
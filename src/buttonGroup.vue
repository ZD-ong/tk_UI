<template>
    <div class="tk-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'TKButtonGroup'
}
</script>
<style lang="scss">
.tk-button-group {
    display: inline-flex;
    vertical-align: middle;

    > .tk-button {
        border-radius: 0;

        &:not(:first-child) {
            margin-left: -1px;
        }

        &:first-child {
            border-top-left-radius: var(--button-radius);
            border-bottom-left-radius: var(--button-radius);
        }

        &:last-child {
            border-top-right-radius: var(--button-radius);
            border-bottom-right-radius: var(--button-radius);
        }

        &:hover {
            position: relative;
            z-index: 1;
        }
    }
}
</style>
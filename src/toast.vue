<template>
    <div class="tk-toast">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'TKToast'
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 32px;
$toast-bg: rgba(0,0,0,0.5);
.tk-toast {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: $font-size;
    height: $toast-height;
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 2px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    color: #fff;
    padding: 0 16px;
}
</style>
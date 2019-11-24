<template>
    <svg class="tk-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './svg'
export default {
    name: 'TKIcon',
    props: ['name']
}
</script>
<style lang="scss">
    .tk-icon {
            width: 1em;
            height: 1em;
        }
</style>
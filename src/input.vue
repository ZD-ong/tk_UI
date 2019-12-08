<template>
    <div class="tk-input" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)">
        <template v-if="error">
            <tk-icon name="error"></tk-icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>
<script>
import Icon from './icon'
export default {
    name: 'TKInput',
    components: {
        'tk-icon': Icon 
    },
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0,0,0,0.5);
$red: #f1453d;

.tk-input {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > :not(:last-child) {
        margin-right: .5em;
    }
    
    &.error {
        > input {
            border-color: $red;
        }
    }
    > input {
        height: $height;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0 8px;
        font-size: inherit;

        &:hover {
            border-color: $border-color-hover;
        }

        &:focus {
            box-shadow: inset 0 1px 3px $box-shadow-color;
            outline: none;
        }

        &[disabled] {
            cursor: not-allowed;
            color: #aaa;
            border-color: #aaa;
        }

    }
    .error-message {
        color: $red;
    }
}
</style>
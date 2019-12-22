<template>
    <div class="wheel-block">
        <tk-button icon="setting" icon-position="left">设置</tk-button>
        <tk-button icon="download">下载</tk-button>
        <tk-button icon="awsome" icon-position="right">赞</tk-button>
        <tk-button :loading="true" icon-position="left">提交</tk-button>
        <tk-button-group>
            <tk-button icon="left" icon-position="left">上一步</tk-button>
            <tk-button icon="right" icon-position="right">下一步</tk-button>
        </tk-button-group>
    </div>
</template>
<script>
import Button from "../../../src/button";
import buttonGroup from "../../../src/buttonGroup";
export default {
    components: {
        'tk-button': Button,
        'tk-button-group': buttonGroup
    }
}
</script>
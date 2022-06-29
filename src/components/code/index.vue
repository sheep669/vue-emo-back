<template>
    <pre v-highlightjs>
        <code :class="lan_type">
            <slot></slot>
        </code>
        </pre>
</template>
<script>
export default {
    name: "EmoCode",
    props: {
        lan_type: String,
    },
};
</script>
<style lang='less' scoped>
pre {
    margin: 0;
    code {
        border-left: 10px solid #0dbc79;
        border-radius: 2px;
    }
}
.hljs {
    padding: 1.5em;
    text-align: left;
}
</style>
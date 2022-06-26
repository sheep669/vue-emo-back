<template>
    <div id="app">
        <emo-layout />
    </div>
</template>

<script>
import EmoLayout from "@/components/layout/index.vue";
export default {
    name: "app",
    components: { EmoLayout },
};
</script>
<style lang='less' scoped>
#app {
    height: 100%;
}
</style>


<template>
    <div id="app">
        <emo-layout>
            <emo-timeline slot="main_content" />
        </emo-layout>
    </div>
</template>

<script>
import EmoLayout from "@/components/layout/index.vue";
import EmoTimeline from "@/components/timeline/index.vue";
export default {
    name: "app",
    components: { EmoLayout, EmoTimeline },
};
</script>
<style lang='less' scoped>
#app {
    height: 100%;
    width: 100%;
}
</style>


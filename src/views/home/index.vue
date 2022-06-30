<template>
    <div style="width: 100%; height: calc(100% - 2px)">
        <div
            class="left"
            style="
                width: 160px;
                background: #ffffff;
                height: 100%;
                float: left;
                overflow-x: hidden;
                overflow-y: auto;
                border-top: 2px solid rgb(0 0 0 / 5%);
            "
        >
            <!-- 插入 emo-submenu-->
            <emo-submenu />
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import EmoSubmenu from "@/components/submenu/index";
export default {
    name: "EmoHome",
    components: {
        EmoSubmenu,
    },
};
</script>
<style lang='less' scoped>
</style>
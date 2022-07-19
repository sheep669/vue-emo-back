<!--
 * @Author: sheep669
 * @Description: 入口文件
 * @Date: 2022-06-26 21:29:19
-->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "app"
};
</script>
<style lang='less' scoped>
#app {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>


<template>
    <div id="emo-footer">
        <el-footer> footer </el-footer>
    </div>
</template>
<script>
export default {
    name: "EmoFooter",
};
</script>
<style lang='less' scoped>
.el-footer {
    position: absolute;
    left: 200px;
    bottom: 0;
    width: calc(100% - 200px);
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
    box-shadow: 0 -2px 2px rgb(0 0 0 / 5%);
}
</style>
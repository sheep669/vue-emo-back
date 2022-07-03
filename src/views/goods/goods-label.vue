<!--
 * @Author: sheep669
 * @Description: 商品标签模块
 * @Date: 2022-07-03 15:42:02
-->
<template>
    <div id="goods-label">
        <div
            class="right"
            style="
                height: 100%;
                width: calc(100% - 160px);
                float: right;
                overflow-y: auto;
            "
        >
            <el-card shadow="always" body-style="0px" style="margin: 8px">
                <!-- <emo-table /> -->
                <!-- <emo-pagination style="margin-top: 15px" /> -->
                商品标签
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    name: "GoodsLabel",
};
</script>
<style lang='less' scoped>
</style>
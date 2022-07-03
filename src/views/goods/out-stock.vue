<!--
 * @Author: sheep669
 * @Description: 出售中模块
 * @Date: 2022-07-03 15:39:07
-->
<template>
    <div id="out-stock">
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
                出售中
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    name: "OutStock",
};
</script>
<style lang='less' scoped>
</style>
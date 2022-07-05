<!--
 * @Author: sheep669
 * @Description: 交易流水模块
 * @Date: 2022-7-5 18:33:28
-->
<template>
    <!-- suggest to replace '_'===> '-' -->
    <div id="deal_serial">
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
                deal_serial page
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    name: "DealSerial",
};
</script>
<style lang='less' scoped>
</style>
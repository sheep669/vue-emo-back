<!--
 * @Author: sheep669
 * @Description: 配送路线模块
 * @Date: 2022-7-5 18:44:56
-->
<template>
    <!-- suggest to replace '_'===> '-' -->
    <div id="delivery_routes">
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
                delivery_routes page
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    name: "DeliveryRoutes",
};
</script>
<style lang='less' scoped>
</style>
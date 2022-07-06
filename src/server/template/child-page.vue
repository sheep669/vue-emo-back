<!--
 * @Author: sheep669
 * @Description: replaceDesc模块
 * @Date: replaceTime
-->
<template>
    <!-- suggest to replace '_'===> '-' -->
    <div class="replace1">
        <el-card shadow="always" body-style="0px" style="margin: 8px">
            <!-- <emo-table /> -->
            <!-- <emo-pagination style="margin-top: 15px" /> -->
            replace1 page
        </el-card>
    </div>
</template>
<script>
// import EmoTable from "@/components/table/index";
export default {
    name: "replace2",
    // components: {
    //     EmoTable,
    // },
};
</script>
<style lang='less' scoped>
.replace1 {
    height: 100%;
    width: calc(100% - 160px);
    float: right;
    overflow-y: auto;
}
</style>
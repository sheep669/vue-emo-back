<!--
 * @Author: sheep669
 * @Description: 权限管理模块
 * @Date: 2022-7-5 19:15:02
-->
<template>
    <!-- suggest to replace '_'===> '-' -->
    <div id="user_authority_manage">
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
                user_authority_manage page
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    name: "UserAuthorityManage",
};
</script>
<style lang='less' scoped>
</style>
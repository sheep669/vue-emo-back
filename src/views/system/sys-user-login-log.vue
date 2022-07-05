<!--
 * @Author: sheep669
 * @Description: 登录日志模块
 * @Date: 2022-7-5 19:05:02
-->
<template>
    <!-- suggest to replace '_'===> '-' -->
    <div id="sys_user_login_log">
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
                sys_user_login_log page
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    name: "SysUserLoginLog",
};
</script>
<style lang='less' scoped>
</style>
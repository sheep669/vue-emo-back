<template>
    <el-menu default-active="/demo" router>
        <el-submenu index="1">
            <template slot="title">
                <span style="font-weight: bold">权限管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/demo">查看DEMO</el-menu-item>
                <el-menu-item index="/authority/login">登陆权限</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="/authority/edit">编辑权限</el-menu-item>
                <el-menu-item index="/authority/delete">删除权限</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-divider></el-divider>
        <el-submenu index="/authority">
            <template slot="title">
                <span style="font-weight: bold">权限管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/authority/exit">退出权限</el-menu-item>
                <el-menu-item index="/authority/login">登陆权限</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="/authority/edit">编辑权限</el-menu-item>
                <el-menu-item index="/authority/delete">删除权限</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-divider></el-divider>
        <el-submenu index="/authority">
            <template slot="title">
                <span style="font-weight: bold">权限管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/authority/exit">退出权限</el-menu-item>
                <el-menu-item index="/authority/login">登陆权限</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="/authority/edit">编辑权限</el-menu-item>
                <el-menu-item index="/authority/delete">删除权限</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-divider></el-divider>
        <el-submenu index="/authority">
            <template slot="title">
                <span style="font-weight: bold">权限管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/authority/exit">退出权限</el-menu-item>
                <el-menu-item index="/authority/login">登陆权限</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="/authority/edit">编辑权限</el-menu-item>
                <el-menu-item index="/authority/delete">删除权限</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-divider></el-divider>
        <el-submenu index="/authority">
            <template slot="title">
                <span style="font-weight: bold">权限管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/authority/exit">退出权限</el-menu-item>
                <el-menu-item index="/authority/login">登陆权限</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="/authority/edit">编辑权限</el-menu-item>
                <el-menu-item index="/authority/delete">删除2权限</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="/authority/edit">编辑权限</el-menu-item>
                <el-menu-item index="/authority/delete"
                    >删除25权限</el-menu-item
                >
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<script>
export default {
    name: "EmoSubmenu",
};
</script>
<style lang='less' scoped>
.el-menu {
    width: 160px;
}
.el-menu .el-submenu__title {
    padding: 0 !important;
}
.el-submenu {
    width: 160px;
    text-align: left;
}
.el-menu-item-group {
    width: 160px;
}
.el-menu-item {
    text-align: left;
    width: 160px;
    line-height: 40px;
    padding-left: 20px !important;
}

.el-divider--horizontal {
    margin: 0;
}
</style>
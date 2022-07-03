<template>
    <el-container
        style="
            width: 100%;
            height: 100%;
            overflow-y: hidden;
            position: relative;
        "
    >
        <el-header>
            <div
                class="logo"
                style="width: 200px; background: #1e1e1e; color: white"
            >
                社区团购
            </div>
            <div class="header">
                <el-tooltip effect="dark" content="打开全屏" placement="left">
                    <i
                        v-show="fullscreen === false"
                        class="el-icon-full-screen"
                        @click="fullOrEscScreen"
                        style="font-size: 25px; font-weight: 600"
                    ></i>
                </el-tooltip>
                <el-tooltip effect="dark" content="退出全屏" placement="right">
                    <i
                        v-show="fullscreen === true"
                        class="el-icon-rank"
                        @click="fullOrEscScreen"
                        style="font-size: 25px; font-weight: 600"
                    ></i>
                </el-tooltip>
            </div>
        </el-header>
        <el-container style="height: 100%; background-color: #545c64">
            <el-aside width="200px">
                <!-- 插入 emo-menu -->
                <emo-menu />
            </el-aside>
            <el-container>
                <el-main>
                    <!-- <slot name="main_content"> -->
                    <router-view></router-view>
                    <!-- <div
                        class="left"
                        style="
                            width: 160px;
                            background: #ffffff;
                            height: calc(100% - 2px);
                            float: left;
                            overflow-x: hidden;
                            overflow-y: auto;
                            border-top: 2px solid rgb(0 0 0 / 5%);
                        "
                    > -->
                    <!-- 插入 emo-submenu-->
                    <!-- <emo-submenu />
                    </div>
                    <div
                        class="right"
                        style="
                            height: 100%;
                            width: calc(100% - 160px);
                            float: right; -->
                    <!-- overflow-y: auto;
                        "
                    >
                        <el-card
                            shadow="always" -->
                    <!-- body-style="0px"
                            style="margin: 8px"
                        > -->
                    <!-- <emo-table /> -->
                    <!-- <emo-pagination style="margin-top: 15px" /> -->
                    <!-- <router-view></router-view> -->
                    <!-- </el-card> -->
                    <!-- </div> -->
                    <!-- </slot> -->
                </el-main>
                <!-- 插入 emo-footer -->
                <emo-footer />
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
// import EmoTable from "@/components/table/index";
// import EmoPagination from "@/components/pagination/index";
import EmoMenu from "@/components/menu/index";
// import EmoSubmenu from "@/components/submenu/index";
import EmoFooter from "@/components/footer/index";
export default {
    name: "EmoLayout",
    components: {
        // EmoTable,
        // EmoPagination,
        EmoMenu,
        // EmoSubmenu,
        EmoFooter,
    },
    data() {
        return {
            fullscreen: false,
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        fullOrEscScreen() {
            let element = document.documentElement;
            // 判断是否已经是全屏
            // 如果是全屏，退出
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                // 否则，进入全屏
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            // 改变当前全屏状态
            this.fullscreen = !this.fullscreen;
        },
    },
};
</script>

<style lang="less" scoped>
.el-header {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    .header {
        flex-grow: 1;
    }
}
.el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    overflow-y: auto;
    height: calc(100% - 60px);
}
.el-aside::-webkit-scrollbar {
    display: none;
}
.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    padding: 0;
    position: absolute;
    bottom: 60;
    width: calc(100% - 200px);
    height: calc(100% - 120px);
}
</style>

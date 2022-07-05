<!--
 * @Author: sheep669
 * @Description: 布局顶部
 * @Date: 2022-07-05 21:48:57
-->
<template>
    <div id="emo-header">
        <div class="logo">线上社区团购系统</div>
        <div class="tool">
            <div class="fullscreen">
                <el-tooltip effect="dark" content="打开全屏" placement="right">
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
            <div class="btns">
                <el-button type="primary">退出</el-button>
                <el-button type="primary">sheep669</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "EmoHeader",
    data() {
        return {
            fullscreen: false,
        };
    },
    methods: {
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
<style lang='less' scoped>
.logo {
    width: 175px;
    background: #1e1e1e;
    color: white;
    height: 60px;
    float: left;
    text-align: left;
    line-height: 60px;
    padding-left: 25px;
}
.tool {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.fullscreen {
    margin-left: 9px;
}
.btns {
    margin-right: 9px;
}
</style>
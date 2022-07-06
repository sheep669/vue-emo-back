<!--
 * @Author: sheep669
 * @Description: 首页模块
 * @Date: 2022-06-30 10:17:00
-->
<template>
    <div id="emo-home">
        <el-card
            shadow="always"
            body-style="0px"
            style="margin: 8px; background: transparent"
        >
            <div class="statistic-panel">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <div class="chart">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header">
                        <span>团购经营状态</span>
                    </div>
                </el-card>
                <el-card class="box-card2" shadow="hover">
                    <div slot="header">
                        <span>会员统计</span>
                    </div>
                </el-card>
            </div>
            <div class="table">
                <el-card class="box-card1" shadow="hover">
                    <div slot="header">
                        <span>团长佣金排名</span>
                    </div>
                </el-card>
                <el-card class="box-card2" shadow="hover">
                    <div slot="header">
                        <span>会员消费排名</span>
                    </div>
                </el-card>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: "EmoHome",
};
</script>
<style lang='less' scoped>
.statistic-panel {
    display: flex;
    justify-content: space-around;
}
div {
    margin-right: 4px;
}
.statistic-panel div:nth-child(1) {
    width: 25%;
    height: 250px;
    border-radius: 4px;
    background: #208cf1;
}
.statistic-panel div:nth-child(2) {
    width: 25%;
    height: 250px;
    border-radius: 4px;
    background: #fc5366;
}
.statistic-panel div:nth-child(3) {
    width: 25%;
    height: 250px;
    border-radius: 4px;
    background: #11c1d7;
}
.statistic-panel div:nth-child(4) {
    width: 25%;
    height: 250px;
    border-radius: 4px;
    background: #ff5e50;
}

.chart {
    display: flex;
    justify-content: space-around;
    .box-card1 {
        margin-top: 12px;
        width: 60%;
        height: 400px;
        text-align: left;
    }
    .box-card2 {
        margin-left: 12px;
        text-align: left;
        height: 400px;
        flex-grow: 1;
        margin-top: 12px;
    }
}
.table {
    display: flex;
    justify-content: space-around;
    .box-card1 {
        margin-top: 12px;
        width: 50%;
        height: 400px;
        text-align: left;
    }
    .box-card2 {
        margin-left: 12px;
        text-align: left;
        height: 400px;
        flex-grow: 1;
        margin-top: 12px;
    }
}
</style>
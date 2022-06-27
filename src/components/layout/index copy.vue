<template>
    <el-container
        style="
            height: 100%;
            width: 100%;
            border: 1px solid #eee;
            background=: yellow;
        "
    >
        <el-header style="font-size: 12px">
            <el-card shadow="always" body-style="padding:0">
                <div class="emo-header">社区团购管理后台</div>
                <div>
                    <el-dropdown>
                        <i
                            class="el-icon-setting"
                            style="margin-right: 15px; color: aliceblue"
                        ></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </div>
            </el-card>
        </el-header>
        <el-container style="height: 80%">
            <el-aside width="200px" style="background-color: #545c64">
                <el-menu
                    :default-openeds="['1', '3']"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-menu-item index="/">
                        <i class="el-icon-s-home"></i>
                        <span slot="title"> 首页 </span>
                    </el-menu-item>
                    <el-menu-item index="/tuanzhang">
                        <i class="el-icon-s-custom"></i>
                        <span slot="title">团长管理</span>
                    </el-menu-item>
                    <el-menu-item index="/user">
                        <i class="el-icon-user"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="/order">
                        <i class="el-icon-shopping-cart-1"></i>
                        <span slot="title">订单管理</span>
                    </el-menu-item>
                    <el-menu-item index="/delivery">
                        <i class="el-icon-bicycle"></i>
                        <span slot="title">骑手管理</span>
                    </el-menu-item>
                    <el-menu-item index="/wuliu">
                        <i class="el-icon-truck"></i>
                        <span slot="title">货流管理</span>
                    </el-menu-item>
                    <el-menu-item index="/store">
                        <i class="el-icon-box"></i>
                        <span slot="title">商铺管理</span>
                    </el-menu-item>
                    <el-menu-item index="/brokerage">
                        <i class="el-icon-wallet"></i>
                        <span slot="title">佣金管理</span>
                    </el-menu-item>
                    <el-menu-item index="/statistic">
                        <i class="el-icon-pie-chart"></i>
                        <span slot="title"> 统计 </span>
                    </el-menu-item>
                    <el-menu-item index="/setting">
                        <i class="el-icon-setting"></i>
                        <span slot="title"> 设置 </span>
                    </el-menu-item>
                    <el-menu-item index="/setting">
                        <i class="el-icon-setting"></i>
                        <span slot="title"> 设置 </span>
                    </el-menu-item>
                    <el-menu-item index="/setting">
                        <i class="el-icon-setting"></i>
                        <span slot="title"> 设置 </span>
                    </el-menu-item>
                    <el-menu-item index="/setting">
                        <i class="el-icon-setting"></i>
                        <span slot="title"> 设置 </span>
                    </el-menu-item>
                    <el-menu-item index="/setting">
                        <i class="el-icon-setting"></i>
                        <span slot="title"> 设置 </span>
                    </el-menu-item>
                    <el-menu-item index="/setting">
                        <i class="el-icon-setting"></i>
                        <span slot="title"> 设置 </span>
                    </el-menu-item>
                    <el-menu-item index="/setting">
                        <i class="el-icon-setting"></i>
                        <span slot="title"> 设置 </span>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <el-container>
                <el-main>
                    <div class="tool-wrapper"></div>
                    <div class="table-wrapper">
                        <!-- <el-table :data="tableData" max-height="550" border>
                            <el-table-column
                                fixed
                                prop="date"
                                label="日期"
                                width="150"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="姓名"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="province"
                                label="省份"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="province"
                                label="省份"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="province"
                                label="省份"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="province"
                                label="省份"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="province"
                                label="省份"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="province"
                                label="省份"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="province"
                                label="省份"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="city"
                                label="市区"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="地址"
                                width="300"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="zip"
                                label="邮编"
                                width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                fixed="right"
                                label="操作"
                                width="120"
                            >
                                <template slot-scope="scope">
                                    <el-button
                                        @click.native.prevent="
                                            deleteRow(scope.$index, tableData)
                                        "
                                        type="text"
                                        size="small"
                                    >
                                        移除
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table> -->
                    </div>
                    <div class="pagination-wrapper">
                        <!-- <emo-pagination class="emo-pagination" /> -->
                    </div>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
// import EmoPagination from "@/components/pagination/index.vue";
export default {
    name: "EmoLayout",
    components: {
        // EmoPagination,
    },
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
    },
    data() {
        return {
            tableData: [
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-08",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-06",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-07",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-07",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-07",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-07",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-07",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.el-header {
    background-color: #252526;
    color: aliceblue;
    line-height: 60px;
    width: 100%;
    padding: 0;
}
.el-card {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    background-color: #252526;
}

.el-aside {
    color: #333;
    overflow-x: hidden;
}
.el-aside::-webkit-scrollbar {
    display: none;
}
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-main {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    border: 2px solid yellow;
}
.emo-header {
    width: 179px;
    line-height: 60px;
    color: aliceblue;
    border-right: 1px snow solid;
}
.emo-pagination {
    // margin: 10px 12px 10px 0;
}
.tool-wrapper {
}
</style>

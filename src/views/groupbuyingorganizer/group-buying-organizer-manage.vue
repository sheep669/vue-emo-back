<!--
 * @Author: sheep669
 * @Description: 团长管理模块
 * @Date: 2022-7-5 12:02:45
-->
<template>
    <!-- suggest to replace '_'===> '-' -->
    <div class="group_buying_organizer_manage">
        <el-card
            shadow="always"
            body-style="0px"
            style="margin: 8px"
            class="main"
        >
            <div class="filter-form">
                <el-row>
                    <el-col :span="18">
                        <el-form
                            ref="form"
                            :model="form"
                            label-width="100px"
                            class="emo-form-inline"
                        >
                            <el-form-item label="团长姓名">
                                <el-input
                                    v-model="form.group_buying_organizer_name"
                                    placeholder="请输入姓名"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="提货地址">
                                <el-input
                                    v-model="form.receiver_address"
                                    placeholder="请输入地址"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="联系方式">
                                <el-input
                                    v-model="form.phone_number"
                                    placeholder="请输入手机号"
                                ></el-input>
                            </el-form-item>
                            <el-button type="danger" class="serach"
                                >搜索</el-button
                            >
                        </el-form>
                    </el-col>
                    <el-col :span="6">
                        <div class="pull-right">
                            <el-button type="danger">添加团长信息</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <emo-table :config="table_config" />
            <emo-pagination style="margin-top: 15px" />
        </el-card>
    </div>
</template>
<script>
import EmoTable from "@/components/table/index";
import EmoPagination from "@/components/pagination/index";
export default {
    name: "GroupBuyingOrganizerManage",
    components: {
        EmoTable,
        EmoPagination,
    },
    data() {
        return {
            form: {
                group_buying_organizer_name: "",
                receiver_address: "",
                phone_number: "",
            },
            table_config: {
                thead: [
                    {
                        label: "会员ID",
                        prop: "user_id",
                        fixed: "left",
                        width: 70,
                    },
                    {
                        label: "团长姓名",
                        prop: "group_buying_organizer_name",
                        width: 100,
                    },
                    { label: "联系方式", prop: "phone_number", width: 120 },
                    { label: "店铺名称", prop: "store_name", width: 150 },
                    {
                        label: "推荐团长",
                        prop: "recommend_group_buying_organizer",
                        width: 100,
                    },
                    { label: "提货地址", prop: "receiver_address", width: 230 },
                    {
                        label: "佣金余额",
                        prop: "commission_balance",
                        width: 60,
                    },
                    { label: "收益总额", prop: "earnings_balance", width: 60 },
                    { label: "现金余额", prop: "cash_balance", width: 90 },
                    {
                        label: "团长状态",
                        prop: "recommend_group_buying_organizer_status",
                        type: "switch",
                        width: 90,
                    },
                    { label: "备注", prop: "remark", width: 200 },
                    { label: "申请时间", prop: "apply_time", width: 140 },
                ],
                checkbox: true,
                url: `/get_table_data`,
            },
        };
    },
};
</script>
<style lang='less' scoped>
.group_buying_organizer_manage {
    height: 100%;
    width: calc(100% - 160px);
    float: right;
    overflow-y: auto;
}
.emo-form-inline {
    display: flex;
    justify-content: space-evenly;
}
.pull-right {
    float: right;
}
.serach {
    height: 40px;
    margin-left: 12px;
}
</style>
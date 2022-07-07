<template>
    <div class="emo-table">
        <el-table
            :data="table_data"
            style="width: 100%"
            border
            max-width="250"
            height="500"
        >
            <!-- 表头checkbox选框默认设置 -->
            <el-table-column
                v-if="table_config.checkbox"
                type="selection"
                width="55"
                fixed
            >
            </el-table-column>
            <template v-for="item in table_config.thead">
                <!-- 数据类型 switch  -->
                <el-table-column
                    v-if="item.type === 'switch'"
                    :key="item.prop"
                    :label="item.label"
                    :prop="item.prop"
                    :width="item.width"
                >
                    <template slot-scope="scope">
                        <el-switch
                            @change="switchChange(scope.row)"
                            :disabled="scope.row.user_id == switch_disabled"
                            v-model="
                                scope.row
                                    .recommend_group_buying_organizer_status
                            "
                            active-value="1"
                            inactive-value="0"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
                <!-- 数据类型 function  -->
                <el-table-column
                    v-else-if="item.type === 'function'"
                    :key="item.prop"
                    :label="item.label"
                    :prop="item.prop"
                    :width="item.width"
                >
                    <template slot-scope="scope">
                        <!-- item.callback(scope.row) 把数据传出去  scope.row == data -->
                        <span>{{
                            item.callback && item.callback(scope.row.type)
                        }}</span>
                    </template>
                </el-table-column>
                <!-- 数据类型 image  -->
                <el-table-column
                    v-else-if="item.type === 'image'"
                    :key="item.prop"
                    :label="item.label"
                    :prop="item.prop"
                    :width="item.width"
                >
                    <template slot-scope="scope">
                        <el-image
                            style="width: 100px; height: 100px"
                            :src="scope.row.imgurl"
                            fit="fit"
                        ></el-image>
                    </template>
                </el-table-column>
                <!-- 普通类型 -->
                <el-table-column
                    v-else
                    :key="item.prop"
                    :label="item.label"
                    :prop="item.prop"
                    :width="item.width"
                    :fixed="item.fixed"
                    show-overflow-tooltip
                ></el-table-column>
            </template>
            <!-- 操作栏 默认设置 -->
            <el-table-column label="操作" fixed="right" width="150">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        :disabled="scope.row.user_id == edit_btn_disabled"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                    >
                    <el-button
                        size="mini"
                        type="danger"
                        :disabled="scope.row.user_id == del_btn_disabled"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getTableData } from "@/utils/http";
export default {
    name: "EmoTable",
    data() {
        return {
            table_data: [],
            table_config: {
                thead: [],
                checkbox: "",
                url: ``,
            },
            switch_disabled: "",
            edit_btn_disabled: "",
            del_btn_disabled: "",
        };
    },
    props: {
        config: {
            type: Object,
            default: () => {},
        },
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
            this.edit_btn_disabled = row.user_id;
            //处理完恢复
            // this.edit_btn_disabled = "";
        },
        handleDelete(index, row) {
            console.log(index, row);
            this.del_btn_disabled = row.user_id;
            //处理完恢复
            // this.del_btn_disabled = "";
        },
        switchChange(data) {
            /**
             * update 通过user_id更新数据库的 recommend_group_buying_organizer_status
             */
            // console.log(data.recommend_group_buying_organizer_status);
            // console.log(data.user_id);
            this.switch_disabled = data.user_id;
            //处理完成后,恢复可选状态
            // this.switch_disabled = "";
        },
        initConfig() {
            for (let key in this.config) {
                if (Object.keys(this.table_config).includes(key)) {
                    this.table_config[key] = this.config[key];
                }
            }
            /**
             * 配置完table表头后再去调用
             */
            this.getData(this.table_config.url);
        },
        /**
         * 请求table数据
         */
        getData(url_param) {
            let _this = this;
            getTableData(url_param).then((res) => {
                _this.table_data = res.data;
            });
        },
    },
    watch: {
        config: {
            handler(newValue) {
                this.initConfig();
                console.log("newValue", newValue);
            },
            immediate: true,
        },
    },
};
</script>

<style lang="less" scoped>
.el-table {
    height: 500px;
}
</style>

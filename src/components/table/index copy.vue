<template>
    <div class="emo-table">
        <el-table :data="tableData" style="width: 95.5%" border max-width="250">
            <el-table-column fixed prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="120"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="120"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="120"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="120"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="120"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="120"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="120"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="120"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="120"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column label="姓名" width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right" width="150">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                    >
                    <el-button
                        size="mini"
                        type="danger"
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
            tableData: [],
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            let _this = this;
            getTableData().then((res) => {
                console.log(res);
                _this.tableData = res.data;
            });
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
    },
};
</script>

<style lang="css" scoped>
.emo-table {
    width: 1250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
}
.el-table {
    margin-bottom: 5px;
}
</style>

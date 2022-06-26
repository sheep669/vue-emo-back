<template>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[9]"
            :page-size="9"
            layout="total,sizes,prev, pager, next, jumper"
            :total="54"
        >
        </el-pagination>
</template>

<script>
export default {
    name: "EmoPagination",
    data() {
        return { currentPage: 4 };
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
    },
};
</script>

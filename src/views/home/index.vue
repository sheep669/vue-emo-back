<template>
    <div style="width: 100%; height: calc(100% - 2px)">
        <div
            class="left"
            style="
                width: 160px;
                background: #ffffff;
                height: 100%;
                float: left;
                overflow-x: hidden;
                overflow-y: auto;
                border-top: 2px solid rgb(0 0 0 / 5%);
            "
        >
            <!-- 插入 emo-submenu-->
            <emo-submenu
                :subMenuData="subMenuData"
                :defaultActiveIndex="activeIndex"
            />
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { getMenuData } from "@/utils/http";
import EmoSubmenu from "@/components/submenu/index";
export default {
    name: "EmoHome",
    data() {
        return {
            subMenuData: [],
            activeIndex: "",
        };
    },
    created() {
        this.getSubMenuData();
        this.$router.push("sold_out");
    },
    methods: {
        getSubMenuData() {
            this.$router.addRoute("home", {
                path: "/sold_out",
                name: "sold_out",
                component: () => import("@/views/home/demo.vue"),
            });
            this.$router.addRoute("home", {
                path: "/out_stock",
                name: "out_stock",
                component: () => import("@/views/home/demo.vue"),
            });
            this.$router.addRoute("home", {
                path: "/in_stock",
                name: "/in_stock",
                component: () => import("@/views/home/demo2.vue"),
            });
            console.log("全部路由", this.$router.options.routes);
            let is_query = sessionStorage.getItem("is_query");
            let _this = this;
            if (!is_query) {
                getMenuData("/get_submenu_data").then((res) => {
                    console.log("res", res);
                    _this.subMenuData = res.data;
                    console.log("index=>", res.data[0].submenu[0].path);
                    _this.activeIndex = res.data[0].submenu[0].path;
                    sessionStorage.setItem("is_query", true);
                    sessionStorage.setItem("data", JSON.stringify(res.data));
                });
            } else {
                console.log("请求过了,不需要再次请求");
                let d = sessionStorage.getItem("data");
                let data = JSON.parse(d);
                console.log(data);
                _this.subMenuData = data;
                _this.activeIndex = data[0].submenu[0].path;
            }
        },
    },
    components: {
        EmoSubmenu,
    },
};
</script>
<style lang='less' scoped>
</style>
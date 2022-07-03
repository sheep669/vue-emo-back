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
            <emo-submenu :subMenuData="subMenuData" />
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
        };
    },
    created() {
        this.getSubMenuData();
    },
    methods: {
        getSubMenuData() {
            // const child_route_list = {
            //     path: "/sold_out",
            //     name: "aa",
            //     component: () => import("@/views/home/demo.vue"),
            // };
            // this.$router.options.routes.forEach((v) => {
            //     if (v.name == home && v.children) {

            //     }
            // });
            this.$router.addRoute("home", {
                path: "/sold_out",
                name: "sold_out",
                component: () => import("@/views/home/demo.vue"),
            });

            // console.log("全部路由", this.$router.options.routes);
            // let ar = this.$router.options.routes[1].children;
            // ar.push(child_route_list);
            // console.log("需要添加路由的位置", ar);
            // this.$router.addRoutes(this.$router.options.routes);
            // console.log("全部路由plus", this.$router.options.routes);
            let is_query = sessionStorage.getItem("is_query");
            let _this = this;
            if (!is_query) {
                getMenuData("/get_submenu_data").then((res) => {
                    console.log("res", res);
                    _this.subMenuData = res.data;
                    sessionStorage.setItem("is_query", true);
                    sessionStorage.setItem("data", JSON.stringify(res.data));
                });
            } else {
                console.log("请求过了,不需要再次请求");
                let d = sessionStorage.getItem("data");
                let data = JSON.parse(d);
                console.log(data);
                _this.subMenuData = data;
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
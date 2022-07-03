<!--
 * @Author: sheep669
 * @Description: 会员模块主侧边栏
 * @Date: 2022-07-03 22:46:44
-->
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
import { mapGetters } from "vuex";
import EmoSubmenu from "@/components/submenu/index";
export default {
    name: "EmoUser",
    data() {
        return {
            subMenuData: [],
            activeIndex: "",
        };
    },
    computed: mapGetters(["navData"]),
    created() {
        this.getSubMenuData();
        this.$router.push("user_list");
    },
    methods: {
        getSubMenuData() {
            console.log("全部路由", this.$router.options.routes);
            this.navData.forEach((v) => {
                if (v.name == "user") {
                    this.subMenuData = v.children;
                    this.activeIndex = v.children[0].submenu[0].path;
                    return;
                }
            });
            let submenu;
            this.subMenuData.forEach((v2) => {
                submenu = v2.submenu;
            });
            submenu.forEach((v3) => {
                this.$router.addRoute("user", {
                    path: v3.path,
                    component: () => import("@/views" + v3.component + ".vue"),
                });
            });
        },
    },
    components: {
        EmoSubmenu,
    },
};
</script>
<style lang='less' scoped>
</style>
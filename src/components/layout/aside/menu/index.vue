<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-side-bar"
    :collapse="toggle"
  >
    <sub-menu :menus="menus" index="sub"/>
  </el-menu>
</template>
<script>
import SubMenu from "@/components/layout/aside/menu/sub/index.vue";
export default {
  components: {
    SubMenu,
  },
  computed: {
    toggle() {
      return this.$store.state.toggle;
    },
    menus(){
        return this.$store.state.menus
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
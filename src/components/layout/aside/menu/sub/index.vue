<template>
  <template v-for="(item, ind) in menus" :key="currentIndex+ind">
    <el-menu-item v-if="!!!item.children || item.children.length === 0" :index="currentIndex+ind">
      <i :class="item.icon"></i>
      <template #title>{{ item.title }}</template>
    </el-menu-item>
    <el-submenu :index="currentIndex+ind" v-else>
      <template #title>
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>
      <sub-menu :menus="item.children" :index="currentIndex+ind" />
    </el-submenu>
  </template>
</template>
<script >
export default {
  name: "SubMenu",
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
    index:{
        type:[Number,String],
        default(){
            return ''
        }
    }
  },
  computed:{
      currentIndex(){
          let index = this.index
          return !!index?index:''
      }
  }
};
</script>
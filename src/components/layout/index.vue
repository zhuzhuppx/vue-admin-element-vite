
<template>
  <div class="app-layout">
    <el-container class="main-container">
      <el-aside class="asside" :width="toggle?'64px':'200px'"><Aside /></el-aside>
      <el-container class="content-container">
        <el-header class="header"><Header /></el-header>
        <el-main class="main-content"><Main /></el-main>
        <el-footer class="footer" v-if="showFooter"><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { Aside, Header, Footer, Main } from "./layout.js";
import appConfig from "@/appConfig.js";
import { computed } from "vue";
import { useStore } from "vuex";
const showFooter = appConfig.showFooter;
const store = useStore();
const toggle = computed(() => store.state.toggle);

</script>

<template>
  <i
    :class="['el-icon', !toggle ? 'el-icon-s-fold' : 'el-icon-s-unfold']"
    @click="toggleMenu"
  ></i>
  <Breadcrumb />
  <Avatar />
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Avatar from "./avatar/index.vue";
import Breadcrumb from "./breadcrumb/index.vue";
const store = useStore();
const toggle = computed(() => store.state.toggle);
function toggleMenu() {
  store.commit("toggleMenu");
}
</script>

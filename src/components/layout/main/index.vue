<template>
  <router-view></router-view>
</template>
<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
import computeHeight from "@/components/layout/main/computeHeight.js";
onMounted(computeHeight);
</script>
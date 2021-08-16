<template>
  <el-image v-if="appConfig.showLogo" class="logo"
    :src="!!appConfig.logoUrl?appConfig.logoUrl:defaultLogo"
    fit="contain"
  ></el-image>
</template>
<script setup>
import appConfig from '@/appConfig.js'
import defaultLogo from '@/assets/logo.png'

</script>
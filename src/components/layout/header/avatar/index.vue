<template>
  <div class="avatar">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar> user </el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="1">个人信息</el-dropdown-item>
          <el-dropdown-item command="2">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    handleCommand(cmd) {
      switch (+cmd) {
        case 1:
          this.$message.error("开发中");
          break;
        case 2:
          this.$store.dispatch("loginOut").then(() => {
            this.$router.push({ path: "/login" });
          });
          break;
      }
    },
  },
};
</script>
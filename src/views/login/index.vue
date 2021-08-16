<template>
  <div class="login-page">
    <el-form :model="formInline" class="login-form">
      <el-form-item label="">
        <div class="login-title">登录</div>
      </el-form-item>
      <el-form-item label="">
        <el-input
          v-model="formInline.loginName"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input
          type="password"
          v-model="formInline.password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script >
import { computed, ref, reactive } from "vue";
export default {
  data() {
    return {
      formInline: { loginName: "", password: "" },
    };
  },
  methods: {
    onSubmit() {
       this.$store.dispatch("login",{...this.formInline}).then(()=>{
         this.$router.push('/')
       });
    },
  },
};
</script>
<style scoped lang="scss">
.login-page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff !important;
  color: #333 !important;
  background-image: url("../../assets/login/bg.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-origin: border-box;
  background-position: top;
  background-attachment: fixed;
  .login-form {
    width: 512px;
    margin: 168px auto;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
    .login-btn {
      width: 100% !important;
    }
    .login-title {
      width: 100% !important;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>
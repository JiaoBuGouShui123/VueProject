<template>
<div class = "con1">
    <div class = "con2">
      <div class = "temp1"><img src="@/assets/logo_jw_w.png"></div>
      <div class = "temp2">江苏电子信息职业学院 教务处</div>
    </div>

    <div class = "temp3">
      <el-dropdown trigger="click" placement="bottom-start" popper-class="home-dropdown">
        <img src="@/assets/user_logo.jpg">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item divided @click="Userinfo">用户信息</el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function Userinfo() {
  router.push('/userinfo')
}

function logout() {
  localStorage.removeItem('user')
  router.push('/login')
}
</script>

<style scoped>
  .con1{
    background-color: #409Eff;
    display: flex;
    justify-content: space-between;
    height: 60px;
  }

  .con2{
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #fff;
    margin-left: 50px;
  }

  .temp1 {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .temp1 img {
    width: 50px;
    height: 50px;
    display: block;
  }

  .temp2 {
    display: flex;
    align-items: center;
    line-height: 1;
  }

  .temp3{
    display: flex;
    align-items: center;
    margin-right: 50px;
    padding: 0px 10px;
  }

  .temp3:hover{
    cursor: pointer;
    background-color: rgb(127, 187, 255);
  }

  .temp3 img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>

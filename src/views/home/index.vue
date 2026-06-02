<template>
  <!-- 页眉 -->
	<div class = "con1">
    <div class = "con2">
      <div class = "temp1"><img src="../../assets/logo_jw_w.png"></div>
      <div class = "temp2">江苏电子信息职业学院 教务处</div>
    </div>

    <div class = "temp3">
      <el-dropdown trigger="click" placement="bottom-start" popper-class="home-dropdown">
        <img src="../../assets/user_logo.jpg">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item divided @click="Userinfo">用户信息</el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

  </div>


  <!-- 导航栏 -->
    <div class="con3">
      <el-menu mode="horizontal" :ellipsis="false" class="nav-menu" @select="handleSelect">
        <el-menu-item index="1">采集平台</el-menu-item>

        <el-sub-menu index="2">
          <template #title>信息维护</template>
          <el-menu-item index="2-1">学生个人信息维护</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>选课</template>
          <el-menu-item index="3-1">自主选课</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>信息查询</template>
          <el-menu-item index="4-1">查询个人信息</el-menu-item>
          <el-menu-item index="4-2">成绩查询</el-menu-item>
          <el-menu-item index="4-3">毕业审核结果核查</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="5">
          <template #title>教学评价</template>
          <el-menu-item index="5-1">考试安排</el-menu-item>
          <el-menu-item index="5-2">监考管理</el-menu-item>
          <el-menu-item index="5-3">补考缓考</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="6">
          <template #title>实践教学</template>
          <el-menu-item index="6-1">学生评价</el-menu-item>
          <el-menu-item index="6-2">问卷调查</el-menu-item>
          <el-menu-item index="6-3">教学信息反馈</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="7">
          <template #title>毕业设计（论文）</template>
          <el-menu-item index="7-1">学生选题</el-menu-item>
          <el-menu-item index="7-2">题目修改申请</el-menu-item>
          <el-menu-item index="7-3">学生过程资料</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('user')
  router.push('/login')
}

function Userinfo() {
  router.push('/userinfo')
}

const handleSelect = (key, keyPath)=> {
  console.log(key, keyPath);
  if (key === '4-2') {
    router.push('/grade')
  }
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

  .con3 {
    border-bottom: 1px solid #e6e6e6;
  }

  .nav-menu {
    margin-left: 40px;
  }
</style>

<style>
body {
  margin: 0;
}

.home-dropdown {
  min-width: 120px !important;
}
</style>

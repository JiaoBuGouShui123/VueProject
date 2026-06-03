<template>
  <!-- 页眉 -->
  <div class="header">
    <div class="header-left">
      <div class="logo"><img src="../../assets/logo_jw_w.png"></div>
      <div class="header-title">江苏电子信息职业学院 教务处</div>
    </div>

    <div class="header-user">
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
  <div class="navbar">
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

  <!-- 主体内容区 -->
  <div class="main-body">
    <!-- 侧边栏 -->
    <div class="sidebar"></div>

    <!-- 内容区 -->
    <div class="content-area">
      <!-- 帖子卡片：通知公告 -->
      <div class="post-card">
        <div class="post-author">
          <div class="author-info">
            <div class="author-avatar">
              <img src="@/assets/touxiang.jpg">
            </div>
            <div class="author-details">
              <div class="author-name">觉不够睡</div>
              <div class="author-bio">睡觉</div>
            </div>
          </div>
        </div>
        <div class="post-preview">
          <div v-for="(item, index) in Notices" :key="index" class="post-item" @click="GotoDetail(item.id)">
            <div class="post-item-left">
              <span v-if="item.zd" class="post-tag--top">【置顶】</span>
              <span class="post-tag--notice">【通知】</span>
              <span class="post-title">{{ item.title }}</span>
            </div>
            <div class="post-time">{{ item.time }}</div>
          </div>
        </div>
      </div>

      <!-- 帖子卡片1：校园新闻（无限滚动） -->
      <div class="post-card1">
        <div class="post-author"></div>
        <div class="post-preview post-preview--scroll" v-infinite-scroll="loadMore" :infinite-scroll-disabled="disabled" infinite-scroll-distance="10">
          <div v-for="(item, index) in newsList" :key="index" class="post-item">
            <div class="post-item-left">
              <span class="post-tag--notice">【新闻】</span>
              <span class="post-title">{{ item.title }}</span>
            </div>
            <div class="post-time">{{ item.time }}</div>
          </div>
          <p v-if="loading" class="loading-tip">加载中...</p>
          <p v-if="noMore" class="loading-tip">— 没有更多了 —</p>
        </div>
      </div>

      <!-- 帖子卡片2 -->
      <div class="post-card2">
        <div class="post-author"></div>
        <div class="post-preview"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import Notices from '@/assets/data/notices.json'

const router = useRouter()

function logout() {
  localStorage.removeItem('user')
  router.push('/login')
}

function Userinfo() {
  router.push('/userinfo')
}

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
  if (key === '4-2') {
    router.push('/grade')
  }
}

function GotoDetail(id) {
  router.push('/noticedetail/' + id)
}

// ===== 无限滚动 =====
const count = ref(10)
const loading = ref(false)

const allNews = [
  { title: '我校在2025年江苏省职业院校技能大赛中荣获佳绩', time: '2025-04-20' },
  { title: '学校召开本科层次职业教育专业建设研讨会', time: '2025-04-18' },
  { title: '校领导带队赴企业开展访企拓岗专项行动', time: '2025-04-15' },
  { title: '我校学子在蓝桥杯全国软件大赛中获得一等奖', time: '2025-04-12' },
  { title: '学校举办2025年春季校园招聘会', time: '2025-04-10' },
  { title: '关于组织申报2025年度校级科研项目的通知', time: '2025-04-08' },
  { title: '我校获批3项教育部产学合作协同育人项目', time: '2025-04-05' },
  { title: '计算机与通信学院开展网络安全主题讲座', time: '2025-04-03' },
  { title: '学校召开2025年教学工作会议', time: '2025-03-30' },
  { title: '我校师生在省级创新创业大赛中斩获金奖', time: '2025-03-28' },
  { title: '后勤管理处开展校园食品安全专项检查', time: '2025-03-25' },
  { title: '关于图书馆延长开放时间的通知', time: '2025-03-22' },
]

const newsList = computed(() => allNews.slice(0, count.value))

const noMore = computed(() => count.value >= allNews.length)
const disabled = computed(() => loading.value || noMore.value)

function loadMore() {
  loading.value = true
  setTimeout(() => {
    count.value += 4
    loading.value = false
  }, 1000)
}
</script>

<style scoped>
/* ===== 页眉 ===== */
.header {
  background-color: #409Eff;
  display: flex;
  justify-content: space-between;
  height: 60px;
}

.header-left {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #fff;
  margin-left: 50px;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.logo img {
  width: 50px;
  height: 50px;
  display: block;
}

.header-title {
  display: flex;
  align-items: center;
  line-height: 1;
}

.header-user {
  display: flex;
  align-items: center;
  margin-right: 50px;
  padding: 0px 10px;
}

.header-user:hover {
  cursor: pointer;
  background-color: rgb(127, 187, 255);
}

.header-user img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

/* ===== 导航栏 ===== */
.navbar {
  border-bottom: 1px solid #e6e6e6;
}

.nav-menu {
  margin-left: 40px;
}

/* ===== 主体内容区 ===== */
.main-body {
  display: flex;
  gap: 5px;
  background-color: #e8e8e8;
}

/* ---- 侧边栏 ---- */
.sidebar {
  width: 25%;
  min-width: 300px;
  height: 500px;
  background-color: #fff;
}

/* ---- 内容区 ---- */
.content-area {
  width: 75%;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #e8e8e8;
}

/* ---- 帖子卡片 ---- */
.post-card {
  display: flex;
  gap: 5px;
  height: 200px;
}

.post-card1 {
  display: flex;
  gap: 5px;
  height: 280px;
}

.post-card2 {
  display: flex;
  gap: 5px;
  height: 280px;
}

/* ---- 帖子左侧：作者信息 ---- */
.post-author {
  width: 40%;
  display: flex;
  align-items: center;
  background-color: #fff;
}

/* ---- 帖子右侧：内容预览 ---- */
.post-preview {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}

.post-preview--scroll {
  overflow: auto;
}

/* ---- 帖子行：左侧元素 + 右侧日期 ---- */
.post-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px dashed #e6e6e6;
  cursor: pointer;
  transition: background-color 0.2s;
}

.post-item:hover {
  background-color: #f0f0f0;
}

.post-item:last-child {
  border-bottom: none;
}

.post-item-left {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
}

.post-tag--top {
  color: red;
  font-weight: bold;
  flex-shrink: 0;
}

.post-tag--notice {
  color: #409Eff;
  font-weight: 600;
  flex-shrink: 0;
}

.post-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post-time {
  flex-shrink: 0;
  margin-left: 16px;
  color: #909399;
  font-size: 13px;
}

.loading-tip {
  text-align: center;
  color: #909399;
  font-size: 13px;
  padding: 10px 0;
}

/* ---- 作者信息行：头像 + 文字 ---- */
.author-info {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.author-avatar {
  flex-shrink: 0;
  margin-left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.author-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.author-name {
  font-size: 18px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 8px;
}

.author-bio {
  font-size: 14px;
  color: #909399;
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

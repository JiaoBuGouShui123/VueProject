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
    <!-- 侧边栏 我的应用 -->
    <div class="sidebar">
      <div class="sidebar-header">
        <span>我的应用</span>
        <Setting class="sidebar-setting" @click="openSetting" />
      </div>
      <el-divider style="margin-top: 10px; margin-bottom: 0;" />
      <div class="apps-grid">
        <div v-for="(app, index) in appsWithIcons" :key="index" class="app-item" @click="gotoApp(app.id)">
          <img :src="app.iconUrl" class="app-icon">
          <span class="app-name">{{ app.name }}</span>
        </div>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="content-area">
      <!-- 帖子卡片：通知公告 -->
      <div class="post-card">
        <div class="post-left">
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
        <div class="post-left post-left--tabs">
          <el-tabs v-model="infoTab" class="info-tabs">
            <el-tab-pane label="成绩" name="grade">
              <div class="tab-list">
                <div v-for="(item, index) in gradeList" :key="index" class="post-item">
                  <div class="post-item-left">
                    <span class="post-title">{{ item.course }}</span>
                  </div>
                  <div class="post-time">{{ item.score }}分</div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="考试" name="exam">
              <div class="tab-list">
                <div v-for="(item, index) in examList" :key="index" class="post-item">
                  <div class="post-item-left">
                    <span class="post-title">{{ item.course }}</span>
                  </div>
                  <div class="post-time">{{ item.time }}</div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
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

      <!-- 帖子卡片2：课程表 -->
      <div class="post-card2">
        <div class="post-left post-left--schedule">
          <div class="schedule-wrap">
            <div class="schedule-title">课程表</div>
            <el-table :data="scheduleData" border stripe class="schedule-table">
              <el-table-column prop="period" label="节次" width="70" align="center" />
              <el-table-column prop="mon" label="周一" align="center">
                <template #default="{ row }">{{ row.mon || '—' }}</template>
              </el-table-column>
              <el-table-column prop="tue" label="周二" align="center">
                <template #default="{ row }">{{ row.tue || '—' }}</template>
              </el-table-column>
              <el-table-column prop="wed" label="周三" align="center">
                <template #default="{ row }">{{ row.wed || '—' }}</template>
              </el-table-column>
              <el-table-column prop="thu" label="周四" align="center">
                <template #default="{ row }">{{ row.thu || '—' }}</template>
              </el-table-column>
              <el-table-column prop="fri" label="周五" align="center">
                <template #default="{ row }">{{ row.fri || '—' }}</template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="post-preview post-preview--tabs">
          <el-tabs v-model="activeTab" class="message-tabs">
            <el-tab-pane label="消息" name="messages">
              <div class="post-preview--scroll" v-infinite-scroll="loadMoreMsg" :infinite-scroll-disabled="msgDisabled" infinite-scroll-distance="10">
                <div v-for="(item, index) in msgList" :key="index" class="post-item">
                  <div class="post-item-left">
                    <span class="post-tag--notice">{{ index % 2 === 0 ? '【停课通知】' : '【调课通知】' }}</span>
                    <span class="post-title">{{ item.title }}</span>
                  </div>
                  <div class="post-time">{{ item.time }}</div>
                </div>
                <p v-if="msgLoading" class="loading-tip">加载中...</p>
                <p v-if="msgNoMore" class="loading-tip">— 没有更多了 —</p>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>

  <!-- 修改应用弹窗 -->
  <el-dialog v-model="dialogVisible" title="修改应用" width="700px">
    <!-- 上半部分：我的应用 -->
    <div class="dialog-label">我的应用</div>
    <div class="apps-grid dialog-grid">
      <div v-for="(app, index) in appsWithIcons" :key="'a' + index" class="app-item" @click="removeFromMyApps(index)">
        <img :src="app.iconUrl" class="app-icon">
        <span class="app-name">{{ app.name }}</span>
      </div>
    </div>

    <el-divider />

    <!-- 下半部分：全部应用 -->
    <div class="dialog-label">全部应用</div>
    <div class="apps-grid dialog-grid">
      <div v-for="(app, index) in allAppsWithIcons" :key="'b' + index" class="app-item" @click="addToMyApps(index)">
        <img :src="app.iconUrl" class="app-icon">
        <span class="app-name">{{ app.name }}</span>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import { Setting } from '@element-plus/icons-vue'
import Notices from '@/assets/data/notices.json'
import scheduleData from '@/assets/data/schedule.json'
import appsData from '@/assets/data/apps.json'
import allAppsData from '@/assets/data/allApps.json'

// 预加载 assets 目录下所有图标
const iconModules = import.meta.glob('../../assets/ico_but*.png', { eager: true })
const iconMap = {}
for (const [path, mod] of Object.entries(iconModules)) {
  const filename = path.split('/').pop()
  iconMap[filename] = mod.default
}

function withIcon(app) {
  return { ...app, iconUrl: iconMap[app.img] || '' }
}

// 响应式应用列表
const myApps = ref(appsData.map(withIcon))
const availableApps = ref(allAppsData.map(withIcon))

// 为每个 app 解析图标 URL
const appsWithIcons = computed(() => myApps.value)
const allAppsWithIcons = computed(() => availableApps.value)

// 添加到我的应用
function addToMyApps(index) {
  const app = availableApps.value.splice(index, 1)[0]
  myApps.value.push(app)
}

// 从我的应用移除
function removeFromMyApps(index) {
  const app = myApps.value.splice(index, 1)[0]
  availableApps.value.push(app)
}

const router = useRouter()

// ===== 修改应用弹窗 =====
const dialogVisible = ref(false)

function openSetting() {
  dialogVisible.value = true
}

function logout() {
  localStorage.removeItem('user')
  router.push('/login')
}



function Userinfo() {
  router.push('/userinfo')
}

const menuRouteMap = {
  '2-1': '/userinfo',
  '4-1': '/userinfo',
  '4-2': '/grade',
}

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
  if (menuRouteMap[key]) {
    router.push(menuRouteMap[key])
  }
}

function GotoDetail(id) {
  router.push('/noticedetail/' + id)
}

// 应用跳转映射
const appRouteMap = {
  1: '/schedule',
  2: '/userinfo',
  3: '/grade',
  4: '/classmate',
  // 5: '/selectcourse',  
  // 6: '/teacherquery',
}

function gotoApp(id) {
  if (appRouteMap[id]) {
    router.push(appRouteMap[id])
  }
}

// ===== 消息 Tab =====
const activeTab = ref('messages')
const infoTab = ref('grade')

// ===== 成绩数据 =====
const gradeList = [
  { course: '高等数学', score: 85 },
  { course: '大学英语', score: 78 },
  { course: 'C语言程序设计', score: 92 },
  { course: '数据结构', score: 88 },
  { course: '计算机网络', score: 55 },
]

// ===== 考试数据 =====
const examList = [
  { course: '高等数学', time: '2025-06-20' },
  { course: '大学英语', time: '2025-06-22' },
  { course: 'C语言程序设计', time: '2025-06-25' },
  { course: '数据结构', time: '2025-06-27' },
  { course: '计算机网络', time: '2025-06-30' },
]

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

// ===== 消息通知 =====
const allMsgs = [
  { title: '关于4月15日全校停课的通知', time: '2025-04-14' },
  { title: '第10周周三5-6节调课通知', time: '2025-04-12' },
  { title: '关于五一假期前后调课安排', time: '2025-04-10' },
  { title: '4月20日机房停课维护通知', time: '2025-04-08' },
  { title: '第11周周二3-4节调至周四', time: '2025-04-05' },
  { title: '关于校运动会期间停课通知', time: '2025-04-01' },
  { title: '第12周周五调课安排通知', time: '2025-03-28' },
  { title: '关于清明节放假调课通知', time: '2025-03-25' },
]

const msgCount = ref(8)
const msgLoading = ref(false)

const msgList = computed(() => allMsgs.slice(0, msgCount.value))
const msgNoMore = computed(() => msgCount.value >= allMsgs.length)
const msgDisabled = computed(() => msgLoading.value || msgNoMore.value)

function loadMoreMsg() {
  msgLoading.value = true
  setTimeout(() => {
    msgCount.value += 4
    msgLoading.value = false
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

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px 0;
  font-size: 25px;
  font-weight: 600;
  color: #303133;
}

.sidebar-header :deep(svg) {
  width: 25px;
  height: 25px;
}

/* ---- 应用网格 ---- */
.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px 8px;
  padding: 16px 12px;
}

.app-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.app-icon {
  width: 36px;
  height: 36px;
}

.app-name {
  font-size: 12px;
  color: #606266;
  text-align: center;
}

.dialog-label {
  font-size: 14px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 10px;
}

.dialog-grid {
  padding: 0;
  gap: 12px 8px;
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
  height: 260px;
}

/* ---- 帖子左侧：作者信息 ---- */
.post-left {
  width: 40%;
  display: flex;
  align-items: center;
  background-color: #fff;
}

.post-left--schedule {
  align-items: flex-start;
  overflow: auto;
}

.post-left--tabs {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
}

.info-tabs {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.info-tabs :deep(.el-tabs__content) {
  flex: 1;
  overflow: hidden;
}

.info-tabs :deep(.el-tabs__header) {
  margin: 0;
  padding: 0 12px;
}

.tab-list {
  overflow: auto;
  height: 100%;
}

/* ---- 课程表 ---- */
.schedule-wrap {
  width: 100%;
  padding: 12px 10px;
}

.schedule-title {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 10px;
}

.schedule-table {
  font-size: 12px;
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

.post-preview--tabs {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.message-tabs {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.message-tabs :deep(.el-tabs__content) {
  flex: 1;
  overflow: hidden;
}

.message-tabs :deep(.el-tabs__header) {
  margin: 0;
  padding: 0 16px;
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

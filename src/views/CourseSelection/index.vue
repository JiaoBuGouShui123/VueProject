<template>
  <div class="course-page">
    <!-- 标题 -->
    <div class="page-header">
      <h2>选课页面</h2>
    </div>

    <!-- 课程列表 -->
    <div class="page-body">
      <!-- 已选课程 -->
      <div v-if="selectedCourses.length" class="section">
        <div class="section-title">已选课程（{{ selectedCourses.length }}）</div>
        <div class="course-list">
          <div v-for="course in selectedCourses" :key="course.id" class="course-item course-item--selected" @click="deselect(course.id)">
            <div class="course-left">
              <span class="course-index">{{ course.id }}</span>
              <span class="course-name">{{ course.name }}</span>
            </div>
            <div class="course-right">
              <span class="course-teacher">{{ course.teacher }}</span>
              <el-tag :type="course.classroom === '线上' ? 'success' : ''" size="small" effect="plain">
                {{ course.classroom }}
              </el-tag>
              <el-tag type="danger" size="small">退选</el-tag>
            </div>
          </div>
        </div>
      </div>

      <el-divider v-if="selectedCourses.length && unselectedCourses.length" />

      <!-- 未选课程 -->
      <div class="section">
        <div class="section-title">未选课程（{{ unselectedCourses.length }}）</div>
        <div class="course-list">
          <div v-for="course in unselectedCourses" :key="course.id" class="course-item" @click="select(course.id)">
            <div class="course-left">
              <span class="course-index">{{ course.id }}</span>
              <span class="course-name">{{ course.name }}</span>
            </div>
            <div class="course-right">
              <span class="course-teacher">{{ course.teacher }}</span>
              <el-tag :type="course.classroom === '线上' ? 'success' : ''" size="small" effect="plain">
                {{ course.classroom }}
              </el-tag>
              <el-tag type="primary" size="small">选课</el-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import coursesData from '@/assets/data/course.json'

const selectedIds = ref([])

const selectedCourses = computed(() => coursesData.filter(c => selectedIds.value.includes(c.id)))
const unselectedCourses = computed(() => coursesData.filter(c => !selectedIds.value.includes(c.id)))

function select(id) {
  if (!selectedIds.value.includes(id)) {
    selectedIds.value.push(id)
  }
}

function deselect(id) {
  const idx = selectedIds.value.indexOf(id)
  if (idx >= 0) {
    selectedIds.value.splice(idx, 1)
  }
}
</script>

<style scoped>
.course-page {
  min-height: 100vh;
  background-color: #f0f2f5;
}

.page-header {
  text-align: center;
  padding: 24px 0 20px;
  background: linear-gradient(135deg, #409Eff, #66b1ff);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.page-header h2 {
  margin: 0;
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 4px;
}

.page-body {
  padding: 24px 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 12px;
  padding-left: 12px;
  border-left: 4px solid #409Eff;
}

.course-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.course-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #ebeef5;
}

.course-item:hover {
  background: #ecf5ff;
  border-color: #409Eff;
  transform: translateX(4px);
}

.course-item--selected {
  border-color: #f56c6c;
}

.course-item--selected:hover {
  background: #fef0f0;
  border-color: #f56c6c;
}

.course-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.course-index {
  font-size: 18px;
  font-weight: bold;
  color: #409Eff;
  width: 32px;
  text-align: center;
}

.course-name {
  font-size: 15px;
  font-weight: 600;
  color: #303133;
}

.course-right {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}

.course-teacher {
  font-size: 13px;
  color: #909399;
  min-width: 60px;
  text-align: right;
}
</style>

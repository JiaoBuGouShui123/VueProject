<template>
  <div class="grade-page">
    <!-- 顶栏 -->
    <Head />

    <!-- 标题 -->
    <div class="page-header">
      <h2>成绩查询</h2>
    </div>

    <!-- 表格主体 -->
    <div class="page-body">
      <el-card class="grade-card" shadow="hover">
        <el-table :data="gradeData" border stripe class="grade-table" max-height="550">
          <el-table-column prop="course" label="课程名称" min-width="180" />
          <el-table-column prop="type" label="课程类别" width="110" align="center">
            <template #default="{ row }">
              <el-tag :type="row.type === '必修' ? 'danger' : 'warning'" effect="plain">
                {{ row.type }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="credit" label="学分" width="80" align="center" />
          <el-table-column prop="score" label="成绩" width="100" align="center">
            <template #default="{ row }">
              <el-tag :type="row.score >= 90 ? '' : row.score >= 60 ? 'success' : 'danger'">
                {{ row.score }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="term" label="学期" width="180" align="center" />
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Head from '../../components/head.vue'

const gradeData = ref([
  { course: '高等数学（上）', type: '必修', credit: 4, score: 85, term: '2024-2025 第一学期' },
  { course: '高等数学（下）', type: '必修', credit: 4, score: 78, term: '2024-2025 第二学期' },
  { course: '大学英语（一）', type: '必修', credit: 3, score: 80, term: '2024-2025 第一学期' },
  { course: '大学英语（二）', type: '必修', credit: 3, score: 72, term: '2024-2025 第二学期' },
  { course: 'C语言程序设计', type: '必修', credit: 3, score: 92, term: '2024-2025 第一学期' },
  { course: '数据结构', type: '必修', credit: 4, score: 88, term: '2024-2025 第二学期' },
  { course: '计算机网络', type: '必修', credit: 3, score: 55, term: '2024-2025 第一学期' },
  { course: '数据库原理', type: '必修', credit: 3, score: 76, term: '2024-2025 第二学期' },
  { course: '操作系统', type: '必修', credit: 4, score: 83, term: '2024-2025 第二学期' },
  { course: '思政课', type: '必修', credit: 2, score: 90, term: '2024-2025 第一学期' },
  { course: '体育（一）', type: '必修', credit: 1, score: 95, term: '2024-2025 第一学期' },
  { course: '体育（二）', type: '必修', credit: 1, score: 88, term: '2024-2025 第二学期' },
  { course: 'Java程序设计', type: '选修', credit: 2, score: 86, term: '2024-2025 第二学期' },
  { course: 'Python基础', type: '选修', credit: 2, score: 91, term: '2024-2025 第二学期' },
  { course: '网页设计与制作', type: '选修', credit: 2, score: 74, term: '2024-2025 第一学期' },
])
</script>

<style scoped>
.grade-page {
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
  display: flex;
  justify-content: center;
  padding: 30px 40px;
}

.grade-card {
  width: 100%;
  max-width: 1000px;
}

.grade-table {
  width: 100%;
  font-size: 14px;
}
</style>

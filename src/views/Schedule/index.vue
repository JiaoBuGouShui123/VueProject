<template>
  <div class="schedule-page">
    <!-- 顶部标题 -->
    <div class="schedule-header">
      <h2>课程表</h2>
    </div>

    <!-- 课程表主体 -->
    <div class="schedule-body">
      <el-table :data="tableData" :span-method="spanMethod" border stripe class="schedule-table">
        <el-table-column prop="period" label="时间段" width="80" align="center" />
        <el-table-column prop="section" label="节次" width="80" align="center" />
        <el-table-column prop="mon" label="星期一" align="center">
          <template #default="{ row }">{{ row.mon || '' }}</template>
        </el-table-column>
        <el-table-column prop="tue" label="星期二" align="center">
          <template #default="{ row }">{{ row.tue || '' }}</template>
        </el-table-column>
        <el-table-column prop="wed" label="星期三" align="center">
          <template #default="{ row }">{{ row.wed || '' }}</template>
        </el-table-column>
        <el-table-column prop="thu" label="星期四" align="center">
          <template #default="{ row }">{{ row.thu || '' }}</template>
        </el-table-column>
        <el-table-column prop="fri" label="星期五" align="center">
          <template #default="{ row }">{{ row.fri || '' }}</template>
        </el-table-column>
        <el-table-column prop="sat" label="星期六" align="center">
          <template #default="{ row }">{{ row.sat || '' }}</template>
        </el-table-column>
        <el-table-column prop="sun" label="星期日" align="center">
          <template #default="{ row }">{{ row.sun || '' }}</template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
// 每行代表1节课，同一天连续两行同一课程自动合并为"大课"
const tableData = [
  { period: '上午', section: '1节', mon: '高等数学', tue: '大学英语', wed: 'C语言', thu: '数据结构', fri: '计算机网络', sat: '', sun: '' },
  { period: '上午', section: '2节', mon: '高等数学', tue: '大学英语', wed: 'C语言', thu: '数据结构', fri: '计算机网络', sat: '', sun: '' },
  { period: '上午', section: '3节', mon: '大学英语', tue: '数据结构', wed: '高等数学', thu: '体育', fri: 'C语言', sat: '', sun: '' },
  { period: '上午', section: '4节', mon: '大学英语', tue: '数据结构', wed: '高等数学', thu: '体育', fri: 'C语言', sat: '', sun: '' },
  { period: '下午', section: '5节', mon: '数据库原理', tue: '操作系统', wed: '', thu: '计算机网络', fri: '数据库原理', sat: '', sun: '' },
  { period: '下午', section: '6节', mon: '数据库原理', tue: '操作系统', wed: '', thu: '计算机网络', fri: '数据库原理', sat: '', sun: '' },
  { period: '下午', section: '7节', mon: '操作系统', tue: '数据库原理', wed: '思政课', thu: '', fri: '', sat: '', sun: '' },
  { period: '下午', section: '8节', mon: '操作系统', tue: '数据库原理', wed: '思政课', thu: '', fri: '', sat: '', sun: '' },
  { period: '下午', section: '9节', mon: '', tue: '', wed: '', thu: '操作系统', fri: '', sat: '', sun: '' },
]

// 定义哪些列需要合并课程单元格
const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

function spanMethod({ rowIndex, columnIndex }) {
  // 第一列（时间段）：上午合并4行，下午合并5行
  if (columnIndex === 0) {
    if (rowIndex === 0) return { rowspan: 4, colspan: 1 }
    if (rowIndex === 4) return { rowspan: 5, colspan: 1 }
    if (rowIndex >= 1 && rowIndex <= 3) return { rowspan: 0, colspan: 0 }
    if (rowIndex >= 5 && rowIndex <= 8) return { rowspan: 0, colspan: 0 }
  }

  // 课程列（columnIndex >= 2）：同一课程连续两行合并
  if (columnIndex >= 2) {
    const key = dayKeys[columnIndex - 2]
    const cur = tableData[rowIndex][key]
    const prev = rowIndex > 0 ? tableData[rowIndex - 1][key] : null
    const next = rowIndex < tableData.length - 1 ? tableData[rowIndex + 1][key] : null

    // 当前行与上一行课程相同：被合并
    if (cur && prev === cur) {
      return { rowspan: 0, colspan: 0 }
    }
    // 当前行与下一行课程相同：合并两行
    if (cur && next === cur) {
      return { rowspan: 2, colspan: 1 }
    }
  }

  return { rowspan: 1, colspan: 1 }
}
</script>

<style scoped>
.schedule-page {
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px 0;
}

.schedule-header {
  text-align: center;
  margin-bottom: 20px;
}

.schedule-header h2 {
  margin: 0;
  font-size: 24px;
  color: #303133;
}

.schedule-body {
  display: flex;
  justify-content: center;
}

.schedule-table {
  width: 800px;
  height: 600px;
}
</style>

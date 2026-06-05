<template>
  <div class="schedule-page">
    <!-- 顶部标题 -->
    <div class="page-header">
      <h2>课程表</h2>
    </div>

    <!-- 课程表主体 -->
    <div class="page-body">
      <el-table :data="tableData" :span-method="spanMethod" :cell-class-name="cellClassName" border stripe class="schedule-table" height="100%">
        <el-table-column prop="period" label="时间段" width="80" align="center" />
        <el-table-column prop="section" label="节次" width="80" align="center" />
        <el-table-column prop="mon" label="星期一" align="center">
          <template #default="{ row }">
            <div v-if="row.mon" class="course-cell">
              <div class="course-name">{{ row.mon }}</div>
              <div class="course-info">{{ row.monTeacher }}</div>
              <div class="course-info">{{ row.monRoom }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="tue" label="星期二" align="center">
          <template #default="{ row }">
            <div v-if="row.tue" class="course-cell">
              <div class="course-name">{{ row.tue }}</div>
              <div class="course-info">{{ row.tueTeacher }}</div>
              <div class="course-info">{{ row.tueRoom }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="wed" label="星期三" align="center">
          <template #default="{ row }">
            <div v-if="row.wed" class="course-cell">
              <div class="course-name">{{ row.wed }}</div>
              <div class="course-info">{{ row.wedTeacher }}</div>
              <div class="course-info">{{ row.wedRoom }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="thu" label="星期四" align="center">
          <template #default="{ row }">
            <div v-if="row.thu" class="course-cell">
              <div class="course-name">{{ row.thu }}</div>
              <div class="course-info">{{ row.thuTeacher }}</div>
              <div class="course-info">{{ row.thuRoom }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="fri" label="星期五" align="center">
          <template #default="{ row }">
            <div v-if="row.fri" class="course-cell">
              <div class="course-name">{{ row.fri }}</div>
              <div class="course-info">{{ row.friTeacher }}</div>
              <div class="course-info">{{ row.friRoom }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="sat" label="星期六" align="center">
          <template #default="{ row }">
            <div v-if="row.sat" class="course-cell">
              <div class="course-name">{{ row.sat }}</div>
              <div class="course-info">{{ row.satTeacher }}</div>
              <div class="course-info">{{ row.satRoom }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="sun" label="星期日" align="center">
          <template #default="{ row }">
            <div v-if="row.sun" class="course-cell">
              <div class="course-name">{{ row.sun }}</div>
              <div class="course-info">{{ row.sunTeacher }}</div>
              <div class="course-info">{{ row.sunRoom }}</div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  { period: '上午', section: '1节', mon: '高等数学', monTeacher: '张建国', monRoom: 'J1-201', tue: '大学英语', tueTeacher: '李美玲', tueRoom: 'J2-305', wed: 'C语言', wedTeacher: '王磊', wedRoom: 'S1-102', thu: '数据结构', thuTeacher: '陈志强', thuRoom: 'J3-408', fri: '计算机网络', friTeacher: '刘伟', friRoom: 'S2-201', sat: '', satTeacher: '', satRoom: '', sun: '', sunTeacher: '', sunRoom: '' },
  { period: '上午', section: '2节', mon: '高等数学', monTeacher: '张建国', monRoom: 'J1-201', tue: '大学英语', tueTeacher: '李美玲', tueRoom: 'J2-305', wed: 'C语言', wedTeacher: '王磊', wedRoom: 'S1-102', thu: '数据结构', thuTeacher: '陈志强', thuRoom: 'J3-408', fri: '计算机网络', friTeacher: '刘伟', friRoom: 'S2-201', sat: '', satTeacher: '', satRoom: '', sun: '', sunTeacher: '', sunRoom: '' },
  { period: '上午', section: '3节', mon: '大学英语', monTeacher: '李美玲', monRoom: 'J2-305', tue: '数据结构', tueTeacher: '陈志强', tueRoom: 'J3-408', wed: '高等数学', wedTeacher: '张建国', wedRoom: 'J1-201', thu: '体育', thuTeacher: '赵刚', thuRoom: '操场', fri: 'C语言', friTeacher: '王磊', friRoom: 'S1-102', sat: '', satTeacher: '', satRoom: '', sun: '', sunTeacher: '', sunRoom: '' },
  { period: '上午', section: '4节', mon: '大学英语', monTeacher: '李美玲', monRoom: 'J2-305', tue: '数据结构', tueTeacher: '陈志强', tueRoom: 'J3-408', wed: '高等数学', wedTeacher: '张建国', wedRoom: 'J1-201', thu: '体育', thuTeacher: '赵刚', thuRoom: '操场', fri: 'C语言', friTeacher: '王磊', friRoom: 'S1-102', sat: '', satTeacher: '', satRoom: '', sun: '', sunTeacher: '', sunRoom: '' },
  { period: '下午', section: '5节', mon: '数据库原理', monTeacher: '周明', monRoom: 'S3-101', tue: '操作系统', tueTeacher: '吴昊', tueRoom: 'J1-303', wed: '', wedTeacher: '', wedRoom: '', thu: '计算机网络', thuTeacher: '刘伟', thuRoom: 'S2-201', fri: '数据库原理', friTeacher: '周明', friRoom: 'S3-101', sat: '', satTeacher: '', satRoom: '', sun: '', sunTeacher: '', sunRoom: '' },
  { period: '下午', section: '6节', mon: '数据库原理', monTeacher: '周明', monRoom: 'S3-101', tue: '操作系统', tueTeacher: '吴昊', tueRoom: 'J1-303', wed: '', wedTeacher: '', wedRoom: '', thu: '计算机网络', thuTeacher: '刘伟', thuRoom: 'S2-201', fri: '数据库原理', friTeacher: '周明', friRoom: 'S3-101', sat: '', satTeacher: '', satRoom: '', sun: '', sunTeacher: '', sunRoom: '' },
  { period: '下午', section: '7节', mon: '操作系统', monTeacher: '吴昊', monRoom: 'J1-303', tue: '数据库原理', tueTeacher: '周明', tueRoom: 'S3-101', wed: '思政课', wedTeacher: '马丽', wedRoom: 'J4-501', thu: '', thuTeacher: '', thuRoom: '', fri: '', friTeacher: '', friRoom: '', sat: '', satTeacher: '', satRoom: '', sun: '', sunTeacher: '', sunRoom: '' },
  { period: '下午', section: '8节', mon: '操作系统', monTeacher: '吴昊', monRoom: 'J1-303', tue: '数据库原理', tueTeacher: '周明', tueRoom: 'S3-101', wed: '思政课', wedTeacher: '马丽', wedRoom: 'J4-501', thu: '', thuTeacher: '', thuRoom: '', fri: '', friTeacher: '', friRoom: '', sat: '', satTeacher: '', satRoom: '', sun: '', sunTeacher: '', sunRoom: '' },
  { period: '下午', section: '9节', mon: '', monTeacher: '', monRoom: '', tue: '', tueTeacher: '', tueRoom: '', wed: '', wedTeacher: '', wedRoom: '', thu: '操作系统', thuTeacher: '吴昊', thuRoom: 'J1-303', fri: '', friTeacher: '', friRoom: '', sat: '', satTeacher: '', satRoom: '', sun: '', sunTeacher: '', sunRoom: '' },
]

const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

function spanMethod({ rowIndex, columnIndex }) {
  if (columnIndex === 0) {
    if (rowIndex === 0) return { rowspan: 4, colspan: 1 }
    if (rowIndex === 4) return { rowspan: 5, colspan: 1 }
    if (rowIndex >= 1 && rowIndex <= 3) return { rowspan: 0, colspan: 0 }
    if (rowIndex >= 5 && rowIndex <= 8) return { rowspan: 0, colspan: 0 }
  }
  if (columnIndex >= 2) {
    const key = dayKeys[columnIndex - 2]
    const cur = tableData[rowIndex][key]
    const prev = rowIndex > 0 ? tableData[rowIndex - 1][key] : null
    const next = rowIndex < tableData.length - 1 ? tableData[rowIndex + 1][key] : null
    if (cur && prev === cur) return { rowspan: 0, colspan: 0 }
    if (cur && next === cur) return { rowspan: 2, colspan: 1 }
  }
  return { rowspan: 1, colspan: 1 }
}

// 课程颜色映射
const colorMap = {
  '高等数学': 'course-math',
  '大学英语': 'course-english',
  'C语言': 'course-c',
  '数据结构': 'course-ds',
  '计算机网络': 'course-net',
  '体育': 'course-pe',
  '数据库原理': 'course-db',
  '操作系统': 'course-os',
  '思政课': 'course-politics',
}

function cellClassName({ row, column }) {
  const prop = column.property
  if (!prop || !dayKeys.includes(prop)) return ''
  const course = row[prop]
  return course ? (colorMap[course] || '') : ''
}
</script>

<style scoped>
.schedule-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
}

.page-header {
  text-align: center;
  padding: 24px 0 20px;
  background: linear-gradient(135deg, #409Eff, #66b1ff);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.page-header h2 {
  margin: 0;
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 4px;
}

.page-body {
  flex: 1;
  padding: 16px;
  overflow: hidden;
}

.schedule-table {
  width: 100%;
  font-size: 13px;
}

.schedule-table :deep(.el-table__header th) {
  font-size: 14px;
  font-weight: 600;
}

.course-cell {
  padding: 4px 0;
}

.course-name {
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 2px;
}

.course-info {
  font-size: 11px;
  color: #666;
}

/* 课程配色 */
:deep(.course-math) { background-color: #e3f2fd !important; }
:deep(.course-english) { background-color: #fce4ec !important; }
:deep(.course-c) { background-color: #e8f5e9 !important; }
:deep(.course-ds) { background-color: #fff3e0 !important; }
:deep(.course-net) { background-color: #f3e5f5 !important; }
:deep(.course-pe) { background-color: #e0f7fa !important; }
:deep(.course-db) { background-color: #fff8e1 !important; }
:deep(.course-os) { background-color: #f1f8e9 !important; }
:deep(.course-politics) { background-color: #fbe9e7 !important; }
</style>

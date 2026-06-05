<template>
  <div class="classmate-page">
    <!-- 顶部标题 -->
    <div class="page-header">
      <h2>班级查询</h2>
    </div>

    <!-- 表格主体 -->
    <div class="page-body">
      <el-table :data="stus" border stripe class="classmate-table" height="100%">
        <el-table-column prop="xh" label="学号" width="140" align="center" />
        <el-table-column prop="xm" label="姓名" width="100" align="center" />
        <el-table-column prop="xb" label="性别" width="70" align="center" />
        <el-table-column prop="bjmc" label="班级" width="100" align="center" />
        <el-table-column prop="zymc" label="专业" min-width="180" align="center" />
        <el-table-column prop="jgmc" label="学院" min-width="200" align="center" />
        <el-table-column prop="njmc" label="年级" width="80" align="center" />
        <el-table-column prop="qdfs" label="签到方式" width="110" align="center" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import stus from '@/assets/data/stus.json'
</script>

<style scoped>
.classmate-page {
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

.classmate-table {
  width: 100%;
  font-size: 14px;
}
</style>

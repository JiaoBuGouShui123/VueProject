<template>
    <div>
        <Head />
        <div class="main-content">
            <el-card class="grade-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <el-icon><Trophy /></el-icon>
                        <span>成绩查询</span>
                    </div>
                </template>

                <el-table :data="gradeData" border stripe style="width: 100%">
                    <el-table-column prop="course" label="课程名称" />
                    <el-table-column prop="credit" label="学分" width="80" />
                    <el-table-column prop="score" label="成绩" width="100">
                        <template #default="{ row }">
                            <el-tag :type="row.score >= 60 ? 'success' : 'danger'">
                                {{ row.score }}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="term" label="学期" width="140" />
                </el-table>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Trophy } from '@element-plus/icons-vue'
import Head from '../../components/head.vue'

const gradeData = ref([
    { course: '高等数学', credit: 4, score: 85, term: '2024-2025 第一学期' },
    { course: '大学英语', credit: 3, score: 78, term: '2024-2025 第一学期' },
    { course: 'C语言程序设计', credit: 3, score: 92, term: '2024-2025 第一学期' },
    { course: '数据结构', credit: 4, score: 88, term: '2024-2025 第一学期' },
    { course: '计算机网络', credit: 3, score: 55, term: '2024-2025 第一学期' },
])
</script>

<style scoped>
.main-content {
    padding: 40px 60px;
}

.grade-card {
    max-width: 900px;
    margin: 0 auto;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: bold;
}
</style>

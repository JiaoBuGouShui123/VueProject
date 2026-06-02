<template>
    <div class="userinfo-page">
        <Head />
        <div class="main-content">
            <el-card class="profile-card" shadow="hover">
                <!-- 头部头像区 -->
                <div class="profile-header">
                    <el-avatar :size="80" class="avatar">
                        {{ data.xm.charAt(0) }}
                    </el-avatar>
                    <div class="profile-title">
                        <h2>{{ data.xm }}</h2>
                        <span class="subtitle">学号：{{ data.xh }}</span>
                    </div>
                </div>

                <el-divider />

                <!-- 信息展示区 -->
                <div class="profile-body">
                    <div class="info-row">
                        <div class="info-item">
                            <span class="info-label">
                                <el-icon><User /></el-icon> 姓名
                            </span>
                            <span class="info-value">{{ data.xm }}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">
                                <el-icon><Male /></el-icon> 性别
                            </span>
                            <span class="info-value">{{ data.xb }}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">
                                <el-icon><Calendar /></el-icon> 年龄
                            </span>
                            <span class="info-value">{{ data.nl }} 岁</span>
                        </div>
                    </div>

                    <el-divider />

                    <div class="info-row">
                        <div class="info-item">
                            <span class="info-label">
                                <el-icon><School /></el-icon> 学院
                            </span>
                            <span class="info-value">
                                <el-tag type="primary" size="large">{{ data.xy }}</el-tag>
                            </span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">
                                <el-icon><Collection /></el-icon> 班级
                            </span>
                            <span class="info-value">{{ data.bj }}</span>
                        </div>
                    </div>

                    <el-divider />

                    <div class="info-row">
                        <div class="info-item full-width">
                            <span class="info-label">
                                <el-icon><LocationFilled /></el-icon> 家庭住址
                            </span>
                            <span class="info-value">{{ data.jtzz }}</span>
                        </div>
                    </div>
                </div>

                <!-- 底部操作 -->
                <template #footer>
                    <div class="card-footer">
                        <el-button type="primary" @click="goBack">返回首页</el-button>
                    </div>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { User, Male, Calendar, School, Collection, LocationFilled } from '@element-plus/icons-vue'
import data from '../../assets/data/userinfo.json'
import Head from '../../components/head.vue'

const router = useRouter()

function goBack() {
    router.push('/home')
}


</script>

<style scoped>
.userinfo-page {
    min-height: 100vh;
    background-color: #f0f2f5;
}

.main-content {
    display: flex;
    justify-content: center;
    padding: 40px 20px;
}

.profile-card {
    width: 100%;
    max-width: 700px;
}

.profile-header {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 10px 0;
}

.avatar {
    background: linear-gradient(135deg, #409Eff, #66b1ff);
    font-size: 32px;
    font-weight: bold;
    flex-shrink: 0;
}

.profile-title h2 {
    margin: 0;
    font-size: 22px;
    color: #303133;
}

.profile-title .subtitle {
    font-size: 14px;
    color: #909399;
    display: block;
    margin-top: 4px;
}

.profile-body {
    padding: 10px 0;
}

.info-row {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
}

.info-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 180px;
}

.info-item.full-width {
    flex: 1;
    min-width: 100%;
}

.info-label {
    font-size: 13px;
    color: #909399;
    display: flex;
    align-items: center;
    gap: 4px;
}

.info-value {
    font-size: 16px;
    color: #303133;
    font-weight: 500;
}

.card-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}
</style>

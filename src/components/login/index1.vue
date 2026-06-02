<template>
	<div class="login-form">
		<div class="form-item">
			<el-input v-model="username" style="width: 400px; height: 45px" placeholder="学号/工号" />
		</div>

		<div class="form-item">
			<el-input v-model="password" style="width: 400px; height: 45px" placeholder="请输入密码" type="password" show-password />
		</div>

        <div class="temp3">
            <el-button class="login-btn" style="width: 400px; height: 45px;" @click="login">登录</el-button>
        </div>
	</div>


</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')

const router = useRouter()

function login() {
    if(username.value=="2024130065"&&password.value=="jsei223055"){
			router.push('/home')
		}
}

</script>

<style scoped>
.login-form {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.temp1{
    margin:20px 0px;
    text-align:center
}
.temp3{
    margin:20px 0px;
    text-align:center
}
.temp2{
    margin:20px 0px;
    text-align:center
}



.form-item {
	margin-bottom: 16px;
}

/* 默认状态：黑色边框 */
.form-item :deep(.el-input__wrapper) {
	box-shadow: 0 0 0 1px #000 inset;
}

/* 选中/聚焦状态：红色边框 */
.form-item :deep(.el-input__wrapper.is-focus) {
	box-shadow: 0 0 0 1px red inset;
}

/* 悬停状态也变红（可选） */
.form-item :deep(.el-input__wrapper:hover) {
	box-shadow: 0 0 0 1px red inset;
}

/* 登录按钮：红色 */
.login-btn {
	background-color: red;
	border-color: red;
	color: #fff;
}

.login-btn:hover {
	background-color: #e60000;
	border-color: #e60000;
}

.login-btn:active {
	background-color: #cc0000;
	border-color: #cc0000;
}
</style>

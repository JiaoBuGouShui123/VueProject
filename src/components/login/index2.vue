<template>
	<div class="login-form">
		<div class="form-item">
			<el-input v-model="username" style="width: 400px; height: 45px" placeholder="请输入手机号" />
		</div>

		<div class="form-item code-input">
			<el-input v-model="code" style="width: 400px; height: 45px" placeholder="请输入验证码">
				<template #append>
					<el-button class="code-btn">获取验证码</el-button>
				</template>
			</el-input>
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
const code = ref('')

const router = useRouter()

function login() {
	if (username.value == "11111111111" && code.value == "123456") {
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

/* append 区域：与输入框相同的白色背景 + 黑色边框 */
.code-input :deep(.el-input-group__append) {
	background-color: #fff;
	border: 1px solid #000;
	border-left: none;
}

/* append 区域聚焦时红色边框 */
.code-input :deep(.el-input-group:focus-within .el-input-group__append) {
	border-color: red;
}

/* 获取验证码按钮 */
.code-btn {
	background-color: #fff;
	border: none;
	border-radius: 0;
	color: #333;
	font-size: 14px;
}

.code-btn:hover {
	color: red;
	background-color: #fff;
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

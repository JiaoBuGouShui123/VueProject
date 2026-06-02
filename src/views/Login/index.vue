<template>
	<div class="con1">
		<div class="con2">
			<img src="@/assets/cuslogo.png">
			<span>|</span>
			<span>统一身份认证</span>
		</div>

		<div class="con3">
			<el-tabs v-model="activeName" class="demo-tabs" >
				<el-tab-pane name="first">
					<template #label>
						<span style="font-size: 25px;">
							<span>账号登录</span>
						</span>
					</template>
					<Login1 />
				</el-tab-pane>
				<el-tab-pane name="second">
					<template #label>
						<span style="font-size: 25px;">
							<span>手机号登录</span>
						</span>
					</template>
					<Login2 />
				</el-tab-pane>
			</el-tabs>

		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import Login1 from "@/components/login/index1.vue"
	import Login2 from "@/components/login/index2.vue"

	const activeName = ref('first')



</script>

<style scoped>
.con1 {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: url('@/assets/cusbg.png') no-repeat center center;
	background-size: cover;

	display: flex;
}

.con2 {
	height: 300px;
	width: 70%;
	color: #ffff;
	margin-top: 60px;
	display: flex;
	align-items: center;
}

.con2 img{
	width: 400px;
}

.con2 span{
	font-size: 50px;
	margin: 0px 5px;
}

.con3 {

	width: 30%;
	background-color: rgba(255, 255, 255, 0.7);

	padding:200px 20px 0px 20px;
}

/* 默认状态：黑色字体 */
.demo-tabs :deep(.el-tabs__item) {
	color: #000;
}

/* 选中状态：红色字体 */
.demo-tabs :deep(.el-tabs__item.is-active) {
	color: red;
}

/* 选中下划线：红色 */
.demo-tabs :deep(.el-tabs__active-bar) {
	background-color: red;
}

.demo-tabs :deep(.el-tabs__content) {
	padding: 32px;
	color: #6b778c;
}
</style>

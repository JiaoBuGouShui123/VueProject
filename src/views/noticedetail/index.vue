<template>
    <div class = "temp1">{{ notice.title }}</div>
    <div class = "temp2"><span>发布时间：{{ notice.time }}</span>
    <span>浏览人数：1000</span>
    <el-divider />
    <div class = "temp4">{{ notice.content }}</div>
    </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  import Notices from '@/assets/data/notices.json';

  const route = useRoute();
  const notice = computed(() => Notices.find(n => n.id === route.params.id));
</script>

<style scoped>
  .temp1{
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0px;
    text-align: center;
    font-weight: 600;
  }

  .temp2{
    text-align: center;
  }

  .temp3{
    margin-left: 20px;
  }

  .temp4{
    margin: 40px 10px;
    font-size: 20px;
  }

</style>  
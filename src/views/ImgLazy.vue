<template>
  <div class="container">
    <div class="item" v-for="item in data.list" :key="item.id">
      <img v-imgLazy class="img" :src="item.path" alt="" srcset="" />
      <div class="title">{{ item.title }}</div>
      <div class="author">{{ item.author }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { imgLazy } from '@/api/ImgLazy'

const data = ref({})
const loadData = async () => {
  data.value = await imgLazy()
  console.log(data.value)
}
loadData()
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;

  .item {
    width: 260px;
    margin-top: 20px;

    .img {
      width: 100%;
      border-radius: 5px;
    }
    .title {
      margin-top: 4px;
      font-size: 16px;
      font-weight: bold;
    }
    .author {
      margin-top: 4px;
      font-size: 12px;
      color: #b4b5b9;
    }
  }
}
</style>

<template>
  <div class="container">
    <!-- 模块 1 -->
    <div class="box">
      <div class="title">{{ data01.title }}</div>

      <ul class="list">
        <li class="item" v-for="item in data01.list" :key="item.id">
          <img class="item-img" :src="item.img" alt="" />
          <div class="item-name">{{ item.name }}</div>
          <div class="item-desc">{{ item.desc }}</div>
        </li>
      </ul>
    </div>

    <!-- 模块 2 -->
    <div class="box">
      <div class="title">{{ data02.title }}</div>

      <ul class="list">
        <li class="item" v-for="item in data02.list" :key="item.id">
          <img class="item-img" :src="item.img" alt="" />
          <div class="item-name">{{ item.name }}</div>
          <div class="item-desc">{{ item.desc }}</div>
        </li>
      </ul>
    </div>

    <!-- 模块 3 -->
    <div class="box" ref="box3Target">
      <div class="title">{{ data03.title }}</div>

      <ul class="list">
        <li class="item" v-for="item in data03.list" :key="item.id">
          <img class="item-img" :src="item.img" alt="" />
          <div class="item-name">{{ item.name }}</div>
          <div class="item-desc">{{ item.desc }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { dataLazy01, dataLazy02, dataLazy03 } from '@/api/dataLazy'
import { useIntersectionObserver } from '@vueuse/core'

const data01 = ref({})
const loadData01 = async () => {
  data01.value = await dataLazy01()
  console.log(data01.value)
}
loadData01()

const data02 = ref({})
const loadData02 = async () => {
  data02.value = await dataLazy02()
  console.log(data02.value)
}
loadData02()

const data03 = ref({})
const loadData03 = async () => {
  data03.value = await dataLazy03()
  console.log(data03.value)
}
// loadData03()

const box3Target = ref()

onMounted(() => {
  // const intersectionObserver = new IntersectionObserver((entries) => {
  //   console.log(entries)
  //   if (entries[0].intersectionRatio <= 0) {
  //     console.log('当前视图不可见')
  //   } else {
  //     console.log(222)
  //   }
  // })
  // intersectionObserver.observe(box3Target.value)

  const { stop } = useIntersectionObserver(box3Target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log('视图可见')
      loadData03()
      stop()
    } else {
      console.log('视图不可见')
    }
  })
})
</script>

<style lang="scss" scoped>
.container {
  background-color: #f5f5f5;
  padding: 18px;

  .box {
    margin: 46px 0;
    padding: 20px 0;
    min-height: 350px;
    .title {
      font-size: 26px;
      margin: 12px;
    }

    .list {
      list-style-type: none;
      display: flex;
      justify-content: space-between;

      .item {
        width: 234px;
        padding: 12px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        .item-img {
          width: 160px;
          height: 160px;
        }

        .item-name {
          margin-top: 18px;
          font-size: 14px;
          color: #333;
        }

        .item-desc {
          margin-top: 6px;
          font-size: 12px;
          color: #b0b0b0;
        }
      }
    }
  }
}
</style>

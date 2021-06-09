<template>
  搜索文件路径：<el-input v-model="path"></el-input> <br />
  搜索关键词：<el-input v-model="keyName"></el-input><br />
  搜索文件数量：<el-input v-model="num"></el-input><br />
  <div class="list">
    <div class="item" v-for="(item, i) in list" :key="'index' + i">
      <div class="title">文件名</div>
      <div class="content">文件内容</div>
    </div>
  </div>

  <div class="block">
    <span class="demonstration">大于 7 页时的效果</span>
    <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { get } from "@/api/request";
export default {
  setup() {
    let path = ref("");
    let keyName = ref("");
    let num = ref(1);
    let page = ref(1);
    let list = ref([]);
    onMounted(() => {
      get(`/search?searchStr=${keyName.value}&filePath=${path.value}&page=${page.value}`).then(res=>{
        console.log(res)
      })
    });
    return {
      path,
      keyName,
      num,
    };
  },
};
</script>

<style>
</style>
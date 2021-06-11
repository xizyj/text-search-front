<template>
  path:
  <el-input v-model="path"></el-input>
  <br />keyName:
  <el-input v-model="keyName"></el-input>
  <br />num:
  <el-input v-model="num"></el-input>
  <br />
  <div class="list">
    <div class="item" v-for="(item,index) in list" :key="item+index">
      <div class="title">{{Object.keys(item)[0]}}</div>
      <div class="content">{{item[Object.keys(item)[0]]}}</div>
    </div>
  </div>

  <div class="block">
    <span class="demonstration">大于 7 页时的效果</span>
    <el-pagination @current-page="changePage" layout="prev, pager, next" :total="1000"></el-pagination>
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
    const changePage = (v: number) => {
      page.value = v;
    };

    const getData = () => {
      get(
        `/search?searchStr=${keyName.value}&filePath=${path.value}&page=${page.value}`
      ).then(res => {
        if (res.code == 0) {
          list.value = res.data.fileList;
        }
      });
    };

    onMounted(() => {
      getData();
    });
    return {
      path,
      keyName,
      num,
      list
    };
  }
};
</script>

<style>
</style>
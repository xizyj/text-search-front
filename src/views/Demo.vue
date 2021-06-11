<template>
  <div class="search-item">
    path:
    <el-input v-model="path"></el-input>
  </div>
  <div class="search-item">
    keyName:
    <el-input v-model="keyName"></el-input>
  </div>
  <div class="search-item">
    num:
    <el-input v-model="num"></el-input>
  </div>

  <br />
  <br />
  <div class="list">
    <div class="item" v-for="(item,index) in list" :key="item+index">
      <div class="title">{{Object.keys(item)[0]}}</div>
      <div class="content">{{item[Object.keys(item)[0]]}}</div>
    </div>
  </div>

  <div class="block">
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
      list,
      changePage
    };
  }
};
</script>

<style lang="less">
.search-item{
  margin: 5px;
  text-align: left;
  margin-left: 10%;
}
.el-input {
  width: 180px;
}
.list{
  text-align: left;
  .item{
    margin: 20px 10px;
  }
}
</style>
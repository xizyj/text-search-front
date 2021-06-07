<template>
  搜索文件路径：<el-input></el-input> <br/>
  搜索关键词：<el-input></el-input><br/>
  搜索文件数量：<el-input></el-input><br/>
  <div class="title">文件名</div>
  <div class="content">文件内容</div>

  <div class="block">
    <span class="demonstration">大于 7 页时的效果</span>
    <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
<template>
  <div class="p-4">
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>
    <el-pagination layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination>
    <Test />
  </div>
</template>
<script lang="ts" setup>
import { Plus, Edit, Delete } from "@element-plus/icons-vue";
import Test from "@/components/Test.vue";
</script>
<style scoped lang="scss"></style>

<template>
  <div class="top">
    <div class="left">
      <span class="lbtn">首页</span>
    </div>
    <div class="center">
      <div class="title">可视化大数据平台</div>
    </div>
    <div class="right">111</div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 40px;
  display: flex;
  .left {
    flex: 1;
    background: url("../../images/dataScreen-header-left-bg.png") no-repeat;
    background-size: cover;
    .lbtn {
      width: 100px;
      height: 40px;
      float: right;
      background: url("../../images/dataScreen-header-btn-bg-l.png") no-repeat;
      background-size: cover;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      color: white;
      font-size: 18px;
    }
  }
  .right {
    flex: 1;
  }

  .center {
    flex: 2;
  }
}
</style>

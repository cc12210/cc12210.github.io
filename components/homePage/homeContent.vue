<template>
  <div class="home-content">
    <a-row type="flex" justify="center">
      <a-col :lg="14" :md="20" :sm="20" :xs="24">
        <div class="left-title">
          <slot name="left-content"></slot>
        </div>
      </a-col>
      <a-col :lg="6" :md="0" :sm="0" :xs="0">
        右侧
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home-content {
  box-sizing: border-box;
  background: #f8f9fa;
  padding: 74px 6px 6px;
  .left-title {
    height: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    overflow: scroll;
  }
}
</style>

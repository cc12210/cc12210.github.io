<template>
  <div class="title-head">
    <div class="head-info">
      <div class="left-title">
        {{ title }}
      </div>
      <span
        v-for="(item, index) in list"
        :key="index"
        class="title-item"
        :class="{ active: activeTitle === item }"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    activeTitle: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.title-head {
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 8px #f0f1f2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .head-info {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;

    .left-title {
      font-size: 24px;
      color: #007fff;
      margin-right: 80px;
    }
    .title-item {
      color: #71777c;
      cursor: pointer;
      padding: 0 20px;
      &:active,
      &:hover {
        color: #007fff;
      }
      &.active {
        color: #007fff;
      }
    }
  }
}
</style>

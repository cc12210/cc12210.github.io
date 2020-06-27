<template>
  <div class="title-head">
    <a-row type="flex" justify="center">
      <a-col :sm="0" :xs="12">
        <div @click="backHome" class="min-device-title">
          {{ title }}
        </div>
      </a-col>
      <a-col :md="4" :sm="4" :xs="0">
        <div @click="backHome" class="left-title">
          {{ title }}
        </div>
      </a-col>
      <a-col :md="16" :sm="16" :xs="0">
        <span
          v-for="(item, index) in list"
          :key="index"
          class="title-item"
          :class="{ active: activeTitle === item }"
        >
          {{ item }}
        </span>
      </a-col>
    </a-row>
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
  methods: {
    backHome() {
      location.href = "/";
    },
  },
};
</script>

<style lang="less" scoped>
.title-head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  z-index: 2;
  // display: flex;
  // justify-content: center;
  box-shadow: 0 2px 8px #f0f1f2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .min-device-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }
  .left-title {
    font-size: 24px;
    color: #007fff;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }
  .title-item {
    color: #71777c;
    cursor: pointer;
    padding: 0 20px;
    line-height: 50px;
    &:active,
    &:hover {
      color: #007fff;
    }
    &.active {
      color: #007fff;
    }
  }
}
</style>

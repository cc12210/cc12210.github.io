<template>
  <div class="home-md-list">
    <div @click="getDetail" class="md-title">
      {{ cardData.title }}
    </div>
    <div class="md-intro">
      {{ cardData.intro }}
    </div>
    <div class="md-create-time">
      <span>{{ cardData.time }}</span>
      <span @click="getDetail" class="md-read-more">全文阅读</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getDetail() {
      const openUrl = "./details/?fileId=" + this.cardData.fileName;
      location.href = openUrl;
    },
  },
};
</script>

<style lang="less" scoped>
.home-md-list {
  background: #fff;
  .md-title {
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
    border-bottom: 1px solid hsla(0, 0%, 59%, 0.1);
    border-left: 2px solid #007fff;
    cursor: pointer;
    &:hover {
      color: #007fff;
    }
  }
  .md-intro {
    padding: 10px;
  }
  .md-create-time {
    border-top: 1px solid hsla(0, 0%, 59%, 0.1);
    padding: 10px;
    .md-read-more {
      margin-left: 14px;
      cursor: pointer;
      &:hover {
        color: #007fff;
      }
    }
  }
}
</style>

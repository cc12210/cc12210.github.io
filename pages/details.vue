<template>
  <div class="info-detail">
    <titleHead :title="homeTitle" :list="tabList" />
    <homeContent>
      <div slot="left-content">
        <div v-html="test"></div>
      </div>
    </homeContent>
  </div>
</template>

<script>
import titleHead from "../components/homePage/titleHead";
import homeContent from "../components/homePage/homeContent";
import { tabList, homeTitle } from "../util/constant";
import test from "../assets/md/test.md";
export default {
  head: {
    title: "曹小诚的个人空间",
  },
  components: { titleHead, homeContent },
  computed: {
    test() {
      return test;
    },
  },
  data() {
    return {
      tabList: tabList,
      homeTitle: homeTitle,
      content: "",
    };
  },
  mounted() {
    console.log(tabList);
  },
};
</script>

<style lang="less" scoped>
.info-detail {
  .left-content {
    height: 300px;
    overflow: scroll;
  }
}
</style>

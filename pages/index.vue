<template>
  <div class="home">
    <titleHead :title="homeTitle" :list="tabList" activeTitle="首页" />
    <homeContent />
  </div>
</template>

<script>
import titleHead from "../components/homePage/titleHead";
import homeContent from "../components/homePage/homeContent";
import { tabList, homeTitle } from "../util/constant";
export default {
  head: {
    title: "曹小诚的个人空间",
  },
  components: { titleHead, homeContent },
  data() {
    return {
      tabList: tabList,
      homeTitle: homeTitle,
    };
  },
  mounted() {
    console.log(tabList);
  },
};
</script>

<style></style>

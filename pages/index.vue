<template>
  <div class="home">
    <titleHead :title="homeTitle" :list="tabList" activeTitle="首页" />
    <homeContent>
      <div slot="left-content">
        <mdListItem
          v-for="(item, index) in mdList"
          :key="index"
          :cardData="item"
        />
      </div>
    </homeContent>
  </div>
</template>

<script>
import titleHead from "../components/homePage/titleHead";
import mdListItem from "../components/homePage/mdListItem";
import homeContent from "../components/homePage/homeContent";
import { tabList, homeTitle } from "../util/constant";
import { mdList } from "../assets/md/index";
export default {
  head: {
    title: "曹小诚的个人空间",
  },
  components: { titleHead, homeContent, mdListItem },
  data() {
    return {
      tabList: tabList,
      homeTitle: homeTitle,
      mdList: mdList,
    };
  },
  mounted() {
    console.log(tabList);
  },
};
</script>

<style lang="less" scoped>
.home {
}
</style>

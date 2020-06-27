<template>
  <div class="info-detail">
    <titleHead :title="homeTitle" :list="tabList" />
    <homeContent>
      <div slot="left-content">
        <div v-html="mdContentComputed" class="article-info__global"></div>
      </div>
    </homeContent>
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
  computed: {
    mdContentComputed() {
      return this.mdContent;
    },
  },
  data() {
    return {
      tabList: tabList,
      homeTitle: homeTitle,
      mdContent: "",
    };
  },
  mounted() {
    this.getText();
  },
  methods: {
    getText() {
      const fileId = this.$route.query.fileId;
      // if (process.client) {
      //   const b = require(`../static/md/${a}.md`);
      //   console.log(b);
      // }
      import(`../assets/md/${fileId}.md`)
        .then((res) => {
          this.mdContent = res.default;
        })
        .catch((err) => {
          this.mdContent = "";
        });
    },
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

<style lang="less">
// .article-info__global {
pre {
  padding: 14px;
  background: #1d1f21 !important;
  color: #c5c8c6;
}
// }
</style>

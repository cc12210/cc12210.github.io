export { default as HomeContent } from '../../components/homePage/homeContent.vue'
export { default as TitleHead } from '../../components/homePage/titleHead.vue'

export const LazyHomeContent = import('../../components/homePage/homeContent.vue' /* webpackChunkName: "components/homePage/homeContent'}" */).then(c => c.default || c)
export const LazyTitleHead = import('../../components/homePage/titleHead.vue' /* webpackChunkName: "components/homePage/titleHead'}" */).then(c => c.default || c)

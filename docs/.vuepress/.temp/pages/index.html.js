export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"actionText\":\"快速开始 →\",\"actionLink\":\"/zh/guide/\",\"actions\":[{\"text\":\"Java基础\",\"link\":\"/zh/basic/index.md\",\"type\":\"primary\"},{\"text\":\"框架\",\"link\":\"/zh/framework/index.md\",\"type\":\"secondary\"},{\"text\":\"中间件\",\"link\":\"/zh/middleware/index.md\",\"type\":\"thirdary\"}],\"features\":[{\"title\":\"使用人员\",\"details\":\"准备面试\"},{\"title\":\"文档内容\",\"details\":\"中高级Java面试问题点\"},{\"title\":\"文档作用\",\"details\":\"帮助复习面试问题\"}],\"footer\":\"MIT Licensed | Copyright © 2023\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

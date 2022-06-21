export const data = JSON.parse("{\"key\":\"v-e1e3da16\",\"path\":\"/posts/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"blog_index\":true},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/README.md\"}")

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

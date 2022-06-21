export const data = JSON.parse("{\"key\":\"v-61b7ac72\",\"path\":\"/posts/first-post.html\",\"title\":\"post 1\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"post 1\",\"date\":\"20 June 2022\",\"description\":\"Descrição do primeiro post\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Headers\",\"slug\":\"headers\",\"children\":[]},{\"level\":2,\"title\":\"This is a Heading h2\",\"slug\":\"this-is-a-heading-h2\",\"children\":[]},{\"level\":2,\"title\":\"Emphasis\",\"slug\":\"emphasis\",\"children\":[]},{\"level\":2,\"title\":\"Lists\",\"slug\":\"lists\",\"children\":[{\"level\":3,\"title\":\"Unordered\",\"slug\":\"unordered\",\"children\":[]},{\"level\":3,\"title\":\"Ordered\",\"slug\":\"ordered\",\"children\":[]}]},{\"level\":2,\"title\":\"Images\",\"slug\":\"images\",\"children\":[]},{\"level\":2,\"title\":\"Links\",\"slug\":\"links\",\"children\":[]},{\"level\":2,\"title\":\"Blockquotes\",\"slug\":\"blockquotes\",\"children\":[]},{\"level\":2,\"title\":\"Tables\",\"slug\":\"tables\",\"children\":[]},{\"level\":2,\"title\":\"Blocks of code\",\"slug\":\"blocks-of-code\",\"children\":[]},{\"level\":2,\"title\":\"Inline code\",\"slug\":\"inline-code\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/first-post.md\"}")

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

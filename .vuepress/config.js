const { defaultTheme } = require("vuepress");
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')


module.exports = {
    title: "Spellblog",
    plugins: [
        docsearchPlugin({
          // options
        }),
      ],
    theme: defaultTheme({
        logo: "https://reported.space/favicon.ico"
    })
}
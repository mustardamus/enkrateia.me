<script>
// How to use:

// <template><markdown>
// # A heading

// * and a
// * list
// * [and](http://so-on.com)

// ```javascript
// console.log('neat') // works
// ```

// ```xml
// &lt;h1&gt;a heading&lt;/h1&gt;
// ```

// ```css
// body {
//   background: red
// }
// ```
// </markdown></template>

// <script>
// import Markdown from '~components/Markdown'
// export default { components: { Markdown } }
// </script>

// Caveats:
// - you can't use markup inside the markdown, it will not be
//   converted because Vue's slot mechanism will clear it and only returns the text
// - not able to show curly brackets {{}}, because Vue tries to interpret them,
//   even inside code blocks

import marked from 'marked' // https://github.com/chjj/marked
import hljs from 'highlight.js/lib/highlight' // https://highlightjs.org/usage/
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('handlebars', handlebars)

marked.setOptions({
  langPrefix: 'hljs lang-', // .hljs needed for propper styling
  highlight (code, lang) {
    return hljs.highlight(lang, code, true).value
  }
})

export default {
  render (createElement) {
    const markdown = this.$slots.default[0].text
    const innerHTML = marked(markdown)

    return createElement('div', {
      domProps: { innerHTML }
    })
  }
}
</script>

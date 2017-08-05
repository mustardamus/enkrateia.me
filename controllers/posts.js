const fs = require('fs')
const path = require('path')
const marked = require('marked')
const frontMatter = require('front-matter')
const hljs = require('highlight.js')
const moment = require('moment')

marked.setOptions({
  langPrefix: 'hljs lang-', // .hljs needed for propper styling
  highlight (code, lang) {
    if (lang) {
      return hljs.highlight(lang, code, true).value
    } else {
      return hljs.highlightAuto(code).value
    }
  }
})

const postsDir = path.join(__dirname, '../assets/posts')
const postsFiles = fs.readdirSync(postsDir)

const posts = postsFiles.filter(fileName => {
  return fileName.substr(0, 5) !== 'draft'
}).map(fileName => {
  const filePath = path.join(postsDir, fileName)
  const content = fs.readFileSync(filePath, 'utf8')
  const front = frontMatter(content)
  const markdown = front.body
  const excerpt = markdown.split('\n\n').filter(n => n !== '')[0]
  let meta = front.attributes

  meta.dateFormatted = moment(meta.date).format('MMMM Do YYYY')

  return {
    meta,
    html: marked(markdown),
    excerpt: marked(excerpt)
  }
})

const postsIndex = posts.map(post => {
  return {
    meta: post.meta,
    excerpt: post.excerpt
  }
})

module.exports = {
  'GET /posts': (req, res) => {
    res.json(postsIndex)
  },

  'GET /posts/:slug': (req, res) => {
    const post = posts.filter(post => {
      return post.meta.slug === req.params.slug.toLowerCase()
    })

    if (post.length) {
      res.json(post[0])
    } else {
      res.status(404).send('Post not found.')
    }
  }
}

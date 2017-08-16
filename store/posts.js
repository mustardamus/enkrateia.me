import axios from '~/plugins/axios'

export const state = () => ({
  post: {
    meta: {},
    html: '',
    excerpt: ''
  },

  index: [
    /* {
      meta: { slug, title, date },
      excerpt: ''
    } */
  ]
})

export const mutations = {
  setIndex (state, posts) {
    state.index = posts
  },

  setPost (state, post) {
    state.post = post
  }
}

export const actions = {
  loadIndex ({ commit }) {
    return axios.get('/api/posts')
      .then(res => commit('setIndex', res.data))
  },

  loadBySlug ({commit}, slug) {
    return axios.get(`/api/posts/${slug}`)
      .then(res => commit('setPost', res.data))
  }
}

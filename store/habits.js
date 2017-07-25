import axios from '~plugins/axios'

export const state = () => ({
  index: [
    /*
    {
      "id": "walking",
      "title": "Walking",
      "why": "...",
      "how": "...",
      "unit": "steps",
      "min": 4000,
      "bonus": 10000,
      "days": [
        {
          "day": 1,
          "done": false,
          "bonus": false
        }, ...
      ]
    }, ...
    */
  ]
})

export const mutations = {
  setIndex (state, habits) {
    state.index = habits
  }
}

export const actions = {
  loadIndex ({ commit }) {
    return axios.get('/api/habits')
      .then(res => commit('setIndex', res.data))
  }
}

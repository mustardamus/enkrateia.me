import axios from '~plugins/axios'

export const state = () => ({
  pictures: [
    /*
    {
      "country": "United-Kingdom",
      "cities": [
        {
          "city": "Doncaster",
          "pictures": [
            "100_1432.JPG",
            ...
          ]
        },
        ...
      ]
    },
    ...
    */
  ]
})

export const mutations = {
  setPictures (state, pictures) {
    state.pictures = pictures
  }
}

export const actions = {
  loadPictures ({ commit }) {
    return axios.get('/api/travel/pictures')
      .then(res => commit('setPictures', res.data))
  }
}

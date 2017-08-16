import axios from '~/plugins/axios'

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
  ],

  covers: {
    Vienna: '100_1757.JPG',
    Brugge: '100_0897.JPG',
    Brussels: '100_0807.JPG',
    Turnhout: '100_1510.JPG',
    Sofia: '100_1590.JPG',
    Prague: '100_1306.JPG',
    Copenhagen: '100_1426.JPG',
    Berlin: '100_1519.JPG',
    Cologne: '100_0932.JPG',
    Dresden: '100_1913.JPG',
    Ingolstadt: '100_2061.JPG',
    Leipzig: '100_0945.JPG',
    Ljubljana: '100_3530.JPG',
    Plauen: '100_0972.JPG',
    Budapest: '100_1319.JPG',
    Genova: '100_2757.JPG',
    Milano: '100_2647.JPG',
    Pisa: '100_2792.JPG',
    Rome: '100_2853.JPG',
    Amsterdam: '100_0467.JPG',
    Rotterdam: '100_0715.JPG',
    Bucharest: '100_1198.JPG',
    Belgrade: '100_1296.JPG',
    Bratislava: '100_1006.JPG',
    Barcelona: '100_2964.JPG',
    Valencia: '100_3159.JPG',
    Doncaster: '100_1532.JPG',
    Leeds: '100_1575.JPG',
    Manchester: '100_1426.JPG',
    Wroclaw: '100_3358.JPG',
    Munich: '100_3442.JPG'
  }
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

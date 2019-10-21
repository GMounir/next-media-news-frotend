export const state = () => ({
  menus: []
})

export const getters = {
  menus (state) {
    return state.menus
  }
}

export const mutations = {
  SET_MENUS (state, menus) {
    state.menus = menus
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    let response = await this.$axios.get('/menus/get_menu/?menu_id=7')

    commit('SET_MENUS', _.get(response, 'data.menu.output', null))
  }
}
